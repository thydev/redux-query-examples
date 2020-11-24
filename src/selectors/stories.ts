const emptyArray: number[] = [];

export const getTopStoryIds = (state) => {
  return state.entities.topStoryIds || emptyArray;
};

export const getItem = (state, itemId) => {
  return (state.entities.itemsById || {})[itemId];
};
