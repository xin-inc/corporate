/**
 * 日時の整形
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため、1を加える
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};