import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]);  
  const API_KEY = "1fdc29c9642249e7887f7df2269d9e62";

  const getData = async () => {
    if (!search.trim()) {
        console.log("Search query is empty");
        return;
    }
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    getData()
  }, [])

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput =(event)=>{
    setSearch(event.target.value)

  }

  return (
    <div>
      <nav>
        <div>
          <h1>HeadlinesHub</h1>
        </div>
        
        <div className='search-bar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className='head'>Stay updated with HeadlinesHub</p>
      </div>
      <div className='categorybtn'>
        <button onClick={userInput} value= "sports">Sports</button>
        <button onClick={userInput} value= "politics">Politics</button>
        <button onClick={userInput} value= "entertainment">Entertainment</button>
        <button onClick={userInput} value= "health">Health</button>
        <button onClick={userInput} value= "fitness">Fitness</button>
      </div>

      <div>
        
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp;
