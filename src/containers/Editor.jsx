import styled from "styled-components";
import { HeadingText, Toolbar } from "../components";
import { StyledEditorLink } from "../components/styled/EditorLink.styled";

const Editor = styled.form`
  margin-top: 7vh;
  height: 93vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
`;

const EditorFieldset = styled.fieldset`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  display: grid;
  grid-template-columns: repeat(16, 1fr);
`;

const EditorLegend = styled.legend`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

export { Editor, EditorFieldset, EditorLegend };
