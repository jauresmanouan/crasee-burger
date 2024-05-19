import styled from "styled-components";

export default function Tab({ onclick, icon, name }) {
  return (
    <TabStyled onClick={onclick}>
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  cursor: pointer;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px 5px 0px 0px;
  background: #ffffff;

  padding: 0 22px;
  border: 2px solid #E4E5E9;

  .icon {
    width: 16px;
    height: 16px;
    color: #93a2b1;

  }
  .name {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    color: #93a2b1;
  }
`;
