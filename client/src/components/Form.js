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
      .get("http://localhost:8080/stock", {
        params: userData,
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
    <form onSubmit={submitHandler}>
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          name='ticker'
          value={ticker}
          onChange={onChangeHandler}
          class=" w-1/2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Seach ex: GME"
          required
        />
        <input
          type="date"
          name='date'
          value={date}
          onChange={onChangeHandler}
          placeholder="MM-DD-YYYY"
          required
          class=" w-1/2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <button
          type="submit"
          class="text-white absolute ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

    // <div>
    //   <form
    //     onSubmit={submitHandler}
    //     className="flex flex-col justify-center gap-y-4"
    //   >
    //     <input
    //       type="text"
    //       name="ticker"
    //       value={ticker}
    //       placeholder="AAPL"
    //       onChange={onChangeHandler}
    //     ></input>
    //     <input
    //       type="date"
    //       name="date"
    //       value={date}
    //       onChange={onChangeHandler}
    //     ></input>
    //     <button
    //       type="submit"
    //       className="border border-4 border-black-300 bg-green-300 rounded-full"
    //     >
    //       Search
    //     </button>
    //   </form>
    // </div>
  );
};

export default Form;

/* <form onSubmit={submitHandler} action="/ticket" method="POST">
    <input type="text" placeholder="AAPL" name="ticketName"/>
    <button type="submit">Look Up Symbol</button>
    
        </form> */
