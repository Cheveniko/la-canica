import { Resend } from "resend";

import MagicLink from "@/emails/MagicLink";

const resend = new Resend(process.env.RESEND_API_KEY);

type Params = {
  identifier: string;
  url: string;
};

export const sendVerificationRequest = async ({ identifier, url }: Params) => {
  //   const { identifier, url } = params;
  const { host } = new URL(url);

  try {
    const data = await resend.emails.send({
      from: "noreply@lacanica.ec",
      to: [identifier],
      subject: `Inicia sesión en ${host}`,
      text: text(url, host),
      react: MagicLink(url),
    });
    return { success: true, data };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send verification Email");
  }
};

const text = (url: string, host: string) => {
  return `Inicia sesión en ${host}\n${url}\n\n`;
};
