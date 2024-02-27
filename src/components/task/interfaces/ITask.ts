import ITaskHeader from './ITaskHeader';
import ITaskDescription from './ITaskDescription';
import ITaskFooter from './ITaskFooter';

export default interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  priority?: string;
}
