import { StyledHeadingText } from './styled/HeadingText.styled';

const HeadingText = (({color, alignment, mult, overlay, children}) => {
    return (
        <StyledHeadingText color={color} alignment={alignment} mult={mult} overlay={overlay}>
            {children}
        </StyledHeadingText>
    )
})

export {HeadingText}