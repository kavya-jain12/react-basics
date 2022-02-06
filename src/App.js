import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ComponentA from './components/ContextAPI/ComponentA';
import { ContextProvider } from './components/ContextAPI/withContext';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FRParentInput from './components/Forwarding Refs/FRParentInput';
import Fragments from './components/Fragments';
import Hello from './components/Hello';
import ClickCounter from './components/HigherOrderComponents/ClickCounter';
import HoverCounter from './components/HigherOrderComponents/HoverCounter';
import List from './components/List';
import ParentMemoComp from './components/Memo/ParentMemoComp';
import NoJSX from './components/NoJSX';
import ParentComponent from './components/ParentComponent';
import Portal from './components/Portal';
import ParentComp from './components/PureComponents/ParentComp';
import Refs from './components/Refs';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import RenderCounter from './components/RenderProps/RenderCounter';
import RenderProps from './components/RenderProps/RenderProps';
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
      <Fragments />

      {/* -------- Pure Components -------- */}
      <ParentComp />

      {/* -------- React Memo -------- */}
      <ParentMemoComp />

      {/* -------- Refs -------- */}
      <Refs />

      {/* -------- Forwarding Refs -------- */}
      <FRParentInput />

      {/* --------Portals -------- */}
      <Portal />

      {/* -------- Higher Order Components -------- */}
      <ClickCounter name="kavya" />
      <HoverCounter />

      {/* -------- Render Props -------- */}
      <RenderCounter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
      <RenderProps render={(isLoggedIn) => isLoggedIn ? "Kavya" : "Guest"} />

      {/* -------- Context API -------- */}
      <ContextProvider value="Kavya">
        <ComponentA />
      </ContextProvider>
    </div>
  );
}

export default App;
