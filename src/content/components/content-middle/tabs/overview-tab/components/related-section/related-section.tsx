import React from "react";

export const RelatedSection: React.FunctionComponent = () => {
  interface Props {
    artists: Array<Array<string>>
  }

  const list = [
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg','Hoodie Allen'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg','Mike Stud'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg','Drake'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg','J. Cole'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg','Big Sean'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg','Wiz Khalifa'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg','Yonas'],
  ]

  const ArtistsList: React.FunctionComponent<Props> = ({artists}) => {
    return (
    <div className="related-artists"> 
        {artists.map(artist => (
            <button className="related-artist">
              <span className="related-artist__img">
                <img src={`${artist[0]}`} alt={artist[1]} />
              </span>
              <span className="related-artist__name">
                {artist[1]}
              </span>
            </button>
        ))}
      </div>
    );
  }

  return (
    <div className="tab-overview__related">
      <div className="title">
        Related Artists
      </div>
      <ArtistsList artists={list}/>
    </div>
  );
}