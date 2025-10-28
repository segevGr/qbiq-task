import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = ref(
    localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : prefersDark,
  )

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  watchEffect(() => {
    const html = document.documentElement
    if (isDark.value) html.classList.add('dark')
    else html.classList.remove('dark')
  })

  return { isDark, toggleTheme }
})
