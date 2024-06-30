import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const POST = async (request) => {
    const body = await request.json();
    console.log(body)
    if (body.line_items.length === 0) {
        return NextResponse.json({ error: 'No line items provided' }, { status: 400 });
    }

    try {
        const stripe = new Stripe("sk_test_51NQKYoEDQjXGX5v4st9R5sH4F2mqlAdqwI7tSdJF6iYQlYXnwqp9VPcaOHB4QZaXCxwWfIUyYDZMp672YlU2EBo900GfKCzASQ" ?? '', {
            apiVersion: '2022-11-15',
        });

        const session = await stripe.checkout.sessions.create({
            success_url: 'https://store-next-js2.vercel.app/',
            cancel_url: 'https://store-next-js2.vercel.app/',
            line_items: body.line_items,
            mode: 'payment', 
        });

        return NextResponse.json({ session });
    } catch (error) {
        console.log('Error:', error);
        return NextResponse.json({ error: 'Failed to create Stripe checkout session' }, { status: 500 });
    }
};

export default { POST };
