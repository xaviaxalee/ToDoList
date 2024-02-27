import { Status } from '../../taskForm/enums/Status';

export default interface ITaskCounter {
  count?: number;
  status?: Status;
}
