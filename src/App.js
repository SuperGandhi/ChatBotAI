import './App.css';
import React, {useState, useEffect} from 'react';



function App() {
  
  const [query,setQuery] = useState('')
  const [container, setContainer] = useState([])
  const [lastPoint, setLastPoint] = useState('')
  
  
  useEffect (() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd8818fa09emshcd4bed22312084fp14331djsn23e53f613ef5'
      }
    };
    
    fetch(`https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg= + ${query}`, options)
    .then(response => {
      return response.json(); 
    })
    .then(data =>{
      setContainer([data])
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }, [lastPoint])
    
    const onChangeHandler = e =>{
      setQuery(e.target.value)
    }

    const submitHandler = e =>{
      e.preventDefault();
      setLastPoint(query)
    }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={query} onChange={onChangeHandler}/>
        <button type="submit">submit</button>
      </form>
      {container.map((item)=>{
        return (
          <div>
            <p>{item.cnt}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
