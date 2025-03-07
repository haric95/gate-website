import validator from "email-validator";
import { google } from "googleapis";
import { NextApiRequest } from "next";

export async function POST(request: Request) {
  // For example, fetch data from your DB here

  const auth = new google.auth.GoogleAuth({
    projectId: process.env.SHEET_PROJECT_ID,
    // apiKey: "AIzaSyA4TUQvn3yLb3J0GO7KYgr-LhEIFi7C10I",
    credentials: {
      type: "service_account",
      project_id: process.env.SHEET_PROJECT_ID,
      private_key_id: process.env.SHEET_PRIVATE_KEY_ID?.replace(/\\n/g, "\n"),
      private_key: process.env.SHEET_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.SHEET_CLIENT_EMAIL,
      universe_domain: process.env.SHEET_UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  // @ts-ignore
  const { email } = await request.json();

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Please enter an email address" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (!validator.validate(email)) {
    return new Response(
      JSON.stringify({
        message:
          "There was an error registering your email. Please try again later.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  try {
    // @ts-ignore
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1IsFzCk1h9hkxpQ1hAumB0S5UGt28tRcJquqKz5UE_2I",
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[email]],
      },
    });
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message:
          "There was an error registering your email. Please try again later.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
