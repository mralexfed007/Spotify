import React from "react";
import { TrackOptions } from "../components/track-options";

import { TrackActions } from "../components/track-actions";
import { TrackScale } from "../components/track-scale";


export const CurrentTrackView : React.FunctionComponent = (): JSX.Element => (
    <section className='current-track'>
      <TrackActions />
      <TrackScale totalTime={241} currentTime={34} />
      <TrackOptions />
    </section>
  );
