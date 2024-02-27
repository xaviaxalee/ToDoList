import { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';
import ITextField from './interfaces/ITextField';

const TaskInputField: FC<ITextField> = ({
  onChange = (e) => console.log(e),
  disabled = false,
  id,
  label,
  value,
  placeholder,
  name,
  rows = 1,
  multiline = false,
}): ReactElement => {
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      name={name}
      fullWidth
      rows={rows}
      multiline={multiline}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TaskInputField;
