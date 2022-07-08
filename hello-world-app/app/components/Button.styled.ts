import styled from "styled-components";

type ButtonProps = {};

export const Button = styled.button<ButtonProps>`
  min-height: 48px;
  min-width: 80px;

  padding: 8px 20px;

  border-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 24px;

  font-size: 16px;
  font-weight: bold;
`;
