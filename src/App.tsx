import { useEffect, useState } from 'react';

import './App.css';

import CountButton from './component/CountButton';

function App() {
const [likes,setLikes]=useState(0)

  useEffect(() => {
console.log('hello after increase')
  }, [likes]);
  
  const onClickCount = () => {
    setLikes((prev) => prev + 1);
  };
  const onDislike = () => {
    setLikes((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  const reetLikes = () => {
    setLikes(0);
  };
  return (
    <CountButton
      onClickCount={onClickCount}
      likesCount={likes}
      onDislike={onDislike}
      reetLikes={reetLikes}
    />
  );
}

export default App;
