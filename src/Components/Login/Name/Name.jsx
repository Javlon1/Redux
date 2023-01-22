import React from 'react'
import './Name.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Name({ render, setRender }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formHandler = (e) => {
    e.preventDefault()
    setRender(!render)
    const val = e.target.elements
    dispatch({
      type: 'NAME',
      payload: {
        firstName: val.firstName.value,
        lastName: val.lastName.value,
      }
    })
  }
  
  const next = () => {
    navigate('/login/contact')
  }

  return (
    <section className='name'>
      <div className="container">
        <h1>hame</h1>
        <form onSubmit={formHandler} action="#">
          <input type="text" name='firstName' placeholder='First Name' />
          <input type="text" name='lastName' placeholder='Last Name' />
          <button onClick={next} type='submit'>next</button>
        </form>
      </div>
    </section>
  )
}
