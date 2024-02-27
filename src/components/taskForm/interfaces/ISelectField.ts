import IDisabled from './IDisabled';
import { SelectChangeEvent } from '@mui/material/Select';

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  value?: string;
  label?: string;
  options?: ISelectOption[];
  onChange?: (e: SelectChangeEvent) => void;
}
