
import Contact from "./assets/Contact";
import Hello from "./assets/Hello";

function App() {
  const helloData = [
    {name: 'Anirach',message: 'Hi there'},
    {name: 'Tom',message: 'Hello...'}
  ];

  return(
    <div className="App">
      < Contact />
      {helloData.map((data,index)=>(
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="eeee@eee.ee" phone = "081684651" />
    </div>
  );
 
}

export default App;
