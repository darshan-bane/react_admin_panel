import {Routes, Route} from "react-router-dom"
import Dashboard from '../Pages/Dashboard'
import Inventory from '../Pages/Inventory'
import Customer from '../Pages/Customer'
import Order from '../Pages/Product'

const MyRouteFun = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Dashboard/>}> </Route>
      <Route path='/inventory' element={<Inventory/>}> </Route>
      <Route path='/customers' element={<Customer/>}> </Route>
      <Route path='/products' element={<Order/>}> </Route>
    </Routes>
  
  )
}
export default MyRouteFun