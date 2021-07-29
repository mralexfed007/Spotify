import React, { useState } from 'react';
import { ArtistHeader } from './artist-header';
import { SwitchTabs } from './tabs/switch-tabs';


export const ContentMiddle: React.FunctionComponent = () : JSX.Element => {
  const [currentTab, setCurrentTab] = useState('overview')
  return (
    <section className="content__middle">
      <div className="artist">
        <ArtistHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <SwitchTabs currentTab={currentTab} />
      </div>
    </section>
  )
}
