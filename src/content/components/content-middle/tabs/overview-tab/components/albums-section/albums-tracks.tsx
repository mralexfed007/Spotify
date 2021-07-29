import React from "react";

interface Props {
  tracks: Array<Array<string>>
}

export const AlbumsTracks: React.FunctionComponent<Props> = ({tracks}) : JSX.Element => {
  return (
    <div className="album__tracks">
      <div className="album__tracks__head">
        <div className="album__tracks__head__number">#</div>
        <div className="album__tracks__head__title"> Song</div>
        <div className="album__tracks__head__length">
          <i className="fas fa-clock" />
        </div>
        <div className="album__tracks__head__popularity">
          <i className="fas fa-thumbs-up" />
        </div>
      </div>
      {tracks.map((track, id) => (
        <div className="track">
          <div className="track__number">{id + 1}</div>
          <div className="track__added">
          <i className={id % 3 === 0 ? 'fas fa-check' : 'fas fa-plus'} />
          </div>
          <div className="track__title">
            <div className="title">
              {track[0]}
            </div>
            {track.length > 2 && (
              <div className="featured">
                {track[1]}
              </div>
            )}
          </div>
          <div className="track__explicit">
            <span className="label">
              Explicit
            </span>
          </div>
          <div className="track__length">{track.length > 2 ? track[2] : track[1]}</div>
          <div className="track__popularity">
            <i className={id % 2 === 0 ? 'fas fa-level-up-alt' : 'fas fa-level-down-alt'} />
          </div>
        </div>
      ))}
    </div>
  )
}