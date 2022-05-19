import Footer from './Footer.js';
import QuoteBox from "./QuoteBox.js";
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Row className="App h-100 justify-content-center">
      <Row className="h-75 justify-content-center">
        <QuoteBox />
      </Row>
      <Row className="h-25">
        <Footer />
      </Row>
    </Row>
  );
}

export default App;
