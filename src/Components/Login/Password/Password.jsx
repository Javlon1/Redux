import React from 'react'
import { useDispatch } from 'react-redux'
import './Password.scss'

export default function Password({ render, setRender }) {
  const dispatch = useDispatch()
  const formHandler = (e) => {
    e.preventDefault()
    setRender(!render)
    const val = e.target.elements
    const password = ''
    if (val.password1.value == val.password2.value ) {
      password = val.password1.value
    }
    dispatch({
      type: 'PASSWORD',
      payload: {
        userName: val.userName.value,
        password: val.password.value,
      }
    })
  }
  const next = () => {

  }

  return (
    <section className='password'>
        <div className="container">
        <h1>password</h1>
        <form onSubmit={formHandler} action="#">
          <input type="text" name='userName' placeholder='User Name' />
          <input type="text" name='password1' placeholder='Password1' />
          <input type="text" name='password2' placeholder='Password2' />
          <button onClick={next} type='submit'>next</button>
        </form>
        </div>
    </section>
  )
}
