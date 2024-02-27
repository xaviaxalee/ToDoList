import IDisabled from './IDisabled';
// import { InputBaseProps } from '@mui/material';
export default interface ITextField extends IDisabled {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  id: string;
  value: string;
  label: string;
  placeholder?: string;
  name: string;
  rows?: number;
  multiline?: boolean;
}
