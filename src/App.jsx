import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const fetchAPI = async () =>{
    const Url = "https://x-colors.yurace.pro/api/random";
    const res = await fetch(Url);
    const result = await res.json();

    console.log(result);

    setCount(result.hex);
  }

  useEffect(()=>{
    fetchAPI();
  }, []);

  return (
    <>
      <div className='flex justify-center'>
        <div className="w-[1200px] h-[800px]" style={{backgroundColor: count }}></div>
      </div>
    </>
  )
}

export default App
