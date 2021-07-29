import React from 'react';
import cn from 'classnames';

interface Props {
  currentTab: string,
  setCurrentTab: (value: string) => void,
}


export const ArtistHeader: React.FunctionComponent<Props> = ({currentTab, setCurrentTab}) : JSX.Element => {
  return (
    <div className="artist__header">
      <div className="artist__info">
        <div className="profile__img">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" />
          <i className="fas fa-check"></i>
        </div>
        <div className="artist__info__meta">
          <div className="artist__info__type">
            artist
          </div>
          <div className="artist__info__name">
            G-Eazy
          </div>
          <div className="artist__info__actions">
            <button className="btn-play">
              <i className="fas fa-play"></i>
              Play
            </button>
            <button className="btn-follow">
              Follow
            </button>
            <button className="btn-more">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="artist__listeners">
        <div className="artist__listeners__count">
          15,662,810
        </div>
        <div className="artist__listeners__label">
          MONTHLY LISTENERS
        </div>
      </div>
      <div className="artist__navigation">
        <ul className="nav nav-tabs">
          <li>
            <button
              className={cn("nav-tabs__tab", {
                'is-active': currentTab === 'overview'
              })}
              onClick={() => setCurrentTab('overview')}
            >
              overview
            </button>
          </li>
          <li>
            <button
              className={cn("nav-tabs__tab", {
                'is-active': currentTab === 'related-artist'
              })}
              onClick={() => setCurrentTab('related-artist')}
            >
              related artist
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}