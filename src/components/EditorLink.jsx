import { StyledEditorLink } from "./styled/EditorLink.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StyledButtonText } from "./styled/ButtonText.styled";

const EditorLink = ({ href, children }) => {
  return (
    <StyledEditorLink>
      <a href={href}>
        <StyledButtonText>{children}</StyledButtonText>
      </a>
      <FontAwesomeIcon icon={faChevronRight} />
    </StyledEditorLink>
  );
};

export { EditorLink };
