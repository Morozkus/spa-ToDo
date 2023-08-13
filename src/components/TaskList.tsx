import React from 'react'
import Item from './UI/Item/Item'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ToDoSlice } from '../store/reducers/ToDoSlice'

const TaskList = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.ToDoSlice)

  return (
    <div className='list'>
      {selector.ToDos.map((todo, index) =>
        <Item
          text={todo.text}
          check={todo.check}
          onClick={() => dispatch(ToDoSlice.actions.setCheck(todo.id))}
          index={index + 1}
        />
      )}
    </div>
  )
}

export default TaskList