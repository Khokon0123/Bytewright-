import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  description: z.string().min(10, "Please describe your project (10+ characters)"),
  budget: z.string().min(1, "Please select a budget range"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    /* [PLACEHOLDER] — Add email sending here (e.g. Resend, SendGrid, Nodemailer)
       Example with Resend:
       await resend.emails.send({
         from: 'noreply@bytewright.com',
         to: 'hello@bytewright.com',
         subject: `New meeting request from ${data.name}`,
         html: `<p>...</p>`,
       });
    */
    console.log("[Contact Form Submission]", {
      name: data.name,
      email: data.email,
      company: data.company || "N/A",
      service: data.service,
      budget: data.budget,
      description: data.description,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: (error as z.ZodError).issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
