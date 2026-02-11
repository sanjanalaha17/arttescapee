import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            order_amount
        } = body;

        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
            key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
        });

        const order = await razorpay.orders.create({
            amount: order_amount * 100, // must be in paise
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        });

        return NextResponse.json(order);

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

