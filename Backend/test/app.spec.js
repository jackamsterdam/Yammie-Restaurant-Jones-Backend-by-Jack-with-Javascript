const server = require('../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

let should = chai.should()
chai.use(chaiHttp)

// Tested REST API using Mocha and Chai:

describe('/Get all orders in last day', () => {
    it('it should GET all orders made in the last day only', (done) => {
        chai.request(server)
            .get('/api/orders/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.not.be.eq(0) //means no orders were made
                done()
            })
    })
})

describe('/POST new order', () => {
    it('it should add a new order', (done) => {
        let order = {
            "price": 40.99,
            "orderDate": "2022-09-30 09:41:22",
            "customerName": "Chris",
            "deliveryAddress": "1535 Broadway, New York, NY 10036, United States",
            "phone": "0584594576"
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(201)
                res.body.should.be.a('object')
                res.body.should.have.property('price').eql(40.99)
                res.body.should.have.property('orderDate').eql("2022-09-30 09:41:22")
                res.body.should.have.property('customerName').eql("Chris")
                res.body.should.have.property('deliveryAddress').eql("1535 Broadway, New York, NY 10036, United States")
                res.body.should.have.property('phone').eql('0584594576')
                done()
            })
    })
})



//! Failing tests to check: 


describe('/Get orders with wrong route of the last day', () => {
    it('it should Fail to GET all orders made in last day', (done) => {
        chai.request(server)
            .get('/api/ordersssssssssssssssssss/')
            .end((err, res) => {
                res.should.have.status(404)
                done()
            })
    })
})

describe('/POST new order with missing property', () => {
    it('it should Fail to POST a new order with property price', (done) => {
        let order = {
            // "price": 40.99,  (Missing property)  
            "orderDate": "2022-09-30 09:41:22",
            "customerName": "Chris",
            "deliveryAddress": "1535 Broadway, New York, NY 10036, United States",
            "phone": "0584594576"
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
                done()
            })
    })

    it('it should Fail to POST a new order with property orderDate', (done) => {
        let order = {
            "price": 40.99,
            // "orderDate": "2022-09-30 09:41:22",  (Missing property) 
            "customerName": "Chris",
            "deliveryAddress": "1535 Broadway, New York, NY 10036, United States",
            "phone": "0584594576"
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
                done()
            })
    })

    it('it should Fail to POST a new order with property customer name', (done) => {
        let order = {
            "price": 40.99,
            "orderDate": "2022-09-30 09:41:22",
            // "customerName": "Chris", (Missing property)  
            "deliveryAddress": "1535 Broadway, New York, NY 10036, United States",
            "phone": "0584594576"
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
                done()
            })
    })

    it('it should Fail to POST a new order with property delivery address', (done) => {
        let order = {
            "price": 40.99,
            "orderDate": "2022-09-30 09:41:22",
            "customerName": "Chris",
            // "deliveryAddress": "1535 Broadway, New York, NY 10036, United States", (Missing property)  
            "phone": "0584594576"
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
                done()
            })
    })

    it('it should Fail to POST a new order with property phone', (done) => {
        let order = {
            "price": 40.99,
            "orderDate": "2022-09-30 09:41:22",
            "customerName": "Chris",
            "deliveryAddress": "1535 Broadway, New York, NY 10036, United States",
            // "phone": "0584594576" (Missing property)  
        }
        chai.request(server)
            .post('/api/orders/')
            .send(order)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
                done()
            })
    })
})
