import React, { useReducer } from 'react'

function CounterTwo() {
    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, firstCounter: state.firstCounter + action.value };
            case 'decrement':
                return {...state, firstCounter: state.firstCounter - action.value };
            case 'increment2':
                return {...state, secondCounter: state.secondCounter + action.value };
            case 'decrement2':
                return {...state, secondCounter: state.secondCounter - action.value };
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>Incremen counter 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>Decrement counter 2</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo
