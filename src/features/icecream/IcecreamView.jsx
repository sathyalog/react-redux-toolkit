import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';

function IcecreamView() {
const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams)
const dispatch = useDispatch();
const [icecreams, setIcecreams] = useState(1);
  return (
    <div>
        <h2>No of Icecreams - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order Icecream</button>
        <input type="number" name="numberOfIcecreams" value={icecreams} onChange={() => setIcecreams(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(icecreams))}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView