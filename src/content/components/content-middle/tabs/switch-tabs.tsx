import React from "react";
import { OverviewTab } from "./overview-tab";
import { RelatedArtists } from "./related-artists-tab";

interface Props {
  currentTab: string
}

export const SwitchTabs: React.FunctionComponent<Props> = ({currentTab}) : JSX.Element => {
  if (currentTab === 'related-artist') {
    return (
      <div className="artist__content">
        <RelatedArtists />
      </div>
  )
  } else {
    return(
      <div className="artist__content">
        <OverviewTab />
      </div>
    ) 
  }
}