import {
  Button,
  GlobalStyles,
  Hamburger,
  HeadingText,
  ImageCard,
  Logo,
  Toolbar,
} from "../components";
import { Nav, Section } from "../containers";
import checker from "../assets/checker.jpg";

const Upload = () => {
  return (
    <Section cta solid solidbg="black">
      <GlobalStyles />
      <Nav>
        <Logo />
        <Hamburger />
      </Nav>
      <HeadingText color="white" alignment="center">
        Pick an Image
      </HeadingText>
      <ImageCard aspect="1 / 1.25" button>
        <Button href="/studio">Upload</Button>
      </ImageCard>
      <Toolbar />
      <Button primary>Ready</Button>
    </Section>
  );
};

export { Upload };
