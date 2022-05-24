import Row from 'react-bootstrap/Row'

function QuoteAuthor(props) {
  return (
    <Row id="author" className="justify-content-center">
      {props.quoteAuthor}
    </Row>
  );
}

export default QuoteAuthor;