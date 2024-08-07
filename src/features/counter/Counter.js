import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <section>
            <p className='txt'>{count}</p>
            <div className='d-flex g-20 jc mt-2'>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}

export default Counter