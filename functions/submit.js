/**
 * Cloudflare Pages Function → /submit
 * Don's Heating & Air — contact form handler
 * Sends a branded HTML email via Gmail API (service account JWT auth).
 * Returns JSON { ok: true } or { ok: false, error: string }
 */

const RECIPIENT = 'brickley@killergrowth.com';
const SUBJECT   = "New Quote Request — Don's Heating & Air";

const ALLOWED_ORIGINS = [
  'https://donsheatingandair.com',
  'https://www.donsheatingandair.com',
  'https://dons-heating.pages.dev',
  'https://staging.dons-heating.pages.dev',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function objToB64url(obj) {
  const json = JSON.stringify(obj);
  let binary = '';
  for (let i = 0; i < json.length; i++) binary += String.fromCharCode(json.charCodeAt(i) & 0xff);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function bufToB64url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getGmailAccessToken(serviceEmail, privateKeyPem, impersonateEmail) {
  const now = Math.floor(Date.now() / 1000);
  const headerB64 = objToB64url({ alg: 'RS256', typ: 'JWT' });
  const claimB64  = objToB64url({
    iss: serviceEmail, sub: impersonateEmail,
    scope: 'https://www.googleapis.com/auth/gmail.send',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600,
  });
  const signingInput = `${headerB64}.${claimB64}`;

  const b64 = privateKeyPem.replace(/-----[A-Z ]+-----/g, '').replace(/\s+/g, '');
  const decoded = atob(b64);
  const keyBuffer = new Uint8Array(decoded.length);
  for (let i = 0; i < decoded.length; i++) keyBuffer[i] = decoded.charCodeAt(i);

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', keyBuffer.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false, ['sign']
  );
  const sigBytes = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5', cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const jwt = `${signingInput}.${bufToB64url(sigBytes)}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${encodeURIComponent(jwt)}`,
  });
  const data = await tokenRes.json();
  if (!data.access_token) throw new Error('Token error ' + tokenRes.status + ': ' + JSON.stringify(data));
  return data.access_token;
}

function buildHtmlEmail(name, email, phone, service, message) {
  const serviceLabel = service ? service.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Not specified';
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#f0f4fb;font-family:'Open Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4fb;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#1B2A4A;padding:36px 40px;text-align:center;border-radius:8px 8px 0 0;">
          <div style="color:#3A5DAE;font-family:'Oswald',Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:1px;">DON'S HEATING &amp; AIR</div>
          <div style="color:#fff;font-family:'Oswald',Arial,sans-serif;font-size:13px;font-weight:400;letter-spacing:3px;text-transform:uppercase;margin-top:6px;">New Quote Request</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px;">
          <p style="margin:0 0 24px;color:#1B2A4A;font-family:'Open Sans',Arial,sans-serif;font-size:15px;line-height:1.6;">
            A new quote request was submitted through the Don's Heating &amp; Air website. Here are the details:
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:12px 16px;background:#f0f4fb;border-left:3px solid #3A5DAE;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;width:120px;">Name</td>
              <td style="padding:12px 16px;background:#f0f4fb;font-size:15px;color:#1B2A4A;font-weight:bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Email</td>
              <td style="padding:12px 16px;font-size:15px;color:#1B2A4A;"><a href="mailto:${email}" style="color:#3A5DAE;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:12px 16px;background:#f0f4fb;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Phone</td>
              <td style="padding:12px 16px;background:#f0f4fb;font-size:15px;color:#1B2A4A;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Service</td>
              <td style="padding:12px 16px;font-size:15px;color:#1B2A4A;">${serviceLabel}</td>
            </tr>
          </table>

          ${message ? `
          <div style="margin-top:24px;">
            <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Message</div>
            <div style="background:#f0f4fb;border-left:3px solid #3A5DAE;padding:16px;font-size:15px;color:#1B2A4A;line-height:1.7;">${message.replace(/\n/g,'<br>')}</div>
          </div>` : ''}

          ${phone ? `<div style="margin-top:32px;text-align:center;"><a href="tel:${phone.replace(/\D/g,'')}" style="display:inline-block;background:#3A5DAE;color:#fff;font-family:'Oswald','Arial Narrow',Arial,sans-serif;font-size:16px;font-weight:700;padding:14px 36px;border-radius:4px;text-decoration:none;letter-spacing:2px;text-transform:uppercase;">Call ${phone}</a></div>` : ''}
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#1B2A4A;padding:24px 40px;text-align:center;border-radius:0 0 8px 8px;">
          <p style="margin:0;color:#888;font-size:12px;">
            Don's Heating &amp; Air &bull; 306 S. Main St, El Dorado, KS 67042 &bull;
            <a href="tel:3163219438" style="color:#3A5DAE;">(316) 321-9438</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin') || '';
  const headers = corsHeaders(origin);

  try {
    const form    = await request.formData();
    const name    = form.get('name')    || '(no name)';
    const email   = form.get('email')   || '';
    const phone   = form.get('phone')   || '';
    const service = form.get('service') || '';
    const message = form.get('message') || '';

    const accessToken = await getGmailAccessToken(
      env.GMAIL_SERVICE_EMAIL,
      env.GMAIL_PRIVATE_KEY,
      env.GMAIL_FROM
    );

    const htmlBody = buildHtmlEmail(name, email, phone, service, message);

    const mimeLines = [
      `From: Don's Heating & Air <${env.GMAIL_FROM}>`,
      `To: ${RECIPIENT}`,
      `Subject: ${SUBJECT}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      '',
      htmlBody,
    ].join('\r\n');

    const emailBytes = new TextEncoder().encode(mimeLines);
    let emailBinary = '';
    for (let i = 0; i < emailBytes.length; i++) emailBinary += String.fromCharCode(emailBytes[i]);
    const encoded = btoa(emailBinary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const sendRes = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${encodeURIComponent(env.GMAIL_FROM)}/messages/send`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw: encoded }),
      }
    );

    if (!sendRes.ok) {
      const err = await sendRes.text();
      throw new Error('Gmail send ' + sendRes.status + ': ' + err.slice(0, 200));
    }

    return new Response(JSON.stringify({ ok: true }), { headers });

  } catch (err) {
    console.error('submit error:', err.message);
    return new Response(JSON.stringify({ ok: false, error: err.message.slice(0, 200) }), {
      status: 500,
      headers,
    });
  }
}
