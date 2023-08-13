import React from 'react'
import './Input.css'

interface InputProps {
    callback: any,
    type?: string,
    placeholder?: string,
    onChange: any,
    value: string
}

const Input = (props: InputProps) => {
    return (
        <div className="push__container">

            <input className='push-input'
                value={props.value}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />

            <button
                className='push-btn'
                onClick={props.callback}
            >
                +
            </button>

        </div>
    )
}

export default Input