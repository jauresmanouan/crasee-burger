import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getProduits = (newProduct) => [
  {
    id: "0",
    icon: <FaHamburger className="icon" />,
    name: "title",
    type: "text",
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger)",
    version: "minimalist",
  },
  {
    id: "1",
    icon: <BsFillCameraFill className="icon" />,
    name: "imageSource",
    type: "url",
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    version: "minimalist",
  },
  {
    id: "2",
    icon: <MdOutlineEuro className="icon" />,
    name: "price",
    type: "number",
    value: newProduct.price ? newProduct.price : "",
    placeholder: "Prix",
    version: "minimalist",
  },
];
