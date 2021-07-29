import React from "react";
import { AlbumsSection } from "./components/albums-section";
import { ArtistSection } from "./components/artist-section";
import { RelatedSection } from "./components/related-section";

export const OverviewTab: React.FunctionComponent = () : JSX.Element => {
  return (
    <div className="tab-overview">
      <ArtistSection />
      <RelatedSection />
      <AlbumsSection />
    </div>
  );
}