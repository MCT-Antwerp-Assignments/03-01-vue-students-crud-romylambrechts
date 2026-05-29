const API_URL = 'http://localhost:3000/students'

export const getStudents = async () => {
  const res = await fetch(API_URL)
  return await res.json()
}

export const getStudent = async (id) => {
  const res = await fetch(`${API_URL}/${id}`)
  return await res.json()
}

export const createStudent = async (student) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  })
}

export const updateStudent = async (id, student) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  })
}

export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
}