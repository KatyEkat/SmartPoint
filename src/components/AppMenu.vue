<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'

const route = useRoute()

const items = ref([
  { label: 'Пользователи', icon: 'pi pi-users', to: '/users' },
  { label: 'Избранное', icon: 'pi pi-star', to: '/favorites' },
])
</script>

<template>
  <Menubar :model="items" class="p-3 users">
    <template #item="{ item }">
      <router-link
        :to="item.to"
        class="router-link"
        :class="{ 'text-primary': route.path === item.to }"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </router-link>
    </template>
  </Menubar>
</template>

<style>
.text-primary {
  color: var(--p-primary-color, #3b82f6);
}

.users {
  border-radius: 0 !important;
  border: unset !important;
}

.router-link {
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
}

.p-menubar-root-list {
  align-items: center;
  flex-wrap: wrap;
  gap: 25px !important;
}

.p-menubar {
  justify-content: center;
}
</style>
