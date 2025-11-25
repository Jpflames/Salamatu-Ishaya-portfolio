"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectDetails = formData.get("projectDetails") as string;
  const budget = formData.get("budget") as string;

  // Validate form data
  if (!name || !email || !projectDetails) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Here you would typically:
  // 1. Send an email notification
  // 2. Save to a database
  // 3. Send to a CRM system
  // For now, we'll just log it (in production, implement actual email sending)
  
  console.log("Contact Form Submission:", {
    name,
    email,
    projectDetails,
    budget,
    timestamp: new Date().toISOString(),
  });

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, you would:
  // - Use a service like Resend, SendGrid, or Nodemailer to send emails
  // - Save to a database (Prisma, MongoDB, etc.)
  // - Integrate with a CRM system

  return { success: true, message: "Thank you! Your message has been received." };
}

