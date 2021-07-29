import React from "react";
import { ContentLeft } from '../components/content-left';
import { ContentMiddle } from '../components/content-middle';
import { ContentRight } from "../components/content-right";
// import { SearchForm } from "../components/SearchForm";
// import { UserInfo } from "../components/UserInfo";

export const ContentView : React.FunctionComponent = () => {
  return (
    <section className='content'>
      <ContentLeft />
      <ContentMiddle />
      <ContentRight />
    </section>
  );
}