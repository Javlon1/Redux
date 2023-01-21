import React from 'react'
import './Name.scss'
import { useDispatch } from 'react-redux'

export default function Name({ render, setRender }) {
  const dispatch = useDispatch()
  const formHandler = (e) => {
    e.preventDefault()
    const val = e.target.elements
    setRender(!render)
    dispatch({
      type: 'NAME',
      payload: {
        firstName: val.firstName.value,
        lastName: val.lastName.value,
      }
    })
  }

  return (
    <section className='name'>
      <div className="container">
        <form onSubmit={formHandler} action="#">
          <input type="text" name='firstName' placeholder='First Name' />
          <input type="text" name='lastName' placeholder='Last Name' />
          <button type='submit'>next</button>
        </form>
      </div>
    </section>
  )
}
