import { StyledNavLink } from './styled/NavLink.styled'

const NavBarLink = ({ children }) => {
    return (
        <StyledNavLink>{children}</StyledNavLink>
    )
}

export { NavBarLink }