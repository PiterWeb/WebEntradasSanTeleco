import { getSecret } from "astro:env/server";
import { Resend } from "resend";

const resend = new Resend(getSecret("RESEND_API_KEY")!);

export async function sendMailResend(
  qrBase64: string,
  reservaMail: string,
  reservaFullName: string,
) {
  const { data, error } = await resend.emails.send({
    from: getSecret("EMAIL_ADDRESS"),
    to: reservaMail,
    template: {
      id: "reservation-confirmation", // Plantilla definida en resend.com
      variables: {
        nombre_completo: reservaFullName,
      },
    },
    attachments: [
      {
        content: qrBase64.slice("data:image/png;base64,".length),
        filename: "qr.png",
        contentId: "qr",
      },
    ],
  });

  if (error) {
    throw error;
  }

  console.log(data);
}
