import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface IProfile {
  name: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        Ths is your personal tasks managers
      </Typography>
    </Box>
  );
};

export default Profile;
