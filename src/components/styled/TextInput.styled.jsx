import styled from "styled-components";

const StyledTextInput = styled.input`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

export { StyledTextInput };
