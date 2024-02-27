import { FC, ReactElement, useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Stack,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import TaskInputField from './TaskInputField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import dayjs, { Dayjs } from 'dayjs';
import ICreateTask from '../taskArea/interfaces/ICreateTask';
import taskAPI from '../../apis/task';

const CreateTaskForm: FC = (): ReactElement => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [status, setStatus] = useState<string>(Status.TODO);
  const [priority, setPriority] = useState<string>(Priority.NORMAL);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: taskAPI.postNewTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const isSubmitDisabled =
    !title || !description || !date || !status || !priority || isLoading;

  const handleSubmit = () => {
    if (title.trim() === '' || description.trim() === '' || !date) return;
    const task: ICreateTask = {
      title,
      description,
      status,
      priority,
      date: date.toString(),
    };
    mutate(task);
  };

  const clearForm = () => {
    console.log('clear');
    setTitle('');
    setDescription('');
    setDate(dayjs());
    setStatus(Status.TODO);
    setPriority(Priority.NORMAL);
  };

  useEffect(() => {
    if (!isSuccess) return;
    clearForm();
    setShowSuccessAlert(true);
    const timeout = setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccessAlert && (
        <Alert severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Task Created Successfully</AlertTitle>
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6" color="text.primary">
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskInputField
          id="title"
          name="title"
          label="title"
          value={title}
          disabled={isLoading}
          placeholder="Task Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskInputField
          id="description"
          name="description"
          label="description"
          value={description}
          placeholder="Task Description"
          rows={4}
          multiline
          disabled={isLoading}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          value={date}
          disabled={isLoading}
          onChange={(date) => setDate(date)}
        />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            value={status}
            label="Status"
            name="status"
            disabled={isLoading}
            onChange={(e) => setStatus(e.target.value as Status)}
            options={[
              { value: Status.TODO, label: Status.TODO },
              { value: Status.IN_PROGRESS, label: Status.IN_PROGRESS },
            ]}
          />
          <TaskSelectField
            value={priority}
            label="Priority"
            name="priority"
            disabled={isLoading}
            onChange={(e) => setPriority(e.target.value as Priority)}
            options={[
              { value: Priority.LOW, label: Priority.LOW },
              { value: Priority.NORMAL, label: Priority.NORMAL },
              { value: Priority.HIGH, label: Priority.HIGH },
            ]}
          />
        </Stack>
        <Button
          variant="contained"
          size="large"
          fullWidth
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
