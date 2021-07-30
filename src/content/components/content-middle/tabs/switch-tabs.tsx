import React from "react";
import { OverviewTab } from "./overview-tab";
import { RelatedArtists } from "./related-artists-tab";

interface Props {
  currentTab: string
}

export const SwitchTabs: React.FunctionComponent<Props> = ({currentTab}) : JSX.Element => (
  currentTab === 'related-artist' ? (<RelatedArtists />) : (<OverviewTab />)
)
