import { FC, ReactElement } from 'react';

import { Box, Chip, Typography } from '@mui/material';
import ITaskHeader from './interfaces/ITaskHeader';
import dayjs from 'dayjs';

const TaskHeader: FC<ITaskHeader> = ({
  title = 'Default Task',
  date = new Date(),
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={2}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={dayjs(date).format('YYYY-MM-DD')} />
      </Box>
    </Box>
  );
};

export default TaskHeader;
