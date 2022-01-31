import { endOfMonth, startOfMonth } from 'date-fns';

export const getDateStartMonth = (date) => {
  return date ? startOfMonth(date) : null;
};

export const getDateEndMonth = (date) => {
  return date ? endOfMonth(date) : null;
};
