import styled from "styled-components";

export default function Tab({ onclick, icon, name, className }) {
  return (
    <TabStyled onClick={onclick} className={className}>
      <span className="icon">{icon}</span>
      <span className={`name ${name && "gap-name-icon"}`}>{name}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  font-family: "Open Sans";

  cursor: pointer;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px 5px 0px 0px;
  background: #ffffff;

  padding: 0 22px;
  border: 2px solid #e4e5e9;

  .icon {
    width: 16px;
    height: 16px;
    color: #93a2b1;
  }
  .name {
    font-size: 16px;
    font-weight: 400;
    color: #93a2b1;
  }

  .gap-name-icon{
    margin-left: 13px;
  }
`;
