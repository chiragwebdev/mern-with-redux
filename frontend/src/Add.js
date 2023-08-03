import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {add, min} from './redux/Slicecreate'


function Add() {
    const { showcount } = useSelector(state => state.custom);
    const { datadi } = useSelector(state => state.dataapi);
    const dispatch = useDispatch();
    // console.log(datadi)


    return (
        <>
            <h2>{showcount}</h2>
            <button onClick={() => dispatch(add())}> add</button>
            <button onClick={() => dispatch(min())}> min</button>
            <h2>Items : {datadi.length}</h2>
            
        </>
    )
}

export default Add 