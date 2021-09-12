import { StyledBodyText } from './styled/BodyText.styled'

const BodyText = (({color, overlay, children}) => {
    return (
        <StyledBodyText color={color} overlay={overlay}>
            {children}
        </StyledBodyText>
    )
})

export {BodyText}