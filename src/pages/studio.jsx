import { Nav, Editor, Section } from "../containers";
import {
  GlobalStyles,
  EditorLink,
  TextInput,
  Toolbar,
  Picker,
  Logo,
  Hamburger,
  ImageCard,
  BodyText,
  HeadingText,
  Button,
} from "../components";

const Studio = () => {
  return (
    <>
      <GlobalStyles />
      <Nav>
        <Logo />
        <Hamburger />
      </Nav>
      <Section solid solidbg="white">
        <ImageCard large yOffset />
        <EditorLink href="">Image</EditorLink>
        <EditorLink href="">Color</EditorLink>
        <Button primary>Export</Button>
      </Section>
    </>
  );
};

export { Studio };
