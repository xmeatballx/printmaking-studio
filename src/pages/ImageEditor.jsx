import {
  GlobalStyles,
  Logo,
  Hamburger,
  HeadingText,
  Toolbar,
  Picker,
  BodyText,
  TextInput,
} from "../components";
import { Nav, Editor, EditorFieldset, EditorLegend } from "../containers";
const ImageEditor = () => {
  return (
    <>
      <GlobalStyles />
      <Nav>
        <Logo />
        <Hamburger />
      </Nav>
      <Editor>
        <EditorLegend gridColumn="2 / 8" gridRow="1 / 2">
          <HeadingText>Image</HeadingText>
        </EditorLegend>
        <EditorFieldset gridColumn="2 / 16" gridRow="2 / 3">
          <Toolbar></Toolbar>
        </EditorFieldset>
        <EditorFieldset gridColumn="2 / 16" gridRow=" 3 / 4">
          <label htmlFor="modepicker">Mode</label>
          <Picker name="modepicker" gridColumn="1 / 2"></Picker>
          <label htmlFor="modeamt">Amount</label>
          <TextInput name="modeamt" gridColumn="3 / 4"></TextInput>
        </EditorFieldset>
      </Editor>
    </>
  );
};

export { ImageEditor };
