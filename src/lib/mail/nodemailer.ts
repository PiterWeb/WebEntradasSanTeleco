import { getSecret } from "astro:env/server";
import nodemailer from "nodemailer"
import santelecoimage from "./santeleco.jpg?inline"

const transporter = nodemailer.createTransport({
  service: "GmailWorkspace",
  auth: {
    user: getSecret("EMAIL_ADDRESS"),
    pass: getSecret("GOOGLE_APP_PASSWORD"),
  },
});

export async function sendMailNodeMailer(
  qrBase64: string,
  reservaMail: string,
  reservaFullName: string,
) {

  const info = await transporter.sendMail({
    to: reservaMail,
    subject: "Prueba",
    html: mailContent.replace("{{{nombre_completo}}}", reservaFullName),
    text: mailTextContent.replace("{{{nombre_completo}}}", reservaFullName),
    attachments: [
      {
        filename: "qr.png",
        content: qrBase64.slice("data:image/png;base64,".length),
        encoding: "base64",
        cid: "qr"
      }, 
      {
        filename: "logo.jpg",
        content: santelecoimage,
        cid: "logo"
      }
    ]
  })
  
  console.log(info)
  
}

const mailContent = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <meta content="width=device-width" name="viewport" />
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta
        content="telephone=no,address=no,email=no,date=no,url=no"
        name="format-detection" />
    </head>
    <body>
      <!--$--><!--html--><!--head-->
      <div
        style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
        data-skip-in-text="true">
        Tu reserva para San Teleco 2026 ha sido confirmada
        <div>
           ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
        </div>
      </div>
      <!--body-->
      <table
        border="0"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        align="center">
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation">
                <tbody>
                  <tr>
                    <td>
                      <table
                        width="100%"
                        border="0"
                        cellpadding="0"da
                        cellspacing="0"
                        role="presentation"
                        style="width:100%">
                        <tbody>
                          <tr>
                            <td>
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="margin-top:0;margin-right:auto;margin-bottom:0;margin-left:auto;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                                <tbody>
                                  <tr>
                                    <td>
                                      <tr style="margin:0;padding:0">
                                        <td
                                          data-id="__react-email-column"
                                          style='margin:0;padding:0;margin-right:auto;margin-left:auto;margin-bottom:auto;margin-top:auto;background-color:rgb(30,41,57);padding-right:0.5rem;padding-left:0.5rem;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'>
                                          <div
                                            style="margin:0;padding:0;display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
                                            <p style="margin:0;padding:0">
                                              Justificante de reserva
                                            </p>
                                            <div style="margin:0;padding:0">
                                              <p style="margin:0;padding:0">
                                                 ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                                              </p>
                                            </div>
                                          </div>
                                          <table
                                            align="center"
                                            width="100%"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;max-width:465px;background-color:rgb(16,24,40);border-radius:0.25rem">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <tr
                                                    style="margin:0;padding:0;width:100%">
                                                    <td
                                                      align="center"
                                                      data-id="__react-email-column"
                                                      style="margin:0;padding:0">
                                                      <p
                                                        style="margin:0;padding:0;text-align:center">
                                                        <br />
                                                      </p>
                                                      <table
                                                        align="center"
                                                        width="100%"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation">
                                                        <tbody style="width:100%">
                                                          <tr style="width:100%">
                                                            <td
                                                              align="center"
                                                              data-id="__react-email-column">
                                                              <img
                                                                alt='Colorful stacked text logo with "SAN" in black and "TELECO" in pink and black letters.'
                                                                height="80"
                                                                src="cid:logo"
                                                                style="display:block;outline:none;border:none;text-decoration:none"
                                                                width="40" />
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      <h1
                                                        style="margin:0;padding:0rem;margin-right:0rem;margin-left:0rem;margin-bottom:30px;margin-top:30px;text-align:center;font-weight:700;font-size:24px;color:rgb(97,95,255)">
                                                        Justificante de reserva
                                                      </h1>
                                                      <p
                                                        style="margin:0;padding:0;font-size:14px;line-height:24px;color:rgb(255,255,255);margin-top:16px;margin-bottom:16px">
                                                        Hola
                                                        <!-- -->{{{nombre_completo}}}<!-- -->,
                                                      </p>
                                                      <p
                                                        style="margin:0;padding:0;font-size:14px;line-height:24px;color:rgb(255,255,255);margin-top:16px;margin-bottom:16px">
                                                        Hemos recibido una
                                                        petición para reservar una
                                                        entrada para San Teleco
                                                        2026 a tu nombre.
                                                      </p>
                                                      <div>
                                                        <img src="cid:qr" />
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style="margin:0;padding:0"><br /></p>
                              <p style="margin:0;padding:0"><br /></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!--/$-->
    </body>
  </html>`
  
const mailTextContent = `
  Justificante de reserva
  
   ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿ ‌ ‍‎‏﻿
  
  
  
  
  
  
  
  JUSTIFICANTE DE RESERVA
  
  Hola {{{nombre_completo}}},
  
  Hemos recibido una petición para reservar una entrada para San Teleco 2026 a tu nombre.
`