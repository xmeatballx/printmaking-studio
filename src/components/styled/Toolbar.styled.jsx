import styled from "styled-components";

const StyledToolbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 2em;
  padding: 0;
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};

  li svg {
    color: ${({ color }) => color};
  }

  li {
    list-style: none;
  }
`;

export { StyledToolbar };
