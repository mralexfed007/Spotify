import React from "react";

const list = [['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg', 'Hoodie Allen'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg', 'Mike Stud'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg', 'Drake'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg', 'J. Cole'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg', 'Big Sean'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg', 'Wiz Khalifa'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg', 'Yonas'],
  ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg', 'Childish Gambino']];

export const RelatedArtists: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="tab-related-artists">
      <div className="media-cards">
        {list.map((artist, id) => (
          <div className="media-card" key={id}>
            <div className="media-card__img">
              <img src={`${artist[0]}`} alt={`${artist[1]}`} />
              <i className="fas fa-play" />
            </div>
            <button className="media-card__title">
              {artist[1]}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  )
}
