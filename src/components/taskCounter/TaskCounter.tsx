import { FC, ReactElement, useMemo } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import ITaskCounter from './interfaces/ITaskCounter';
import { Status } from '../taskForm/enums/Status';
import { getBorderColorByStatus } from './helpers/getBorderColor';

const TaskCounter: FC<ITaskCounter> = ({
  count = 0,
  status = Status.TODO,
}): ReactElement => {
  const borderColor = useMemo(() => {
    return getBorderColorByStatus(status);
  }, [status]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '100px',
            height: '100px',
            marginBottom: '1rem',
            borderColor: `${borderColor}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          variant="h5"
          fontSize="20px"
          fontWeight="bold"
        >
          {status}
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
