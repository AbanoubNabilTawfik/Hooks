import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import ClassCounterTwo from './Components/ClassCounterTwo';
import HookCounterFive from './Components/HookCounterFive';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import DataFetching from './Components/DataFetching';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ComponentC from './Components/ComponentC';
import React, { useReducer } from 'react';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import ComponentATwo from './Components/ComponentATwo';
import ComponentBTwo from './Components/ComponentBTwo';
import ComponentCTwo from './Components/ComponentCTwo';
import DataFetchingThree from './Components/DataFetchingThree';
import DataFetchingFour from './DataFetchingFour';
import ParentComponent from './Components/ParentComponent';
import CounterThree from './Components/CounterThree';
import FocusInput from './Components/FocusInput';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CounterContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterFive/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingTwo/> */}
      {/* <UserContext.Provider value={'Abanoub'}>
        <ChannelContext.Provider value={'HeroPrograamer'}>
             <ComponentC />
        </ChannelContext.Provider>   
      </UserContext.Provider> */}

      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
{/* 
    <CounterContext.Provider value={{countState:count,countDispatch:dispatch}}>
       <ComponentATwo />
        <ComponentBTwo />
        <ComponentCTwo />
      </CounterContext.Provider> */}

      {/* <DataFetchingThree/> */}
      {/* <DataFetchingFour/> */}
      {/* <ParentComponent/> */}

      {/* <CounterThree/> */}
      {/* <FocusInput/> */}
      <DocTitleOne/>
      <DocTitleTwo/>


    </div>
  );
}

export default App;
