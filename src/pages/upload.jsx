import { GlobalStyles, Hamburger, HeadingText, ImageCard, Logo } from '../components'
import { Nav, Section } from '../containers'
import checker from '../assets/checker.jpg'

const Upload = () => {
   return (
      <Section cta small>
         <GlobalStyles />
         <Nav>
            <Logo />
            <Hamburger />
         </Nav>
         <HeadingText alignment='center'>Upload an Image</HeadingText>
         <ImageCard source={checker} aspect='1 / 1.25' button buttonPrimary />
      </Section>
   )
}

export { Upload }