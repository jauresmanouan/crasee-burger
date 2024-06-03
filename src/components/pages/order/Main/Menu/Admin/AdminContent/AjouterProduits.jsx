import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AjouterProduits() {
  // State, Variable and Context
  const [productName, setProductName] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [price, setPrice] = useState(0);
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: productName,
    imageSource: imageProduct,
    price: price,
  };

  // comportement
  const handleAddProduct = () => {
    handleAdd(newProduct);
  };

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };
  const handleImageProduct = (event) => {
    setImageProduct(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  // Affichage
  return (
    <AjouterProduitsStyled>
      <div className="image-produit">Image produit</div>
      <div className="infos-produit">
        <input
          type="text"
          value={productName}
          onChange={handleProductName}
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <input
          type="url"
          value={imageProduct}
          onChange={handleImageProduct}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input
          type="number"
          onChange={handlePrice}
          value={price}
          placeholder="Prix"
        />
      </div>
      <button onClick={handleAddProduct} className="submit-button">
        submit-button
      </button>
    </AjouterProduitsStyled>
  );
}

const AjouterProduitsStyled = styled.div`
  border: 2px solid red;
  width: 880px;
  height: 160px;
  margin-left: 70px;
  padding-top: 30px;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .image-produit {
    background-color: yellow;
    grid-area: 1/1/4/2;
  }

  .infos-produit {
    gap: 8px;
    display: flex;
    flex-direction: column;
    background-color: green;
    grid-area: 1/2/-2/3;
  }
  .submit-button {
    cursor: pointer;
    background-color: pink;
    grid-area: 4/2/-1/-1;
    width: 275px;
    height: 34px;
  }
`;
