import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCrop,
  faArrowsAlt,
  faUndo,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { StyledToolbar } from "./styled/Toolbar.styled";
const Toolbar = () => {
  return (
    <StyledToolbar>
      <li>
        <FontAwesomeIcon icon={faCrop} />
      </li>
      <li>
        <FontAwesomeIcon icon={faArrowsAlt} />
      </li>
      <li>
        <FontAwesomeIcon icon={faUndo} />
      </li>
      <li>
        <FontAwesomeIcon icon={faImage} />
      </li>
    </StyledToolbar>
  );
};

export { Toolbar };
