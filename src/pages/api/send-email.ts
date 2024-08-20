import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API);

console.log("resend");

export const POST: APIRoute = async ({ request }) => {
  try {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const name = body?.name;
      const email = body?.email;
      const message = body?.message;

      const { error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "hello world",
        html: "<p>it works!</p>",
      });

      if (error?.name) {
        return new Response(
          JSON.stringify({
            message: error.message,
          }),
          { status: 500 },
        );
      }

      return new Response(
        JSON.stringify({
          message: "email send sucessfully",
        }),
        { status: 201 },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "something bad happend",
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      message: "json it's need it",
    }),
    { status: 500 },
  );
};
