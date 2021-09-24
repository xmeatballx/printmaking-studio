import styled from "styled-components";

const StyledPicker = styled.select`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

export { StyledPicker };
