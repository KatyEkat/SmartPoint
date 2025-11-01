import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const saved = localStorage.getItem('favorites')
  if (saved) {
    favorites.value = JSON.parse(saved)
  }

  watch(favorites, (val) => localStorage.setItem('favorites', JSON.stringify(val)), { deep: true })

  watch(favorites, (v) => {
    console.log('⭐ FAVORITES UPDATED:', v)
  })

  const toggleFavorite = (user) => {
    const index = favorites.value.findIndex((u) => u.id === user.id)

    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(user)
    }
  }

  const isFavorite = (id) => favorites.value.some((u) => u.id === id)

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
})
