import * as React from "react";
import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";

import StoryItem from "../components/StoryItem";
import * as storyQueryConfigs from "../query-configs/stories";
import * as storySelectors from "../selectors/stories";

const TopStories = () => {
  useRequest(storyQueryConfigs.topStoriesRequest());
  const topStoryIds = useSelector(storySelectors.getTopStoryIds);
  console.log("topStoryIds", topStoryIds);
  return (
    <ol>
      {topStoryIds.slice(0, 30).map((itemId) => (
        <StoryItem itemId={itemId} key={itemId} />
      ))}
    </ol>
  );
};

export default TopStories;
