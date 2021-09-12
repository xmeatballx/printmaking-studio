// todo import from components using a local index.jsx
import React from 'react'
import { Button } from '../components/Button'
import { Nav } from '../containers/Nav'
import { Logo } from '../components/Logo'
import { Hamburger } from '../components/Hamburger'
import { GlobalStyles } from '../components/styled/GlobalStyles'
import { Section, TextContainer } from '../containers/Section'
import { ImageCard } from '../components/ImageCard'
import herobg from '../assets/placeholderbg.png'
import halftone1 from '../assets/halftonetest.png'
import halftone2 from '../assets/halftonetest2.png'
import { HeadingText } from '../components/HeadingText'
import { BodyText } from '../components/BodyText'
import Fade from 'react-reveal/Fade'

const Landing = (() => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Nav>
                <Logo />
                <Hamburger />
            </Nav>
            <Section bg='yellow'>
                <Fade bottom>
                    <ImageCard hero source={herobg} button>
                        <Button primary>Get Started</Button>
                    </ImageCard>
                    <TextContainer overlay>
                        <HeadingText color='magenta' mult overlay>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color='magenta' overlay>
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
                </Fade>
            </Section>
            <Section bg='magenta' flip bisect>
                <Fade bottom >
                    <ImageCard source={halftone1} />
                    <TextContainer>
                        <HeadingText color='cyan' mult right>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color='cyan' right bisect>
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
                </Fade>
            </Section>
            <Section bg="cyan" bisect reverse>
                <Fade bottom>
                    <ImageCard source={halftone2} />
                    <TextContainer>
                        <HeadingText color='magenta' mult>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color="magenta">
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
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
    )
})

export { Landing }