import { StyledImageCard } from './styled/ImageCard.styled';
import { Button } from './Button';

const ImageCard = (({source,button, hero}) => {
    return (
        <StyledImageCard source={source} hero={hero}>
            {button ? <Button primary>Start</Button> : ''}
        </StyledImageCard>
    )
})

export {ImageCard}