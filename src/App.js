import {Button} from './components/Button'
import {ButtonAccent} from './components/ButtonAccent'
import {Nav} from './containers/Nav'
import {Logo} from './components/Logo'
import {Hamburger} from './components/Hamburger'
import {GlobalStyles} from './components/styled/GlobalStyles'
function App() {
  return (
    <div>
      <GlobalStyles/>
      <Nav>
        <Logo/>
        <Hamburger/>
      </Nav>
    </div>
  );
}

export default App;
