import { BodyText } from ".";
import { StyledPicker } from "./styled/Picker.styled";

const Picker = ({ gridColumn, gridRow }) => {
  return (
    <StyledPicker gridColumn={gridColumn} gridRow={gridRow}>
      <optgroup label="Mode">
        <option value=""></option>
      </optgroup>
    </StyledPicker>
  );
};

export { Picker };
