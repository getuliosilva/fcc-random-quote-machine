import Row from 'react-bootstrap/Row'

function QuoteText(props) {
  return (
      <Row id="text" className="justify-content-center text-center">
        {props.quoteText}
      </Row>
  );
}

export default QuoteText;