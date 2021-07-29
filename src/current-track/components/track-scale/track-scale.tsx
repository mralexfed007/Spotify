import React, { useState, useMemo } from "react";
import { withStyles } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
  root: {
    color: '#1ed760 !important',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#1ed760',
    border: '2px solid currentColor',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    backgroundColor: '#4688d7 !important',
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

interface Props {
  totalTime: number,
  currentTime: number,
}

export const TrackScale : React.FunctionComponent<Props> = ({totalTime, currentTime}): JSX.Element => {
  const dependence = useMemo(() => totalTime / 100, [totalTime]);

  const[time, setTime] = useState(currentTime);

  const convert = (time: number) => {
    const min = Math.floor(time/60)
    const sec = (time % 60 >= 10)
      ? Math.ceil(time % 60)
      : `0${Math.ceil(time % 60)}`

    return `${min}:${sec}`
  }

  return (
    <div className="current-track__scale">
      <div className="current-track__scale__current-time">{convert(time * dependence)}</div>
      <PrettoSlider
        valueLabelFormat={(value) => convert(+value * dependence)}
        valueLabelDisplay="auto" aria-label="pretto slider"
        value={time}
        onChange={(e, value) => setTime(+value)}
      />
      <div className="current-track__scale__total-time">{convert(totalTime)}</div>
    </div>
  )
}