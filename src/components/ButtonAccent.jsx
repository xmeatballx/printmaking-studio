import {StyledButtonAccent} from './styled/ButtonAccent.styled'
import { StyledButtonAccentText } from './styled/ButtonAccentText.styled'
const ButtonAccent = (({primary, children}) => {
    return (
        <StyledButtonAccent primary={primary}>
            <StyledButtonAccentText primary={primary}>
                {children}
            </StyledButtonAccentText>
        </StyledButtonAccent>
    )
})

export {ButtonAccent}