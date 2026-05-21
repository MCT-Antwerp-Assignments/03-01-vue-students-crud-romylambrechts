<script setup>
defineProps({
  students: Array
})

const emit = defineEmits(['view', 'edit', 'delete'])
</script>

<template>
  <div class="bg-white shadow-md rounded-lg overflow-auto mb-8">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Major</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td class="px-6 py-4">{{ student.id }}</td>

          <td class="px-6 py-4">
            {{ student.firstname }} {{ student.lastname }}
          </td>

          <td class="px-6 py-4">{{ student.age }}</td>
          <td class="px-6 py-4">{{ student.email }}</td>
          <td class="px-6 py-4">{{ student.major }}</td>
          <td class="px-6 py-4">{{ student.profile }}</td>

          <td class="px-6 py-4">
            <button @click="$emit('view', student)" class="text-indigo-600">View</button>
            <button @click="$emit('edit', student)" class="text-yellow-600 ml-2">Edit</button>
            <button @click="$emit('delete', student)" class="text-red-600 ml-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>