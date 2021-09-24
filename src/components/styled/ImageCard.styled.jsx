import styled from "styled-components";

const StyledImageCard = styled.div`
  background-color: white;
  background-image: ${({ source }) => (source ? `url(${source})` : "")};
  background-size: ${({ hero }) => (hero ? "250%" : "100%")};
  background-position-x: right;
  background-position-y: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: ${({ aspect }) => aspect};
  margin-top: ${({ yOffset }) => (yOffset ? "7vh" : "")};

  height: ${({ large }) => (large ? "75vh" : "50vh")};

  @media all and(min-width: 50em) {
    height: 100vh;
    background-size: 100%;
    background-position-y: top;
    width: ${({ hero, aspect }) => (aspect ? "50vw" : hero ? "100vw" : "50vw")};
  }
`;

export { StyledImageCard };
