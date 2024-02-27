import { FC, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';
import ITaskDescription from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = ({
  description = 'Default Description',
}): ReactElement => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;
