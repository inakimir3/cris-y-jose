const FORM_URL = 'https://script.google.com/macros/s/AKfycbx3p7rEcd6JAiG6wrhlhXTLZOhS4X3aTMMbEctmbMqL5z05Se9c9ijkIgUs3F4u2bxymA/exec';

export async function post({ request }) {
  try {
    // Convertimos FormData a URLSearchParams
    const formData = await request.formData();
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    // Fetch a Google Apps Script con Content-Type correcto
    const res = await fetch(FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
