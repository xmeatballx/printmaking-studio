import { StyledLogo, StyledLogoText } from './styled/Logo.styled';

const Logo = (() => {
    return (
            <StyledLogo>
                <StyledLogoText offset='0px'color='black'>
                    Printmaker Studio
                </StyledLogoText>
                <StyledLogoText offset='-2px'color='cyan'>
                    Printmaker Studio
                </StyledLogoText>
                <StyledLogoText offset='-4px'color='magenta'>
                    Printmaker Studio
                </StyledLogoText>
                <StyledLogoText offset='-6px' color='yellow'>
                    Printmaker Studio
                </StyledLogoText>
            </StyledLogo>
    )
})

export {Logo}