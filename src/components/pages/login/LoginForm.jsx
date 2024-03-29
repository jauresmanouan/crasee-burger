import React, { useState } from 'react'

export default function LoginForm() {
// state
const [prenom, setPrenom] = useState("Bob")

// Comportement
const handleSubmit = () => { 
    alert(`Bonjour ${prenom}`)
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
