import React from "react";

interface Props {
  tracks: Array<Array<string>>
}

export const PopularTracks: React.FunctionComponent<Props> = ({tracks}) => {
  return (
    <div className="tracks">
      {tracks.map((track, id) => (
      <div
        className="track"
        key={track[id]}
      >
        <div className="track__img">
          <img src={`${track[0]}`} alt={`${id + 1}`} />
        </div>
        <div className="track__number">
          {id + 1}
        </div>
        <div className="track__added">
          <i className={`${track[1]}`}></i>
        </div>
        <div className="track__title">
          {track[2]}
        </div>
        <div className="track__explicit">
          <span className="label">Explicit</span>
        </div>
        <div className="track__plays">
          {track[3]}
        </div>
      </div>
    ))}
    </div>
  )
}