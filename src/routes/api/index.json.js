import { json } from '@sveltejs/kit'

export async function GET() {
  // return json(['hello world'], { status: 200 })
  return {
    body: {
      data: JSON.stringify({ hello: 'world' }),
    },
  }
}
