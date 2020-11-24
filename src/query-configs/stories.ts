import { QueryConfig } from "redux-query";
export const topStoriesRequest = (): QueryConfig => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
    transform: (body) => {
      console.log("body", body);
      return {
        topStoryIds: body
      };
    },
    update: {
      topStoryIds: (prev, next) => {
        return next;
      }
    }
  };
};

export const itemRequest = (itemId: number): QueryConfig => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
    transform: (body) => {
      console.log("story", body);
      return {
        itemsById: {
          [itemId]: body
        }
      };
    },
    update: {
      itemsById: (prev, next) => {
        return {
          ...prev,
          ...next
        };
      }
    }
  };
};
