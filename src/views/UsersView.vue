<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useFavoritesStore } from '../stores/favorites'

const users = ref([])
const favoritesStore = useFavoritesStore()

onMounted(async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = data
})
</script>

<template>
  <div class="p-4 table">
    <h2 class="mb-3 table__heading">Пользователи</h2>

    <PvDataTable
      :value="users"
      dataKey="id"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20]"
      tableStyle="min-width: 60rem"
    >
      <PvColumn field="id" header="ID" />
      <PvColumn field="name" header="Name" />
      <PvColumn field="email" header="Email" />

      <PvColumn header="Favorite" bodyClass="text-center">
        <template #body="{ data }">
          <PvButton
            :icon="favoritesStore.isFavorite(data.id) ? 'pi pi-star-fill' : 'pi pi-star'"
            :severity="favoritesStore.isFavorite(data.id) ? 'success' : 'secondary'"
            @click="favoritesStore.toggleFavorite(data)"
            rounded
          />
        </template>
      </PvColumn>
    </PvDataTable>
  </div>
</template>

<style>
.table {
  background-color: var(--p-menubar-background);
  height: 100vh;
}

.table__heading {
  color: rgb(203, 203, 203);
  font-size: 24px;
  font-weight: 800;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
  color: var(--p-menubar-item-focus-color);
  background: var(--p-menubar-item-focus-background);
}

.p-menubar-item {
  padding: 10px !important;
}
</style>
