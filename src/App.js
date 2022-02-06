import './App.css';
import ConditionalRender from './components/ConditionalRender';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Form from './components/Form';
import Hello from './components/Hello';
import List from './components/List';
import NoJSX from './components/NoJSX';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/Welcome';
import WithProps from './components/WithProps';
import WithState from './components/WithState';

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <NoJSX />
      <WithProps name="Kavya" />
      <WithState />
      <Counter />
      <EventBind />
      <ParentComponent />
      <ConditionalRender />
      <List />
      <Form />
    </div>
  );
}

export default App;
