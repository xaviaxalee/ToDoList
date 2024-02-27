import { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import ITask from './interfaces/ITask';
import { getBorderColor } from './helpers/getBorderColor';
import { Priority } from '../taskForm/enums/Priority';
import { Status } from '../taskForm/enums/Status';

const Task: FC<ITask> = ({
  id,
  title,
  date,
  description,
  priority = Priority.NORMAL,
  status = Status.DONE,
  onChange,
  onClick,
}): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      border="1px solid"
      borderRadius="8px"
      borderColor={`${getBorderColor(priority)}`}
      p={2}
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onChange={onChange}
        onClick={onClick}
      />
    </Box>
  );
};

export default Task;
