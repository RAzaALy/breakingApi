import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Search from "./components/Search";
import "./App.css";
const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
        //   console.log(response.data);
        setItems(response.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Characters loading={loading} items={items} />
      </div>
    </>
  );
};

export default App;
