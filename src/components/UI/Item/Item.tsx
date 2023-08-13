import React from 'react'
import './Item.css'

interface ItemProps {
  text: string
  check: boolean,
  onClick: any,
  index: number
}

const Item = ({ text, check, onClick, index }: ItemProps) => {
  return (
    <div className='list__item' onClick={onClick}>
      <label className='list__label'>
        <input
          type="checkbox"
          checked={check} 
          />
      </label>

      <p className="list__text">
        {index}. {text}
      </p>
    </div>
  )
}

export default Item