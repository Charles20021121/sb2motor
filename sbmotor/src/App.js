import React from 'react'
import SubmitForm from './JsFile/SubmitForm'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './JsFile/Haha'
import CustomerDetails from './JsFile/CustomerDetails'

export default function App() {
  return (
    <div>
            <BrowserRouter>
        <Routes>
        <Route path="/" element={<SubmitForm/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/:id" element={<CustomerDetails/>}/>

        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}
