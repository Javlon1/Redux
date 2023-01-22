import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Password.scss'

export default function Password({ render, setRender }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault()
    setRender(!render)
    const val = e.target.elements
    const password = []
    if (val.password1.value === val.password2.value) {
      password.push(val.password1.value)
    }

    dispatch({
      type: 'PASSWORD',
      payload: {
        userName: val.userName.value,
        password: password.join(' '),
      }
    })
  }

  return (
    <section className='password'>
      <div className="container">
        <h1>password</h1>
        <form onSubmit={formHandler} action="#">
          <input type="text" name='userName' placeholder='User Name' required/>
          <input type="text" name='password1' placeholder='Password1' required/>
          <input type="text" name='password2' placeholder='Password2' required/>
          <button onClick={navigate('/result')} type='submit'>The End</button>
        </form>
      </div>
    </section>
  )
}
