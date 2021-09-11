import {Button} from './components/Button'
import {ButtonAccent} from './components/ButtonAccent'
import {Nav} from './containers/Nav'
import {Logo} from './components/Logo'
import {Hamburger} from './components/Hamburger'
import {GlobalStyles} from './components/styled/GlobalStyles'
import { Section } from './containers/Section'
import React from 'react'
import { ImageCard } from './components/ImageCard'
import herobg from './assets/placeholderbg.png'
import halftone1 from './assets/halftonetest.png'
import halftone2 from './assets/halftonetest2.png'
import { HeadingText } from './components/HeadingText'
import { BodyText } from './components/BodyText'
import Fade from 'react-reveal/Fade'
function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Nav>
        <Logo/>
        <Hamburger/>
      </Nav>
      <Section bg='yellow'>
        <Fade bottom>
        <ImageCard hero source={herobg} button>
          <Button primary>Get Started</Button>
        </ImageCard>
        <HeadingText color='magenta' mult>
          Lorem ipsum dolor sit amet. 
        </HeadingText>
        <BodyText color='magenta'>
          Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
        </BodyText>
          </Fade>
      </Section>
      <Section bg='magenta' flip>
      <Fade bottom >
        <ImageCard source={halftone1} />
        <HeadingText color='cyan' mult>
          Lorem ipsum dolor sit amet. 
        </HeadingText>
        <BodyText color='cyan'>
          Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
        </BodyText>
    </Fade>
      </Section>
    <Section bg="cyan">
    <Fade bottom>
      <ImageCard source={halftone2}/>
        <HeadingText color='magenta' mult>
          Lorem ipsum dolor sit amet. 
        </HeadingText>
        <BodyText color="magenta">
          Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
        </BodyText>
    </Fade>
    </Section>
    <Section bg='cyan' solid solidbg='cyan' cta>
    <Fade bottom>
      <HeadingText color='white' alignment='center'>
        Lorem ipsum dolor sit amet. 
      </HeadingText>
      <Button primary>Start</Button>
      <Button>Docs</Button>
    </Fade>
    </Section>
    </React.Fragment>
  );
}

export default App;
