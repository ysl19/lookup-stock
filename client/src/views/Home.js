import React from "react";
import StockInfo from "../components/StockInfo";
import Form from "../components/Form";
import Wrapper from "../components/Wrapper";

import { useState } from "react";

const Home = () => {
  const [stockData, setStockData] = useState(null);

  const handleStockData = (data) => {
    setStockData(data);
  };

  return (
    <div>
      <Wrapper>
        <Form onStockData={handleStockData}></Form>
      </Wrapper>
      <Wrapper>
        <StockInfo stockData={stockData} />
      </Wrapper>
    </div>
  );
};

export default Home;
