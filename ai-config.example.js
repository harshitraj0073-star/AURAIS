/* ============================================================================
   NEXORA — AI CONFIG (TEMPLATE)
   ============================================================================

   SETUP
     1. Copy this file:      cp ai-config.example.js ai-config.js
     2. Get a free key:      https://aistudio.google.com/apikey
     3. Paste your key below.

   WHY THIS FILE IS A TEMPLATE
     `ai-config.js` is listed in .gitignore, so your real key is never sent
     to GitHub. Only this template (with an empty key) is committed.

     The template is loaded on localhost only — the deployed site never
     requests it, so there is no missing-file request in production.

   ALTERNATIVE (works on the deployed site, also safe)
     Open the app, click the "AI" indicator in the NEX chat header, and paste
     your key there. It is stored in this browser's localStorage only —
     it is never written to the repo.

   NOTE ON SAFETY
     This is a client-side key. Before exposing it publicly, restrict it in
     Google AI Studio to your exact domains (HTTP referrer) and never use a
     billing-enabled key for a public static site.
   ========================================================================= */

window.NEXORA_CONFIG = {
  // Paste your Gemini API key between the quotes. Leave "" to use localStorage.
  GEMINI_API_KEY: "",

  // Optional overrides -------------------------------------------------------
  // Model to use. Any model available on your tier works.
  NEX_MODEL: "gemini-flash-latest",
  // Seconds to wait before falling back to the local reply engine.
  NEX_TIMEOUT_MS: 9000
};
