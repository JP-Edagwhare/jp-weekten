import React from 'react'
import Header from '../components/Header'
import Button from '../Button'

function Home() {
    return (
        <div className='container'>
            <Header />
            <div>
                <h1>FRONT END <br />DEVELOPMENT</h1>
                <Button />
                <h2>This is the Home Page</h2>
            </div>
        </div>
    )
}

export default Home
