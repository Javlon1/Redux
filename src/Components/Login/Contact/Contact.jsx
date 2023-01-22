import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Contact.scss'

export default function Contact({ render, setRender }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formHandler = (e) => {
    e.preventDefault()
    const val = e.target.elements
    setRender(!render)
    dispatch({ 
      type: 'CONTACT',
      payload: {
        tel: val.tel.value,
        email: val.email.value,
        address: val.address.value,
      }
    })
  }
  
  return (
    <section className='contact'>
        <div className="container">
        <h1>contact</h1>
        <form onSubmit={formHandler} action="#">
          <input type="text" name='tel' placeholder='Telephone' />
          <input type="text" name='email' placeholder='Email' />
          <input type="text" name='address' placeholder='Address' />
          <button onClick={navigate('/login/password')} type='submit'>next</button>
        </form>
        </div>
    </section>
  )
}
