import * as React from "react";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";

import store from "./configureStore";
import { Comp1 } from "./Comp1";
import HackerNews from "./components/HackerNews";
import "./styles.css";
import { getQueries } from "./configureStore";
// export const getQueries = (state: { queries: any }) => state.queries;

export default function App() {
  return (
    <Provider store={store}>
      <ReduxQueryProvider queriesSelector={getQueries}>
        <Comp1 />
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
        <HackerNews />
      </ReduxQueryProvider>
    </Provider>
  );
}
