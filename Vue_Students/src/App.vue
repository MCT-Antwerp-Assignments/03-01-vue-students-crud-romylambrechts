<script setup>
import { ref } from 'vue'

import StudentTable from './components/StudentTable.vue'
import StudentDetails from './components/StudentDetails.vue'
import StudentForm from './components/StudentForm.vue'

const students = ref([
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    age: 20,
    email: "john@example.com",
    major: "MCT",
    profile: "Web"
  }
])

const selectedStudent = ref(null)
const isEditing = ref(false)

const viewStudent = (s) => selectedStudent.value = s
const editStudent = (s) => {
  selectedStudent.value = s
  isEditing.value = true
}
const deleteStudent = (s) => {
  students.value = students.value.filter(st => st.id !== s.id)
}

const submitStudent = (data) => {
  console.log("submit", data)
}
</script>

<template>
  <div class="container mx-auto p-6">

    <h1 class="text-3xl font-bold mb-6">Students</h1>

    <StudentTable
      :students="students"
      @view="viewStudent"
      @edit="editStudent"
      @delete="deleteStudent"
    />

    <StudentDetails :student="selectedStudent" />

    <StudentForm
      :student="selectedStudent"
      :isEditing="isEditing"
      @submit="submitStudent"
      @cancel="isEditing = false"
    />

  </div>
</template>