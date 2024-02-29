import Contact from './assets/Contact';
import Hello from './assets/Hello';
// import Counter from './assets/Counter';

function App() {
  return(
    <div>
    <Hello name="Bob" message="hoe r u?"/>
    <Hello name="Tom"/>
    <Hello />

    <Contact email="eeee@eee.ee" phone = "081684651" />
    </div>
  )
}

export default App;
