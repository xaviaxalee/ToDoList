import { Status } from '../../taskForm/enums/Status';

export const getBorderColorByStatus = (status: Status): string => {
  console.log(status);
  switch (status) {
    case Status.TODO:
      return 'error.light';
    case Status.IN_PROGRESS:
      return 'warning.light';
    case Status.DONE:
      return 'success.light';
  }
};
