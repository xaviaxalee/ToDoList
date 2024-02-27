import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

import Profile from '../profile/Profile';
import CreateTaskForm from '../taskForm/CreateTaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      xs={12}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Mike" />
      <CreateTaskForm />
    </Grid>
  );
};

export default Sidebar;
