import Wrapper from "./Wrapper";

const StockInfo = ({ stockData }) => {
  if (!stockData) {
    return <div>Loading...</div>;
  }
  const { ticker, date, open, high, low, close, volume } = stockData;

  return (
    
    <Wrapper>
      <ul>
        <li>Symbol : {ticker}</li>
        <li>Date: {date} </li>
        <li>Open : {open}</li>
        <li>High : {high}</li>
        <li>Low : {low}</li>
        <li>Close : {close}</li>
        <li>Volume : {volume}</li>
      </ul>
      </Wrapper>
    
  );
};

export default StockInfo;
