<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  student: Object,
  isEditing: Boolean
})

const emit = defineEmits(['submit', 'cancel'])

const formData = reactive({
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  profile: ''
})

watch(() => props.student, (newVal) => {
  if (newVal) {
    formData.firstname = newVal.firstname
    formData.lastname = newVal.lastname
    formData.age = newVal.age
    formData.email = newVal.email
    formData.profile = newVal.profile
  }
})

const submit = () => {
  emit('submit', { ...formData })
}
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">
      {{ isEditing ? 'Edit Student' : 'Add Student' }}
    </h2>

    <form @submit.prevent="submit" class="space-y-3">

      <input v-model="formData.firstname" placeholder="First name" class="input" />
      <input v-model="formData.lastname" placeholder="Last name" class="input" />
      <input v-model="formData.age" type="number" placeholder="Age" class="input" />
      <input v-model="formData.email" type="email" placeholder="Email" class="input" />

      <select v-model="formData.profile" class="input">
        <option disabled value="">Select profile</option>
        <option>Web</option>
        <option>3D</option>
        <option>AV</option>
      </select>

      <div class="flex gap-2">
        <button type="submit" class="bg-indigo-600 text-white px-4 py-2">
          Save
        </button>

        <button type="button" @click="$emit('cancel')">
          Cancel
        </button>
      </div>

    </form>
  </div>
</template>