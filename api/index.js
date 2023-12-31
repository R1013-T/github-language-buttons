import { createButton } from "../src/button.js";

export default async function handler(request, response) {
  try {
    response.setHeader("Content-Type", "image/svg+xml");
    response.setHeader("Cache-Control", "max-age=3600");
    response.send(await createButton(request.query.language, request.query.theme || "dark"));
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
