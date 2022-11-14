import { json } from '@sveltejs/kit'

export async function GET() {
  return json(JSON.stringify({ hello: 'world' }), { status: 200 })
}
