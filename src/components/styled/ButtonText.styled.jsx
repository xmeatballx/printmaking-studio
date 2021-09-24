import styled from "styled-components";

const StyledButtonText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: ${({ color }) => (color ? color : "black")};
`;

export { StyledButtonText };
