import { StyledImageCard } from './styled/ImageCard.styled';
import { Button } from './Button';

const ImageCard = (({ source, button, buttonPrimary, hero, aspect }) => {
    return (
        <StyledImageCard source={source} hero={hero} aspect={aspect}>
            {button ? <Button primary={buttonPrimary}>Start</Button> : ''}
        </StyledImageCard>
    )
})

export { ImageCard }