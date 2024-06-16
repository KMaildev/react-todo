import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ClassComponent from './components/ClassComponent';
import ConditionalRendering from './components/ConditionalRendering';
import HelloWorld from './components/HelloWorld';
import ListDemo from './components/ListDemo';

function App() {
  return (
    <div className='App container py-5'>
      <div className='row'>
        <div className='col-md-12'>
          <ListDemo />
        </div>
      </div>
      {/* Hello from Main React

      <HelloWorld />

      <ClassComponent />

      <ConditionalRendering /> */}

    </div>
  );
}

export default App;
