import Stripe from "stripe"

const GetStripeProducts = async () => {
    const stripe = new Stripe("sk_test_51NQKYoEDQjXGX5v4st9R5sH4F2mqlAdqwI7tSdJF6iYQlYXnwqp9VPcaOHB4QZaXCxwWfIUyYDZMp672YlU2EBo900GfKCzASQ", {
        apiVersion: '2022-11-15'
    })
    const res = await stripe.prices.list({
        expand: ['data.product'],
    })
    const prices = res.data
    return prices
}

export default GetStripeProducts