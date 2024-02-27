import { FC, ReactElement } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IDateField from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = ({
  value = dayjs(),
  onChange = (newDate) => {
    console.log(newDate);
  },
  disabled = false,
}): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Task Due Date"
        value={value}
        defaultValue={dayjs()}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
