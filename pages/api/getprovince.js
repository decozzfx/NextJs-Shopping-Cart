
export default async function handler (req, res) {
    try {
        const response = await fetch('https://api.rajaongkir.com/starter/province', {
            headers: { "key" : '4440357e7882967ced6d5f9ac4755d5a' }
        })
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.error
    }
}