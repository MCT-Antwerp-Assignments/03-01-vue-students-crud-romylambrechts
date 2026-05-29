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

const viewStudent = (student) => {
  selectedStudent.value = student
  isEditing.value = false
}

const editStudent = (student) => {
  selectedStudent.value = student
  isEditing.value = true
}

const deleteStudent = (student) => {
  students.value = students.value.filter(s => s.id !== student.id)

  if (selectedStudent.value?.id === student.id) {
    selectedStudent.value = null
    isEditing.value = false
  }
}

const cancelForm = () => {
  selectedStudent.value = null
  isEditing.value = false
}

const submitStudent = (data) => {
  // UPDATE
  if (isEditing.value && selectedStudent.value) {
    const index = students.value.findIndex(
      s => s.id === selectedStudent.value.id
    )

    if (index !== -1) {
      students.value[index] = {
        ...students.value[index],
        ...data
      }
    }

  } 
  // CREATE
  else {
    const newStudent = {
      id: Date.now(),
      ...data
    }

    students.value.push(newStudent)
  }

  cancelForm()
}
</script>

<template>
  <div class="max-w-7xl mx-auto p-6">

    <h1 class="text-3xl font-bold mb-6">Students</h1>

    <StudentTable
      :students="students"
      @view="viewStudent"
      @edit="editStudent"
      @delete="deleteStudent"
    />

    <StudentDetails
      v-if="selectedStudent && !isEditing"
      :student="selectedStudent"
    />

    <StudentForm
      :student="selectedStudent"
      :isEditing="isEditing"
      @submit="submitStudent"
      @cancel="cancelForm"
    />

  </div>
</template>