import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import Form from './Form'
import Associate from './TeamMembers'
import './App.css'

const initialTeamList = [
  {
      id:uuid(),
      name: 'Donald Chump',
      email: 'cantuseapc@prezzi.gov',
      role: 'Unemployed (Coming Soon)',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


export default function App() {
  const [associates, setAssociate] = useState(initialTeamList)
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const {name, value} = evt.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.name || !formValues.email || !formValues.role){
      setError('Deets missing - try again :)')
      return
    }
  

    const newAssociate = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }

    setAssociate(associates => [newAssociate, ...associates])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
     
      <header className="App-header">
        <div className="titleBucket">
            <h1>Team Builder</h1>
          </div>
        </header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <span style={{color:'red'}}>{error}</span>
      {
        associates.map(associate => {
        return (
          <Associate key={associate.id} details={associate} />
        )
      })
      
      }
    </div>
  )
}