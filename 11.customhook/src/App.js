import logo from './logo.svg';
import './App.css';
import UseWindowSize from './hooks/UseWindowSize';
import useFetch from './hooks/useFetch'
import Hello from './hoc/Hello';


function App() {
  const { height, width } = UseWindowSize()

  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1')

  return (
    <div className="App">
     
        {width > 800 && <img src={logo} className="App-logo" alt="logo" />}


        Size  {height} {width}

        <div>
          <p>data:{JSON.stringify(data)}</p>

          <br />
          <p>error:{JSON.stringify(error)}</p>

          <br />
          <p>loading:{JSON.stringify(loading)}</p>
        </div>


     <Hello></Hello>

      
    </div>
  );
}

export default App;
