import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
    const body = await request.json()

    if(body.lineItems.length === 0) {
        return new Response("Error", {
            status: 405,
        })
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
            apiVersion: '2022-11-15',
        })       

        const session = await stripe.checkout.sessions.create({
            success_url: '/success',
            cancel_url: '/cancel',
            line_items: body.lineItems,
            mode: 'subscription'
        })

        return NextResponse.json({session})
    } catch (error) {
        console.log("BROKED")
        console.log(error)
        return new Response("Error", {
            status: 405
        })
    }
}

export default POST