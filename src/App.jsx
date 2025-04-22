import { useState } from 'react';
import './App.css';

function App() {
  const [imgUrl, setImgUrl] = useState("");

  const getImg = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setImgUrl(data.message);
  };

  return (
    <>
      <h1>React-dog</h1>
      <img src={imgUrl} alt="Random dog" />
      <div>{imgUrl}</div>
      <button onClick={getImg}>Get dog</button>
    </>
  );
}

export default App;
