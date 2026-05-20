// Server-side relay: browser form -> this function -> HubSpot.
// Browser-direct posts to HubSpot's submission endpoint return 200 but do
// not create contacts; server-side posts do. This function runs server-side
// on Vercel, so it replicates the path that works.

const PORTAL_ID = "47272843";
const ALLOWED_FORMS = {
  "6850b6c0-d8d7-4328-bc7c-3e044e5e3840": true, // Health Systems ROI Calculator
  "3ddec1fe-227e-4dc9-9e85-da203eb15923": true  // Physician Trial Signup
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }
  try {
    let body = req.body;
    if (typeof body === "string") body = JSON.parse(body || "{}");
    const formId = body && body.formId;
    const fields = body && body.fields;
    const context = (body && body.context) || {};

    if (!formId || !ALLOWED_FORMS[formId] || !Array.isArray(fields) || fields.length === 0) {
      res.status(400).json({ ok: false, error: "Invalid request" });
      return;
    }

    const hsRes = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/" + PORTAL_ID + "/" + formId,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: fields, context: context })
      }
    );

    if (hsRes.ok) {
      res.status(200).json({ ok: true });
    } else {
      const detail = await hsRes.text();
      res.status(502).json({ ok: false, error: "HubSpot rejected submission", detail: detail.slice(0, 300) });
    }
  } catch (e) {
    res.status(500).json({ ok: false, error: "Server error" });
  }
}
