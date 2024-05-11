import styled from "styled-components";

export default function PrimaryButton({ label, buttonIcon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {buttonIcon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  background-color: #ff9f1b;
  color: white;
  border-radius: 5px;
  padding: 18px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-out;
  }
`;
