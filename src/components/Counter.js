import React from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const toggle = () => {
  return {
    type: "TOGGLE"
  }
}

export const byTen = () => {
  return {
    type: "BY_TEN"
  }
}
const Counter = () => {
  const counter = useSelector((state) => state);
  const show = true;
  const dispatch = useDispatch();

  return ( <main className = {
      classes.counter
    }>
    <h1> Redux Counter </h1> {
    show && <div className = {
      classes.value
    }> {
      counter
    } </div>} <div>
    <button onClick={() => dispatch(increment())}> Increment </button> <button oncClick={() => dispatch(byTen())}> Increase by 10 </button> <button onClick={() => dispatch(decrement())}> Decrement </button> </
    div> <button onClick={() => dispatch(toggle())}> Toggle Counter </button> </main>
  )
}

export default Counter;