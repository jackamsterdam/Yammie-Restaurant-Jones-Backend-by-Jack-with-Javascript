const express = require('express')
const OnlineOrderModel = require('../03-models/online-order-model')
const ordersLogic = require('../05-logic/orders-logic')

const router = express.Router()

// http://localhost:3001/api/orders/
router.get('/orders', async (request, response, next) => {

  try {
    //Logic
    const orders = await ordersLogic.getAllOrdersLastDay()

    //Success
    response.json(orders)

  } catch (err) {
    //All errors from business logic will end up here as well and go straight to my last middleware in app.js
    next(err)
  }
})


// http://localhost:3001/api/orders/
router.post('/orders', async (request, response, next) => {

  try {

    const order = new OnlineOrderModel(request.body)  //making an instance out of OrderModel with raw data from front
    const addedOrder = await ordersLogic.addOrder(order)
    response.status(201).json(addedOrder)

  } catch (err) {
    next(err)
  }
})



module.exports = router 