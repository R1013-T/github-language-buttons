import { createBar } from "../src/bar.js";

export default async function handler(request, response) {
  try {
    response.setHeader("Content-Type", "image/svg+xml");
    response.setHeader("Cache-Control", "max-age=0, s-maxage=86400");
    response.send(await createBar(request.query.width));
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    response.send(error.message);
  }
}
