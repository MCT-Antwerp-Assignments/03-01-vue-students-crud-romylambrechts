<script setup>
defineProps({
  students: Array
})
</script>

<template>
  <div class="bg-white shadow-md rounded-lg overflow-auto mb-8">

    <table class="min-w-full divide-y divide-gray-200">

      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Age</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Email</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Major</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Profile</th>
          <th class="px-6 py-3 text-left text-xs font-medium">Actions</th>
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

          <td class="px-6 py-4 flex gap-2">

            <router-link :to="`/student/${student.id}`" class="text-blue-600">
              View
            </router-link>

            <router-link :to="`/student/${student.id}/edit`" class="text-yellow-600">
              Edit
            </router-link>

            <button
              @click="$emit('delete', student)"
              class="text-red-600"
            >
              Delete
            </button>

          </td>

        </tr>
      </tbody>

    </table>

  </div>
</template>