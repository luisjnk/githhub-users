import moment from "moment";

export const getLastMonth = () => {
  const now = moment().subtract(1, 'month');
  return now.format("YYYY-MM-DD");
}