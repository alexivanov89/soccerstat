import { endOfMonth, startOfMonth } from 'date-fns';

export const getDateStartMonth = (date) => {
  return date ? new Date(startOfMonth(date).getTime() - date.getTimezoneOffset() * 60000) : null;
};

export const getDateEndMonth = (date) => {
  return date ? new Date(endOfMonth(date).getTime() - date.getTimezoneOffset() * 60000) : null;
};
