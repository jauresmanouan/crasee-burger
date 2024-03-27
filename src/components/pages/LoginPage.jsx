import { useState } from "react"

export default function LoginPage() {
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
  <div>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <p>Connectez-vous</p>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" required placeholder="Entrez votre prénon..." />
        <button>Accédez à votre espace</button>
    </form>
  </div>
  )
}
