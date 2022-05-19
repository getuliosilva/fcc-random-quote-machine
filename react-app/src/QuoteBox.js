import ButtonNewQuote from "./ButtonNewQuote";
import ButtonTweet from "./ButtonTweet";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function QuoteBox() {
  return (
    <Row id="quote-box" className="h-100">
        <Row className="h-75 align-items-center">
            <Col>
                <QuoteText />
                <QuoteAuthor />
            </Col>
        </Row>
        <Row className="justify-content-center">
            <ButtonNewQuote />
            <ButtonTweet />
        </Row>
    </Row>
  );
}

export default QuoteBox;