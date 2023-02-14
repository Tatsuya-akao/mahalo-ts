export const formatDate = (timestamp: Date) => {
  const timeData = new Date(timestamp);

  const year = timeData.getFullYear();
  const month = timeData.getMonth() + 1;
  const date = timeData.getDate();

  return `${year}年${month}月${date}日`;
};
