import ButtonNewQuote from "./ButtonNewQuote";
import ButtonTweet from "./ButtonTweet";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from "react";

function QuoteBox() {
  const [quoteText, setQuoteText] = useState("")
  const [quoteAuthor, setQuoteAuthor] = useState("")

  useEffect(() => {
    queryApi()
  }, [])

  function queryApi(){
    const quoteNumber = Math.floor( Math.random() * 500 )

    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      setQuoteText(data[quoteNumber].text)
      if(data[quoteNumber].author === null){
        setQuoteAuthor("Unknown")
      }
      else{
        setQuoteAuthor(data[quoteNumber].author)
      }
    })
  }

  function handleClick(){
    queryApi()
  }

  return (
    <Row id="quote-box" className="h-100">
        <Row className="h-75 align-items-center">
          <Col>
            <QuoteText quoteText={quoteText}/>
            <QuoteAuthor quoteAuthor={quoteAuthor}/>
          </Col>
        </Row>
        <Row className="h-25 justify-content-center">
            <ButtonNewQuote handleClick={handleClick}/>
            <ButtonTweet quoteText={quoteText} quoteAuthor={quoteAuthor}/>
        </Row>
    </Row>
  );
}

export default QuoteBox;