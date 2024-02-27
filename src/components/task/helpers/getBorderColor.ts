import { Priority } from '../../taskForm/enums/Priority';

export const getBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.NORMAL:
      return 'grey.900';
    case Priority.LOW:
      return 'info.light';
    case Priority.HIGH:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
