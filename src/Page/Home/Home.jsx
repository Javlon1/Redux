import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
  return (
    <section className='home'>
        <div className="container">
            <Link to='/login'>login</Link>
        </div>
    </section>
  )
}
