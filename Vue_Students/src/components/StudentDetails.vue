<script setup>
defineProps({
  student: Object
})
</script>

<template>
  <div v-if="student" class="bg-white shadow-md rounded-lg p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">Student Details</h2>

    <p><b>Name:</b> {{ student.firstname }} {{ student.lastname }}</p>
    <p><b>Age:</b> {{ student.age }}</p>
    <p><b>Email:</b> {{ student.email }}</p>
    <p><b>Major:</b> {{ student.major }}</p>
    <p><b>Profile:</b> {{ student.profile }}</p>
    <p><b>ID:</b> {{ student.id }}</p>
  </div>
</template>