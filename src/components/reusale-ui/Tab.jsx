import styled from "styled-components";

export default function Tab({ onClick, icon, name, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <span className="icon">{icon}</span>
      <span className={`name ${name && "gap-name-icon"}`}>{name}</span>
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
  color: #93a2b1;

  padding: 0 22px;
  border: 2px solid #e4e5e9;

  .icon {
    width: 16px;
    height: 16px;
  }
  .name {
    font-size: 15px;
    font-weight: 400;
  }

  .gap-name-icon {
    margin-left: 13px;
  }

  &:hover{
    border-bottom-color: white;
  }
`;
