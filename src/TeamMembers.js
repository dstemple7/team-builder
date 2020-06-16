import React from 'react'
import swal from 'sweetalert'

export default function Associate(props){
    const {details} = props
    
    if (!details) {
        return <h3>Hold up - deets coming soon!</h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <button onClick={() => swal('Holla - sweet alert, huh?', 'I am still working on this feature')}> Edit da deets </button>
        </div>
    )
}