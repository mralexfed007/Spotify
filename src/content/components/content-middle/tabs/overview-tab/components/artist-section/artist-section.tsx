import React from "react";
import { useState } from "react";
import { PopularTracks } from './popular-tracks';

export const ArtistSection: React.FunctionComponent = () : JSX.Element => {
  const popularTracks = [
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Me, Myself & I', '147,544,165'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-plus', 'I Mean It', '74,568,782'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Calm Down', '13,737,506'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-plus', 'Some Kind Of Drug', '12,234,881'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-check', 'Let`s Get Lost', '40,882,954'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Me, Myself & I', '147,544,165'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-plus', 'I Mean It', '74,568,782'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Calm Down', '13,737,506'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-plus', 'Some Kind Of Drug', '12,234,881'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-check', 'Let`s Get Lost', '40,882,954'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Me, Myself & I', '147,544,165'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-plus', 'I Mean It', '74,568,782'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-check', 'Calm Down', '13,737,506'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'fas fa-plus', 'Some Kind Of Drug', '12,234,881'],
    ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'fas fa-check', 'Let`s Get Lost', '40,882,954'],
  ];

  const [showCount, setShowCount] = useState<number>(5)
  const handleChange = (event: any) => {
    setShowCount(prev => prev + +event.target.value as number);
  };

  return (
    <div className="tab-overview__artist">
      <div className="title">
        latest release
      </div>
      <div className="latest-release">
        <div className="latest-release__img">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />
        </div>
        <div className="latest-release__song">
          <div className="latest-release__song__title">
            Drifting (Track Commentary)
          </div>
          <div className="latest-release__song__date">
            4 December 2015
          </div>
        </div>
      </div>
      <div className="title">
        popular
      </div>
        <PopularTracks tracks={[...popularTracks.slice(0, showCount)]}/>
      <button
        className="btn-rounded showmore"
        value={5}
        onClick={handleChange}
      >
        Show 5 more
      </button>
    </div>
  );
}