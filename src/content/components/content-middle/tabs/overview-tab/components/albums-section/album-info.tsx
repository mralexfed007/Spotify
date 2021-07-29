import React from "react";

export const AlbumInfo: React.FunctionComponent = () : JSX.Element => {
  return (
    <div className="album__info">
      <div className="album__info__img">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />
      </div>
      <div className="album__info__meta">
        <div className="album__year">
          2015
        </div>
        <div className="album__name">
          When It's Dark Out
        </div>
        <div className="album__actions">
          <button className="btn-rounded btn-save">
            Save
          </button>
          <button className="btn-rounded btn-more">
            <i className="fas fa-ellipsis-h" />
          </button>
        </div>
      </div>
    </div>
  );
};
