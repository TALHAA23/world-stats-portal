export async function GET() {
  try {
    const response = await fetch("https://api.myip.com");
    return new Response(response.body);
  } catch (err) {
    return new Response("error", { status: 400 });
  }
}
