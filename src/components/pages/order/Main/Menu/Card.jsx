import styled from "styled-components";
import PrimaryButton from "../../../../reusale-ui/PrimaryButton";
import { theme } from "../../../../../theme";

export default function Card({ imageSource, title, price }) {
  return (
    <CardStyled>
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
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

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
