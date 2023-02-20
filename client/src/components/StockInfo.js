import Wrapper from "./Wrapper";

const StockInfo = ({ stockData }) => {
  if (!stockData){
    return <div>Loading...</div>
  }
  

  return (
    <Wrapper>
      
      <ul>
        <li>Symbol : {stockData.symbol}</li>
        <li>Open : {stockData.open}</li>
        <li>High : {stockData.high}</li>
        <li>Low : {stockData.low}</li>
        <li>Close : {stockData.close}</li>
        <li>Volume : {stockData.volume}</li>
      </ul>
    </Wrapper>
  );
};

export default StockInfo;
