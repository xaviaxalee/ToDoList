import { FC, ReactElement } from 'react';
import dayjs from 'dayjs';

import { Grid, Box, LinearProgress } from '@mui/material';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import taskAPI from '../../apis/task';
import { Status } from '../taskForm/enums/Status';
import { countTask } from './helpers/countTask';

const TaskArea: FC = (): ReactElement => {
  const queryClient = useQueryClient();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskAPI.getTasks,
  });

  const updateTaskMutation = useMutation({
    mutationFn: taskAPI.patchStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  });

  const onStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.IN_PROGRESS : Status.TODO,
    });
  };

  const onMarkedAsDone = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.DONE,
    });
  };

  return (
    <Grid item md={8} px={4} xs={12}>
      <Box mb={8} px={4} textAlign="center">
        <h1>Task Dashboard</h1>
        <h3>{dayjs().format('dddd, LL')}</h3>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            status={Status.TODO}
            count={countTask(data, Status.TODO)}
          />
          <TaskCounter
            status={Status.IN_PROGRESS}
            count={countTask(data, Status.IN_PROGRESS)}
          />
          <TaskCounter
            status={Status.DONE}
            count={countTask(data, Status.DONE)}
          />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
          mb={8}
          gap={2}
        >
          {isLoading && <LinearProgress />}
          {isError && (
            <Box textAlign="center">
              <h3>Something went wrong</h3>
            </Box>
          )}
          {!isError && data?.length === 0 && (
            <Box textAlign="center">
              <h3>No Task Yet</h3>
            </Box>
          )}
          {!isError &&
            data?.map(
              ({ id, status, title, date, description, priority }) =>
                status !== Status.DONE && (
                  <Task
                    id={id}
                    status={status}
                    key={id}
                    title={title}
                    description={description}
                    date={new Date(date)}
                    priority={priority}
                    onChange={onStatusChange}
                    onClick={onMarkedAsDone}
                  />
                ),
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
