exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ""
    };
  }

  const response = await fetch("https://alanbyrne.app.n8n.cloud/webhook/09707629-3852-43f8-b576-982ab6f6cac4/chatt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: event.body
  });

  const data = await response.text();

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: data
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
