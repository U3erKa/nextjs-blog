import type { FC } from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const Date = function ({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
} satisfies FC<Props>;

export default Date;
