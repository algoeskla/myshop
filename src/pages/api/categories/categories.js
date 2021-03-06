// See fail hakkab serveeerima endpoint'e nagu:
// 1. GET /products/[productId]
// 2. PUT /products/[productId]
// 3. DELETE /products/[productId]

import { query } from '../../../lib/db';

export default async function handler(req, res) {
    const categories = req.query.productId;
    if (req.method === 'GET') {
        try {
            const categories = await query('SELECT * FROM categories WHERE id=?;', [productId]);
            res.status(200).json(categories[0]);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else if (req.method === 'PUT') {
        res.status(200).json({ message: ' Toode muudetud' });
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'Toode kustutatud' });
    } else {
        // HTTP status 405 METHOD_NOT_SUPPORTED
        res.status(405).end();
    }
}