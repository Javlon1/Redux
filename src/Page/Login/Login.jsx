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
        <p>
          <Link to='/'>Home</Link>
          <p>/login</p>
        </p>
        <div className="container__stap">
          <button className={userData[0].firstName.length && userData[0].lastName.length > 0 ? "container__stap__btn act" : "container__stap__btn"}>1</button>
          <button className="container__stap__btn">2</button>
          <button className="container__stap__btn">3</button>
        </div>
        <Outlet />
      </div>
    </section>
  )
}
