import styled from "styled-components";

export default function AjouterProduits() {
  return (
    <AjouterProduitsStyled>
      <div className="image-produit">Image produit</div>
      <div className="infos-produit">infos-produit</div>
      <div className="button-add-product">button-add-product</div>
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
    background-color: green;
    grid-area: 1/2/-2/3
  }
  .button-add-product {
    background-color: pink;
    grid-area: 4/2/-1/-1;
  }
`;
