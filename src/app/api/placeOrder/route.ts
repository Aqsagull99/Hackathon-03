import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
      const body = await req.json();
      console.log("Received Data:", body); 
  
      const { customerName, email, totalAmount, address, postalCode } = body;
  
      if (!customerName || !email || !totalAmount || !address || !postalCode) {
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });
      }
  
      // Order save karo
      const order = await client.create({
        _type: "order",
        customerName,
        email,
        totalAmount,
        address,
        postalCode,
        status: "pending",
        orderDate: new Date().toISOString(),
      });
  
      return NextResponse.json({ message: "Order placed successfully!", order }, { status: 200 });
    } catch (error: any) {
      console.error("Error placing order:", error);
      return NextResponse.json({ message: "Error saving order", error: error.message }, { status: 500 });
    }
  }
  



