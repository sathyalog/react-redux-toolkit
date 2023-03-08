import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

function CakeView() {
const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
const dispatch = useDispatch();
  return (
    <div>
        <h2>No of cakes - {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}

export default CakeView