export const calculatePercentage = (totalItems, packedItems) => {
  return totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
};
