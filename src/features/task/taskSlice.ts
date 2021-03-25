import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface taskState {
    numberOfTasks:number;
    tasks:{id: number;title: string}[];
}

const initialState: taskState = {
    numberOfTasks:1,
    tasks:[{id: 1,title:"Task A"}]
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.numberOfTasks += 1;
      const newTask = {
          id: state.numberOfTasks,
          title: action.payload
      };
      state.tasks=[newTask, ...state.tasks];
    },
  },
});

export const { addTask } = taskSlice.actions;
export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
