class OrderModel {

    //copy constructor
    constructor(order) {
        this.id = order.id
        this.price = order.price
        this.orderDate = order.orderDate
        this.customerName = order.customerName

    }
}

module.exports = OrderModel