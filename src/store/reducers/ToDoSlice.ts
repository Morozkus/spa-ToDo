import { ToDo } from "../../model/ToDo";
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ToDoState {
    ToDos: ToDo[],
    value: string
}

const initialState: ToDoState = {
    ToDos: [],
    value: ''
}

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        setToDo(state, action: PayloadAction<ToDo>) {
            state.ToDos.push(action.payload)
            state.value = ''
        },
        setCheck(state, action: PayloadAction<number>) {
            const todo = state.ToDos.find(todo => todo.id === action.payload)
            todo!.check = !(todo!.check)
        }
    }
})

export default ToDoSlice.reducer