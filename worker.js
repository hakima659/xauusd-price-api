export default {
  async fetch(request) {
    const url =
      "https://api.goldprice.dev/v1/prices?symbol=XAU-USD-SPOT";

    try {
      const response = await fetch(url);

      const text = await response.text();

      return new Response(
        JSON.stringify({
          worker_ok: true,
          api_status: response.status,
          api_response: text
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          worker_ok: false,
          error: error.message
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
  }
};
