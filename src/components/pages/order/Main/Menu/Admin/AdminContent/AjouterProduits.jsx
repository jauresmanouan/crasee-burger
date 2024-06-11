import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { theme } from "../../../../../../../theme";
import TextInput from "../../../../../../reusale-ui/TextInput";
import Button from "../../../../../../reusale-ui/Button";
import { getProduits } from "./getProduits";

const EMPTY_PRODUCT = {
  id: new Date().getTime(),
  title: "",
  imageSource: "",
  price: 0,
};

export default function AjouterProduits() {
  // State, Variable and Context

  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isAdded, setisAdded] = useState(false);

  // comportement
  const handleAddProduct = () => {
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displayProductAddedMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displayProductAddedMessage = () => {
    setisAdded(true);
    setTimeout(() => {
      setisAdded(false);
    }, 2000);
  };

  const produits = getProduits(newProduct);

  // Affichage
  return (
    <AjouterProduitsStyled>
      <div className="image-produit">
        {newProduct.imageSource ? (
          <img
            className="presence-image"
            src={newProduct.imageSource}
            alt={newProduct.title}
          />
        ) : (
          <div className="aucune-image">Aucune image</div>
        )}
      </div>
      <div className="infos-produit">
        {produits.map((produit) => (
          <TextInput
            key={produit.id}
            {...produit}
            version="minimalist"
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="submit">
        <Button
          version="success"
          label={"Ajouter un nouveau produit au menu"}
          onClick={handleAddProduct}
          className="submit-message"
        />
        {isAdded && (
          <span className="icon-check-and-message">
            <CiCircleCheck className="icon-check" />
            Ajouté avec succès !
          </span>
        )}
      </div>
    </AjouterProduitsStyled>
  );
}

const AjouterProduitsStyled = styled.div`
  width: 880px;
  height: 160px;
  margin-left: 70px;
  padding-top: 30px;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;

  .image-produit {
    grid-area: 1/1/4/2;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;
    height: 120px;
    width: 215px;
    font-family: "Open sans";
    color: ${theme.colors.greySemiDark};

    .presence-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .aucune-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  .submit {
    display: flex;
    align-items: center;

    .submit-message {
      cursor: pointer;
    }

    .icon-check-and-message {
      display: flex;
      align-items: center;
      font-family: "Open Sans";
      margin-left: 15px;
      color: ${theme.colors.success};
      .icon-check {
        height: 18px;
        width: 18px;
        margin-right: 5px;
      }
    }
  }
`;
