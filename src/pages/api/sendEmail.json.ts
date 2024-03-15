import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, subject, html, text } = body;
  console.log({ to, from, subject, html, text });

  return new Response(JSON.stringify({
    name: "Astro",
    url: "https://astro.build",
  }), {
    status: 200,
    statusText: "OK",
  });

  // const send = await resend.emails.send({
  //   from: "hoon@sociable.run",
  //   to: "mrgravity817@gmail.com",
  //   subject: "Sample Subject",
  //   html: "<h1>Sample HTML</h1>",
  //   text: "hi"
  // })
  //
  // if (send.data) {
  //   return new Response(JSON.stringify({
  //     message: send.data
  //   }), {
  //     status: 200,
  //     statusText: "OK",
  //   });
  // } else {
  //   return new Response(JSON.stringify({
  //     message: send.error
  //   }), {
  //     status: 500,
  //     statusText: "Internal Server Error",
  //   });
  // }
  //
}
