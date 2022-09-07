export default async function handler(req, res) {
  const form = await req.body
  try {
    const response = await fetch('https://api.rajaongkir.com/starter/cost', {
      method: 'POST',
      headers: {
        key: '4440357e7882967ced6d5f9ac4755d5a',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {form : {...form}}
    })
    // console.log(JSON.stringify(form));
    // console.log(form);
    const data = await response.json()

    res.json(data)
  } catch (error) {
    res.error
  }
}
