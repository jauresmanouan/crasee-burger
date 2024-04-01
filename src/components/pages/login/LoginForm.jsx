import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderPage from '../order/OrderPage'

export default function LoginForm() {
// state
const [prenom, setPrenom] = useState("")

const navigate = useNavigate()

// Comportement
const handleSubmit = () => { 
  navigate(`order/${prenom}`)
 }

const handleChange = (event) => { 
    setPrenom(event.target.value)
 }

// Affichage
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
