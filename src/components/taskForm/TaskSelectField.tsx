import { FC, ReactElement } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Select Filed label',
  name = 'Select Field',
  options = [{ value: '', label: 'Add alignItems' }],
  onChange = (e) => console.log(e),
  disabled = false,
}): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}`}
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map(({ value, label }, index) => (
          <MenuItem key={value + index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
