import './App.css';
import { useState } from 'react';

function App() {

  const [data ,setData] = useState([
    {
      id: 1,
      age: 65
    },
    {
      id: 2,
      age: 40
    },
    {
      
      age: 50
    },
  ])

  const getStatus = (item) => {
    if (item.age === 65) {
      return "high"
     
    }
    if (item.age === 50) {
      return "medium"
    }
    return "minimal"
  }

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${getStatus(item)}`} >   {/* we didn't use '' ,we used `` they are not same think */}
         
            <p >                                                     
              kritik durum  {item.age}                                      
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
