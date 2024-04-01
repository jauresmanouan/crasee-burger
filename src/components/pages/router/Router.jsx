import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OrderPage from '../order/OrderPage'
import LoginPage from '../login/LoginPage'
import ErrorPage from '../error/ErrorPage'

export default function () {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}
