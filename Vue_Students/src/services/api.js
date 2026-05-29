const BASE_URL = "http://localhost:3000"

export async function getStudents() {
  const res = await fetch(`${BASE_URL}/students`)
  return res.json()
}