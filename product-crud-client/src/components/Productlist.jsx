import React,{useEffect,useState} from 'react'
import Axios from 'axios'
const Productlist = () => {
let [products,setProducts]=useState([])

  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products').then((res)=>{
      setProducts(res.data)
    }).catch(()=>{})
  },[])
  return (
    <>
    <div className="container">
      <pre>{JSON.stringify(products)}</pre>
      <div className="row">
        {
          products.length>0?<>
         {
          products.map((prod)=>{
           return <div className="col-md-3">
            <div className="card">
              <div className="card-header"><img src={prod.image} alt="" /></div>
              <div className="card-body">
                <ul className='list-group'>
                  <li className='list-group-item'>Name:{prod.name}</li>
                  <li className='list-group-item'>Name:{prod.price}</li>      
                  <li className='list-group-item'>Name:{prod.qty}</li>
                  <li className='list-group-item'>Name:{prod.info}</li>
                </ul>
              </div>
            </div>
          </div>
          })
         }
        </>:<h1>no</h1>
        }
        
      </div>
    </div>
    </>
  )
}

export default Productlist