import { useState } from "react";
import axios from "axios";

const Form = ({ onStockData }) => {
  //intializing state
  const [userData, setUserData] = useState({
    ticker: "",
    date: "",
  });

  const { ticker, date } = userData;

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios
      .get('/api', {
        params: userData
      })
      .then((response) => onStockData(response.data));
    // axios
    //   .get(`http://localhost:8080/${ticker}`)
    //   .then((response) => onStockData(response.data));
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.toUpperCase() });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center gap-y-4"
      >
        Stock Ticker:
        <input
          type="text"
          name="ticker"
          value={ticker}
          placeholder="AAPL"
          onChange={onChangeHandler}
        ></input>
        <input
          type="date"
          name="date"
          value={date}
          onChange={onChangeHandler}
        ></input>
        <button
          type="submit"
          className="border border-4 border-black-300 bg-green-300 rounded-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;

/* <form onSubmit={submitHandler} action="/ticket" method="POST">
    <input type="text" placeholder="AAPL" name="ticketName"/>
    <button type="submit">Look Up Symbol</button>
    
        </form> */
