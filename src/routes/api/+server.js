import { json } from '@sveltejs/kit'

export async function GET() {
  return new Response(JSON.stringify({ hello: 'world' }), { status: 200 })
}
