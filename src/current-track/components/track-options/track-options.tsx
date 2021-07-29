import React from "react";
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

export const TrackOptions: React.FunctionComponent = (): JSX.Element => {
  const [value, setValue] = React.useState<number>(30);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
  <div className="current-track__options">
    <span>
      Lirics
    </span>
    <span>
      <i className="fas fa-bars" />
    </span>
    <span>
      <i className="fas fa-random" />
    </span>
    <span>
      <i className="fas fa-sync-alt" />
    </span>
    <span>
      <i className="fas fa-mobile-alt" />
      Devices Available
    </span>
    <span className="volume">
      <i className="fas fa-volume-up" />
      <div className="volume__scale">
        <Grid item>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
      </div>
    </span>
  </div>
)};