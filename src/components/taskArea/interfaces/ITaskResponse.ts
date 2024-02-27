import { Priority } from '../../taskForm/enums/Priority';
import { Status } from '../../taskForm/enums/Status';
export default interface ITaskAPI {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
