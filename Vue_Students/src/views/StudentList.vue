<script setup>
import { ref, onMounted } from 'vue'
import StudentTable from '../components/StudentTable.vue'
import { getStudents, deleteStudent } from '../services/studentService'

const students = ref([])

onMounted(async () => {
  students.value = await getStudents()
})

const remove = async (student) => {
  await deleteStudent(student.id)
  students.value = students.value.filter(s => s.id !== student.id)
}
</script>

<template>
  <div class="max-w-7xl mx-auto p-6">

    <h1 class="text-3xl font-bold mb-6">Students</h1>

    <div class="mb-4">
      <router-link to="/student/new/edit" class="text-blue-600">
        + Add Student
      </router-link>
    </div>

    <StudentTable
      :students="students"
      @delete="remove"
    />

  </div>
</template>