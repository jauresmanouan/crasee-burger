import { BsPersonCircle } from "react-icons/bs";

export default function Input() {
  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <div className="input-with-container">
      <BsPersonCircle className="icon" />
      <input
        onChange={handleChange}
        type="text"
        required
        placeholder="Entrez votre prénon..."
      />
    </div>
  );
}
