import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

export default function LoginForm() {
const [prenom, setPrenom] = useState("")

const navigate = useNavigate()

const handleSubmit = () => { 
  navigate(`order/${prenom}`)
 }

const handleChange = (event) => { 
    setPrenom(event.target.value)
 }

return (
<form onSubmit={handleSubmit}>
  <h1>Bienvenue chez nous !</h1>
  <br />
  <p>Connectez-vous</p>
  <input onChange={handleChange} type="text" required placeholder="Entrez votre prénon..." />
  <button>Accédez à votre espace</button>
</form>
)
}
