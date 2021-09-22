// todo import from components using a local index.jsx
import React from 'react'
import { Button, Logo, Hamburger, GlobalStyles, ImageCard, HeadingText, BodyText } from '../components'
import { Nav, Section, TextContainer } from '../containers'

import herobg from '../assets/placeholderbg.png'
import halftone1 from '../assets/halftonetest.png'
import halftone2 from '../assets/halftonetest2.png'

import Fade from 'react-reveal/Fade'

const Landing = (() => {
    return (
        <>
            <GlobalStyles />
            <Nav>
                <Logo />
                <Hamburger />
            </Nav>
            <main>
            <Fade direction="down">
                <Section solid solidbg='black'>
                    <ImageCard hero source={herobg} button>
                        <Button>Get Started</Button>
                    </ImageCard>
                    <TextContainer overlay>
                        <HeadingText color='white' mult overlay>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color='cyan' overlay>
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
                </Section>
            </Fade>
            <Fade bottom >
                <Section solid solidbg='black' flip bisect>
                    <ImageCard source={halftone1} />
                    <TextContainer>
                        <HeadingText color='white' mult right>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color='cyan' right bisect>
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
                </Section>
            </Fade>
            <Fade bottom>
                <Section solid solidbg="black" bisect reverse>
                    <ImageCard source={halftone2} />
                    <TextContainer>
                        <HeadingText color='white' mult>
                            Lorem ipsum dolor sit amet.
                        </HeadingText>
                        <BodyText color="cyan">
                            Lorem ipsum dolor sit amet I am the glob glob glooo bob bob abananan its the and of in time out gin when your feel like dream now flus or night
                        </BodyText>
                    </TextContainer>
                </Section>
            </Fade>
            <Section bg='cyan' solid solidbg='cyan' cta>
                <Fade bottom>
                    <HeadingText color='white' alignment='center'>
                        Lorem ipsum dolor sit amet.
                    </HeadingText>
                    <Button primary>Start</Button>
                    <Button>Docs</Button>
                </Fade>
            </Section>
        </main>
        </>
    )
})

export { Landing }