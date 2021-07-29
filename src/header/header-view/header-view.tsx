import React from "react";
import { PageFlows } from '../components/page-flows';
import { SearchForm } from "../components/search-form";
import { UserInfo } from "../components/user-info";

export const HeaderView : React.FunctionComponent = () => {
  return (
    <section className='header'>
      <PageFlows />
      <SearchForm />
      <UserInfo />
    </section>
  );
}
