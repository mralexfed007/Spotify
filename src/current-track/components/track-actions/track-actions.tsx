import React from "react";

export const TrackActions: React.FunctionComponent = (): JSX.Element => (
  <div className="current-track__actions">
      <i className="fas fa-step-backward back" />
      <i className="fas fa-play play" />
      <i className="fas fa-step-forward forward" />
  </div>
);
