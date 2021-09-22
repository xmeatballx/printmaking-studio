import { StyledImageCard } from "./styled/ImageCard.styled";
import { Button } from "./Button";

const ImageCard = ({
  source,
  button,
  buttonPrimary,
  hero,
  aspect,
  children,
}) => {
  return (
    <StyledImageCard source={source} hero={hero} aspect={aspect}>
      {button ? <Button primary={buttonPrimary}>{children}</Button> : ""}
    </StyledImageCard>
  );
};

export { ImageCard };
