import { StyledHeadingText } from './styled/HeadingText.styled';

const HeadingText = (({color, alignment, mult, children}) => {
    return (
        <StyledHeadingText color={color} alignment={alignment} mult={mult}>
            {children}
        </StyledHeadingText>
    )
})

export {HeadingText}