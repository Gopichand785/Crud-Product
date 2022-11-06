import React ,{useEffect,useState}from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Admin = () => {
  let [products ,setProducts]=useState([])
    useEffect(()=>{
      Axios.get('http://127.0.0.1:5000/api/products').then((resp)=>{
        setProducts(resp.data)
      }).catch(()=>{})
    },[])
  return (
   <>
   <div className="container">
    <pre>{JSON.stringify(products)}</pre>
    <div className="row">
      <div className="col-md-8">
        <table className='table table-hover'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>product</th>
              <th>image</th>
              <th>price</th>
              <th>qty</th>
              <th>info</th>
              <th>modify</th>
            </tr>
          </thead>
          <tbody>
            {
              products.length>0?<>
              {
                products.map((product)=>{
                  return <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.image}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{product.info}</td>
                    <td><Link to='/edit' className='btn btn-success'>Edit</Link>
                    <Link to='/admin' className='btn btn-danger'>Delete</Link></td>
                  </tr>
                })
              }
              </>:null
            }
          </tbody>
        </table>
      </div>
    </div>
   </div>
   </>
  )
}

export default Admin