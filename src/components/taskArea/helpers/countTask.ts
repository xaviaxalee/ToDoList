import { Status } from '../../taskForm/enums/Status';
import ITaskResponse from '../interfaces/ITaskResponse';
export const countTask = (tasks: ITaskResponse[], status: Status): number => {
  if (!tasks || !Array.isArray(tasks)) return 0;
  const totalTasks = tasks.filter((task) => task.status === status);
  return totalTasks.length;
};
