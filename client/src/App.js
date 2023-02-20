import StockInfo from "./components/StockInfo";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";

import { useState } from 'react'



const App = () => {
  const [stockData, setStockData] = useState(null);

  const handleStockData = (data) => {
    setStockData(data);
  }
  
  return (
    <div>
      <Wrapper>
        <div className="w-1/2 m-auto flex flex-col justify-center items-center">
          <h1 className="text-2xl">Look up Stock Info</h1>

          <Form onStockData={handleStockData}></Form>
        </div>
      </Wrapper>

      <Wrapper>
        <StockInfo stockData={stockData}/>
      </Wrapper>
    </div>
  );
};

export default App;
