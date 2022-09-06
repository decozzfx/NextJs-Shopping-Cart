
export default async function handler (req, res) {
    const {province} = req.query
    try {
        const response = await fetch('https://api.rajaongkir.com/starter/city?province='+province, {
            headers: { "key" : '4440357e7882967ced6d5f9ac4755d5a' }
        })
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.error
    }
}