import { StyledButton } from "./styled/Button.styled";
import { StyledButtonText } from "./styled/ButtonText.styled";

const Button = ({ primary, href, textColor, children }) => {
  return (
    <StyledButton primary={primary}>
      <a href={href}>
        <StyledButtonText primary={primary} color={textColor}>
          {children}
        </StyledButtonText>
      </a>
    </StyledButton>
  );
};

export { Button };
