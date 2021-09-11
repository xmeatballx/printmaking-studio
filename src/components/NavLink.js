import { StyledNavLink } from './styled/NavLink.styled'

const NavLink = ({children}) => {
    return(
        <StyledNavLink>{children}</StyledNavLink>
    )
}

export {NavLink}