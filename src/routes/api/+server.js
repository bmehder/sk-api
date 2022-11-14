import { json } from '@sveltejs/kit'

export async function GET() {
  return new Response('Hello World', { status: 200 })
}
