import React from 'react';
import Input from './components/UI/Input/Input';
import TaskList from './components/TaskList';
import Line from './components/UI/Line/Line';
import { useAppSelector } from './hooks/redux';
import { useAppDispatch } from './hooks/redux';
import { ToDoSlice } from './store/reducers/ToDoSlice';

function App() {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.ToDoSlice)

  return (
    <div className="App app_display app_background">
      <h1 className='app__title'>To Do App</h1>
      <Input
        key='todo-input'
        placeholder='what`s todo?'
        callback={() => dispatch(ToDoSlice.actions.setToDo({ text: selector.value, check: false, id: Date.now() }))}
        onChange={(e: React.FormEvent<HTMLInputElement>) => dispatch(ToDoSlice.actions.setValue(e.currentTarget.value))}

        value={selector.value}
      />
      <Line />
      <TaskList></TaskList>
    </div>
  );
}

export default App;
