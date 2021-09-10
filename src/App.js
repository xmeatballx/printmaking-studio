import {Button} from './components/Button'
import {ButtonAccent} from './components/ButtonAccent'
import {GlobalStyles} from './components/styled/GlobalStyles'
function App() {
  return (
    <div>
      <GlobalStyles/>
      <Button primary>Upload</Button>
      <Button>Upload</Button>
      <ButtonAccent primary>Get Started</ButtonAccent>
      <ButtonAccent>Documentation</ButtonAccent>
    </div>
  );
}

export default App;
