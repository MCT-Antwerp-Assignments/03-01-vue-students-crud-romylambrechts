<script setup>
import { ref, onMounted } from 'vue'
import { getStudents } from './services/api'
import { getStudents, deleteStudent as apiDeleteStudent} from './services/api'

import StudentTable from './components/StudentTable.vue'
import StudentDetails from './components/StudentDetails.vue'
import StudentForm from './components/StudentForm.vue'


const students = ref([])
const selectedStudent = ref(null)
const isEditing = ref(false)

const loadStudents = async () => {
  students.value = await getStudents()
}

onMounted(() => {
  loadStudents()
})

const viewStudent = (s) => selectedStudent.value = s
const editStudent = (s) => {
  selectedStudent.value = s
  isEditing.value = true
}

const deleteStudent = async (s) => {
  await apiDeleteStudent(s.id)
  await loadStudents()
}

const submitStudent = (data) => {
  console.log("submit", data)
}
</script>

<template>
  <div class="max-w-7xl mx-auto p-6">

    <h1 class="text-3xl font-bold mb-6">Students</h1>

    <StudentTable :students="students" @view="viewStudent" @edit="editStudent" @delete="deleteStudent" />

    <StudentDetails :student="selectedStudent" />

    <StudentForm :student="selectedStudent" :isEditing="isEditing" @submit="submitStudent"
      @cancel="isEditing = false" />

  </div>
</template>