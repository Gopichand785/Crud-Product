import React,{useState} from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'
const CreateProducts = () => {
    let [product,setProduct]=useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:""
    })
   let changeHandler=(e)=>{
    setProduct({
        ...product,[e.target.name]:e.target.value
    })
   }
  let SubmitHandler=(event)=>{
    event.preventDefault()
    let url=" http://127.0.0.1:5000/api/products/"
    Axios.post(url,product).then((response)=>{
        setSubmitted(true)
    }).catch(()=>{})
  }
  let [submited,setSubmitted]=useState(false)
  return (
    <>
    <div className='container'>
        <pre>{JSON.stringify(product)}</pre>
        <pre>{JSON.stringify(submited)}</pre>
        {
            submited?<><Navigate to='/productlist'/></>:<>
                    <div className='row'>
            <div className='col-md-8'>
                <div className="card">
                    <div className="card-header">
                        <h1>Createproduct</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={SubmitHandler}>
                        <div className="form-group">
                            <input type="text" className='form-control'  placeholder='product name' name='name' onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <input type="text" className='form-control'  placeholder='image' name='image' onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <input type="number" className='form-control'  placeholder='price' name='price' onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <input type="number" className='form-control'  placeholder='qty' name='qty'onChange={changeHandler}/>
                        </div><div className="form-group">
                            <input type="text" className='form-control'  placeholder='info' name='info' onChange={changeHandler}/>
                        </div>
                        <button className='btn btn-success'>create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div></>
            
        }

    </div>
    </>
  )
}

export default CreateProducts