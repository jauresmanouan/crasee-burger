import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { CiCircleCheck} from "react-icons/ci";
import { theme } from "../../../../../../../theme";

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
        <input
          name="title"
          type="text"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <input
          name="imageSource"
          type="url"
          value={newProduct.imageSource}
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input
          name="price"
          type="number"
          onChange={handleChange}
          value={newProduct.price}
          placeholder="Prix"
        />
      </div>
      <div className="submit">
        <button onClick={handleAddProduct} className="submit-button">
          Ajouter un nouveau produit au menu
        </button>
        {isAdded && (
            <span>
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

  .infos-produit {
    gap: 8px;
    display: flex;
    flex-direction: column;
    grid-area: 1/2/-2/3;
    grid-gap: 8px;

    input {
      height: 35px;
    }
  }
  .submit {
    display: flex;
    gap: 15px;

    grid-area: 4/2/-1/-1;
    margin-top: 8px;
    .submit-button {
      cursor: pointer;
      width: 275px;
      height: 34px;
      background-color: ${theme.colors.success};
      border: none;
      border-radius: 5px;
      color: ${theme.colors.background_white};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .submit-button:hover {
      color: ${theme.colors.success};
      background-color: ${theme.colors.background_white};
      border: 1px solid ${theme.colors.success};
    }

    .submit-button:active {
      color: ${theme.colors.background_white};
      background-color: ${theme.colors.success};
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;

      font-family: "Open Sans";
      color: ${theme.colors.success};
      .icon-check{
        height: 18px;
        width: 18px;
      }
    }
  }
`;
