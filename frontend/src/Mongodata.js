import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { itemadd } from './redux/Dataapi'
import { add } from './redux/Slicecreate'
import { useAllpostQuery, useIdpostQuery, useDeletepostMutation,  useCreatnewDataMutation } from './redux/api'



function Mongodata() {


    const [adata, setadata] = useState("1");

    // ***********************
    // const allapidata = useAllpostQuery();

    const { data, isLoading, isSuccess, isFetching } = useAllpostQuery();
    // ***********************

    // if (allapidata.isSuccess) {
    // console.log(data)
    // }

    const idapidata = useIdpostQuery(adata);
    // console.log(idapidata)
    // console.log("01", idapidata)
    // console.log("02", idapidata.data)
    // console.log("03", idapidata.isSuccess)

    // const [deletepost, deletdata] = useDeletepostMutation();
    // console.log(deletdata)




    // const apidata = async () => {
    //     // const a = await fetch('http://localhost:3001/datasend');
    //     const a = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     const b = await a.json();
    //     setdata(b);
    // }
    const dispatch = useDispatch();

    // useEffect(() => {
    // apidata()
    // }, [])

    // const { datadi } = useSelector(state => state.dataapi)


    const [datalist] =useCreatnewDataMutation();

    const handle = (e) => {
        //  console.log(e)
        dispatch(itemadd(e));
        setadata(e.id)
    }
    const [inputdata, setinputdata] = useState({
        username: "",
        email: "",
        number: "",
        message: ""
    });
    const changevalue = (e) => {
        setinputdata({ ...inputdata, [e.target.name]: e.target.value })
    }
    const sending = (e) => {
        e.preventDefault()
        console.log(inputdata)
        datalist(inputdata)

        setinputdata({
            username: "",
            email: "",
            number: "",
            message: ""
        });

    }

    return (

        <div>
            {/* <input type="number" onChange={numid}/> */}
            {
                idapidata.isSuccess ?
                    <button>
                        <h3>id.number: {idapidata.data.id}</h3>
                        <h3>{idapidata.data.email}</h3>
                    </button>
                    : null
            }
            {/* <button onClick={() => { deletepost(1) }}>delete id</button> */}
            <form onSubmit={sending}>
                <input autoComplete='off' className="form-control mb-3 mt-3" type="text" placeholder="username" value={inputdata.username} name="username" onChange={changevalue} />
                <input autoComplete='off' className="form-control mb-3" type="email" placeholder="email" value={inputdata.email} name="email" onChange={changevalue} />
                <input autoComplete='off' className="form-control mb-3" type="tel" placeholder="Number" value={inputdata.number} name="number" onChange={changevalue} />
                <textarea autoComplete='off' className="form-control mb-3" placeholder='Message' value={inputdata.message} name="message" onChange={changevalue}></textarea>
                <input type="submit" value="Edit Data" className="btn btn-success" />
            </form>
            {
                <div className="container">
                    <div className="row">
                        {isFetching ?
                            <h1>Loading...</h1> :
                            data.map((e, id) => {
                                return (
                                    <div key={id} className="col-3 mb-3">
                                        <div className="card">
                                            <img src={`https://i.pravatar.cc/?img=${e.id}`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.username}</h5>
                                                <p className="card-text">{e.email}</p>
                                                <p className="card-text">{e.website}</p>
                                                {/* <button onClick={() => dispatch(itemadd(e))}>Add Items</button> */}
                                                <button onClick={() => handle(e)} className="btn btn-primary">Add Items</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            }
        </div>
        // <div>
        //     saffsfsafa
        // </div>
    )
}

export default Mongodata