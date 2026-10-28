
const App = () => {

  const counter1 = useCounter(0,10)

  console.log(counter1);

  const counter2 = useCounter(100,10)
  

  return (
    <div>
      <h1>Counter:{count}</h1>

      <button onClick={counter1.Increment}>Increment</button>
      <button onClick={counter1.Decrement}>Decrement</button>
      <button onClick={counter1.Reset}>Reset</button>
    </div>
  );
}

export default App
