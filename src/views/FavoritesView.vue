<script setup>
import { useFavoritesStore } from '../stores/favorites'
import PvButton from 'primevue/button'

const favoritesStore = useFavoritesStore()
</script>

<template>
  <div class="p-4 favorite__block">
    <h2 class="mb-4 favorite">Избранное</h2>

    <div v-if="favoritesStore.favorites.length === 0" class="fav-text">
      Нет пользователей в избранном
    </div>

    <div class="grid gap-3">
      <div
        v-for="user in favoritesStore.favorites"
        :key="user.id"
        class="p-3 border-round surface-card shadow-1"
      >
        <h3 class="mb-2 info">{{ user.name }}</h3>

        <div><strong>Email:</strong> {{ user.email }}</div>
        <div><strong>Phone:</strong> {{ user.phone }}</div>
        <div><strong>Street:</strong> {{ user.address.street }}</div>
        <div><strong>City:</strong> {{ user.address.city }}</div>
        <div><strong>Company:</strong> {{ user.company.name }}</div>
        <div><strong>Website:</strong> {{ user.website }}</div>

        <div class="mt-3 text-right">
          <PvButton
            icon="pi pi-trash"
            severity="danger"
            rounded
            @click="favoritesStore.toggleFavorite(user)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fav-text {
  font-family: 'inter';
  font-weight: 500;
  font-size: 16px;
}

.favorite {
  color: rgb(203, 203, 203);
  font-size: 24px;
  font-weight: 800;
}

.favorite__block {
  background: var(--p-menubar-background) !important;
  height: 100vh;
}

.surface-card {
  background-color: #4a4a4a !important;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
  color: var(--p-menubar-item-focus-color);
  background: var(--p-menubar-item-focus-background);
}

.p-menubar-item-content {
  padding: 10px !important;
}
</style>
