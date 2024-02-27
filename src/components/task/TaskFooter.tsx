import { FC, ReactElement } from 'react';

import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import ITaskFooter from './interfaces/ITaskFooter';
import { Status } from '../taskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = ({
  id,
  status,
  onChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            defaultChecked={status === Status.IN_PROGRESS}
            color="warning"
            onChange={(e) => onChange(e, id)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Make As Done
      </Button>
    </Box>
  );
};

export default TaskFooter;
