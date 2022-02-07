import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/gaborkis37

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  if (data) {
    return (
      <div>
        <h1>hello {data.id}</h1>
        <h1>TITLE: {data.title}</h1>
      </div>
    );
  }
}

export default App;
