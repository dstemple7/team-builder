import React from 'react'

export default function Form(props) {
    const {
        values, 
        onInputChange,
        onSubmit
    } = props
    
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Add Some More Info</h4>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                &nbsp;
                &nbsp;
                <label>Email:&nbsp;
                    <input 
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}                    
                    />
                </label>
                &nbsp;
                &nbsp;
                <label>Role:&nbsp;
                    <select 
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Whattya Do? --</option>
                        <option value='Chief Spirit Caster'>Chief Spirit Caster</option>
                        <option value='Backend Imagineer'>Backend Imagineer</option>
                        <option value='UI Design Wizard'>UI Design Wizard</option>
                    </select>
                </label>
            </div>
        </form>
    )
}