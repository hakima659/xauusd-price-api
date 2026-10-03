
export default {
  async fetch(request) {
    const url = "https://api.goldprice.dev/v1/prices?symbol=XAU-USD-SPOT";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        return new Response(
          JSON.stringify({
            ok: false,
            error: "خطا در دریافت قیمت طلا"
          }),
          {
            status: 502,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store"
        }
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "دریافت قیمت ناموفق بود"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
  }
};
