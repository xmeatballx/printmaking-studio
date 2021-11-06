import { StyledImageCard } from "./styled/ImageCard.styled";
import { Button } from "./Button";

const ImageCard = ({
  source,
  button,
  buttonPrimary,
  hero,
  aspect,
  yOffset,
  large,
  children,
}) => {
  return (
    <StyledImageCard
      source={source}
      hero={hero}
      aspect={aspect}
      yOffset={yOffset}
      large={large}
    >
      {button ? children : ""}
    </StyledImageCard>
  );
};

export { ImageCard };
