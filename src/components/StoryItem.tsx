import * as React from "react";
import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";

import * as storyQueryConfigs from "../query-configs/stories";
import * as storySelectors from "../selectors/stories";

const StoryItem = ({ itemId }) => {
  const [{ isPending }] = useRequest(storyQueryConfigs.itemRequest(itemId));
  const storyItem = useSelector((state) =>
    storySelectors.getItem(state, itemId)
  );

  console.log("storyitem", storyItem);

  return (
    <li>
      {isPending && "Loading...."}
      {!!storyItem && (
        <div>
          <div>
            <a href={storyItem.url} target="_blank" rel="noopener noreferrer">
              {storyItem.title}
            </a>
          </div>
          <div>
            {storyItem.score} points by{" "}
            <a
              href={`https://news.ycombinator.com/user?id=${storyItem.by}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {storyItem.by}
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default StoryItem;
