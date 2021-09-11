import {StyledButton} from './styled/Button.styled'
import {StyledButtonText} from './styled/ButtonText.styled'

const Button = (({primary, children}) => {
    return (
    <StyledButton primary={primary}>
        <StyledButtonText primary={primary}>
            {children}
        </StyledButtonText>
    </StyledButton>
    )
})

export {Button}