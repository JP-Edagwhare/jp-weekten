import React from 'react'
import Button from '../Button'


function Contact() {
    return (
        <div className='mainContact'>
            <section>
                <h1>CONTACT</h1>
                <p>FRONTEND DEVELOPMENT</p>
                <Button name='MORE' />
                <h2>THIS IS THE CONTACT PAGE</h2>
            </section>
            <section className='infoContact'>
                <div className='contactParagraph'>
                    <p>Ejiro A.</p>
                    <p>Facilitator</p>
                    <p>0813-456-5674</p>
                </div>
                <div className='contactParagraph'>
                    <p>Emeka A.</p>
                    <p>Facilitator</p>
                    <p>0813-456-5674</p>
                </div>

            </section>
             
        </div>
    )
}

export default Contact
