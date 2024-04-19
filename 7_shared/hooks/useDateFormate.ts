import {useState, useEffect} from 'react';
import {format} from 'date-fns';

type Props = {
  dateString?: string;
};

const useDateFormatter = ({dateString}: Props) => {
  const [formattedDate, setFormattedDate] = useState<string | undefined>('');
  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      const formatted = format(date, 'dd.MM.yy');
      setFormattedDate(formatted);
    }
  }, [dateString]);

  return {formattedDate};
};

export default useDateFormatter;
