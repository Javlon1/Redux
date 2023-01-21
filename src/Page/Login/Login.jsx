import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Login.scss'

export default function Login() {
  const selector = useSelector((state) => { return state })
  const userData = selector.users
  return (
    <section className='login'>
      <div className="container">
        <li>
          <Link to='/'>Home</Link>
          <p>/login</p>
        </li>
        <div className="container__stap">
          <button className={userData[0].firstName.length && userData[0].lastName.length > 0 ? "container__stap__btn act" : "container__stap__btn"}>1</button>
          <button className={userData[0].tel.length && userData[0].email.length && userData[0].address.length > 0 ? "container__stap__btn act" : "container__stap__btn"}>2</button>
          <button className={userData[0].userName.length && userData[0].password.length > 0 ? "container__stap__btn act" : "container__stap__btn"}>3</button>
        </div>
        <Outlet />
      </div>
    </section>
  )
}
