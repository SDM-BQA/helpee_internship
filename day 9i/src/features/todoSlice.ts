import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  status: boolean;
}

interface TodoState {
  data: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    }
})


export default todoSlice.reducer