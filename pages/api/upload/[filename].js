import fs from 'fs';

export default async (req, res) => {
    const filename = req.query.filename
    switch (req.method) {
        case 'GET':
            if (fs.existsSync(`./public/uploads/${filename}`)) {
                const file = fs.readFileSync(`./public/uploads/${filename}`)

                res.setHeader('Content-Type', 'image/png')
                res.send(file)
            } else {
                return res.status(404).json({ error: 'File not found' });
            }
            break
        case 'DELETE':
            if (fs.existsSync(`./public/uploads/${filename}`)) {
                fs.unlinkSync(`./public/uploads/${filename}`)
                return res.status(200).json({ message: 'Delete file successfully' });
            } else {
                return res.status(404).json({ error: 'File not found' });
            }
            break
        default:
            return res.status(405).json({ error: 'Method Not Allowed' });
    }
}