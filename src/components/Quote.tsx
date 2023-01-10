import React from "react";
import styled from "styled-components";
import { useGetRandomQuoteQuery } from "../app/api";
import Loader from "./Loader";

const Wrapper = styled.section`
  position: absolute;
  top: 60px;
  left: 10%;
  width: 650px;
  color: white;
  font-size: 1.2rem;
  line-height: 2rem;
`;

const QuoteContent = styled.div``;

const QuoteAuthor = styled.div`
  font-weight: 700;
  margin-top: 10px;
`;

const Quote: React.FC = React.memo(() => {
  const { data: quote, isLoading, isSuccess, isError, error } = useGetRandomQuoteQuery();

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = (
      <Wrapper>
        <QuoteContent>{quote?.content ? `"${quote?.content}"` : ""}</QuoteContent>
        <QuoteAuthor>{quote?.author || ""}</QuoteAuthor>
      </Wrapper>
    );
  } else if (isError) {
    if ("status" in error) {
      const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
      content = (
        <Wrapper>
          <QuoteContent>
            An error has occurred
            <br />
            {errMsg}
          </QuoteContent>
        </Wrapper>
      );
    } else {
      content = (
        <Wrapper>
          <QuoteContent>{error.message}</QuoteContent>
        </Wrapper>
      );
    }
  }

  return <>{content}</>;
});

export default Quote;
