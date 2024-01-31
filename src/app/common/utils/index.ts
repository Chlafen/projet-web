export const formatDateToApi = (date: string): string => {
  if (date === 'Today') {
    return formatDateToApi(new Date().toDateString());
  } else if (date === 'Tomorrow') {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDateToApi(tomorrow.toDateString());
  }
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}${month < 10 ? '0' + month : month}${
    day < 10 ? '0' + day : day
  }`;
};
