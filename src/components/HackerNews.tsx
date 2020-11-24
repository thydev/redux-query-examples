import * as React from "react";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";

import TopStories from "../components/TopStories";
import { getQueries } from "../configureStore";

const HackerNews = () => {
  return (
    <>
      <h1>Hacker News</h1>
      <TopStories />
    </>
  );
};

export default HackerNews;
