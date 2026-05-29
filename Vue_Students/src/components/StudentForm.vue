<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createStudent, updateStudent, getStudent } from '../services/studentService'

const route = useRoute()
const router = useRouter()

const formData = reactive({
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  profile: ''
})

onMounted(async () => {
  if (route.params.id && route.params.id !== 'new') {
    const student = await getStudent(route.params.id)

    Object.assign(formData, student)
  }
})

const submit = async () => {
  if (route.params.id && route.params.id !== 'new') {
    await updateStudent(route.params.id, formData)
  } else {
    await createStudent(formData)
  }

  router.push('/')
}
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-6">

    <h2 class="text-xl font-semibold mb-4">
      {{ route.params.id && route.params.id !== 'new' ? 'Edit Student' : 'Add Student' }}
    </h2>

    <form @submit.prevent="submit" class="space-y-3">

      <input v-model="formData.firstname" placeholder="First name" />
      <input v-model="formData.lastname" placeholder="Last name" />
      <input v-model="formData.age" type="number" placeholder="Age" />
      <input v-model="formData.email" placeholder="Email" />

      <select v-model="formData.profile">
        <option disabled value="">Select profile</option>
        <option>Web</option>
        <option>3D</option>
        <option>AV</option>
      </select>

      <div class="flex gap-2">
        <button type="submit">Save</button>
        <button type="button" @click="router.push('/')">Cancel</button>
      </div>

    </form>

  </div>
</template>