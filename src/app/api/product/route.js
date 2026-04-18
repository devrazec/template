import db from '../../lib/db/connection.js';

export const runtime = 'nodejs';

export async function GET() {
  const product = db.prepare(`SELECT * FROM product ORDER BY name`).all();

  return Response.json(product);
}
