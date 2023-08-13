import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./reducers/ToDoSlice";


const rootReducer = combineReducers({
    ToDoSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// Типизация редусеров
export type RootState =  ReturnType<typeof rootReducer>

// Тип стора
export type AppStore =  ReturnType<typeof setupStore>

// Использование только определенных типов
export type AppDispatch =  AppStore['dispatch']