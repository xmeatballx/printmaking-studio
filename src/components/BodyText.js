import { StyledBodyText } from './styled/BodyText.styled'

const BodyText = (({color, children}) => {
    return (
        <StyledBodyText color={color}>
            {children}
        </StyledBodyText>
    )
})

export {BodyText}