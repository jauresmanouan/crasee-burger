import styled from "styled-components";
import PrimaryButton from "../../../../reusale-ui/PrimaryButton";
import { theme } from "../../../../../theme";
import { TiDelete } from "react-icons/ti";

export default function Card({ imageSource, title, price, isAdmin}) {
  return (
    <CardStyled>
      {isAdmin && <button className="delete-button" aria-label="delete-button">
        <TiDelete className="delete-icon" />
      </button>}
      <div className="image-product">
        <img src={imageSource} alt={title} />
      </div>
      <div className="description">
        <div className="name-product">{title}</div>
        <div className="price-and-button">
          <div className="price-product">{price}</div>
          <PrimaryButton className="button" label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 60% 1fr;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .image-product {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }
  }

  .delete-button {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;

    .delete-icon {
      width: 20px;
      height: 20px;
      color: ${theme.colors.primary};
    }
    .delete-icon:hover {
      color: ${theme.colors.red};
    }

    .delete-icon:active {
      color: ${theme.colors.primary};
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .name-product {
      font-family: "Amatic SC";
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 190px;
    }

    .price-and-button {
      display: grid;
      grid-template-columns: 60% 1fr;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;

      .price-product {
        font-family: "Open Sans";
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.regular};
        color: ${theme.colors.primary};
      }

      .button {
        width: 95px;
        height: 38px;
        font-size: ${theme.fonts.size.XS};
      }

      .button:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.background_white};
      }
    }
  }
`;
