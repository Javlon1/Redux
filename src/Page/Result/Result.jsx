import React from 'react'
import { useSelector } from 'react-redux'
import './Result.scss'

export default function Result() {
  const selector = useSelector((state) => { return state })
  const userData = selector.users
  const resultat = userData[0]
  return (
    <section className='result'>
        <div className="container">
          <h1 className='container__title'>Result</h1>
          <p className='container__text'> Welcome <b>{resultat.firstName}</b> we are glad to see you in our website</p>
          <h2>Your Information</h2>
          <ul className='container__list'>
            <li className='container__list__item'>First Name: <p className='container__list__item__p'>{resultat.firstName}</p></li>
            <li className='container__list__item'>Last Name: <p className='container__list__item__p'>{resultat.lastName}</p></li>
            <li className='container__list__item'>Telephone: <p className='container__list__item__p'>{resultat.tel}</p></li>
            <li className='container__list__item'>Email: <p className='container__list__item__p'>{resultat.email}</p></li>
            <li className='container__list__item'>Address: <p className='container__list__item__p'>{resultat.address}</p></li>
            <li className='container__list__item'>User Name: <p className='container__list__item__p'>{resultat.userName}</p></li>
            <li className='container__list__item'>Password: <p className='container__list__item__p'>{resultat.password}</p></li>
          </ul>
        </div>
    </section>
  )
}
