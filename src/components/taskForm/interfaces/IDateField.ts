import { Dayjs } from 'dayjs';
import IDisabled from './IDisabled';

export default interface IDateField extends IDisabled {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}
