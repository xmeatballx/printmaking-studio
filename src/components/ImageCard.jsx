import { StyledImageCard } from './styled/ImageCard.styled';
import { Button } from './Button';

const ImageCard = (({ source, button, buttonPrimary, hero }) => {
    return (
        <StyledImageCard source={source} hero={hero}>
            {button ? <Button primary={buttonPrimary}>Start</Button> : ''}
        </StyledImageCard>
    )
})

export { ImageCard }