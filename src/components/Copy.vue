<template>
  <div class="copy-cont">
    <img @click="copyText(textToCopy)" class="copy-image" :src="`${STORAGE_URL}/utils/copy.webp`" />
    <p v-if="isCopied" class="copy-text">Copiado!</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  textToCopy: String,
})

//const textCopied = ref('')
const isCopied = ref(false)

const STORAGE_URL = import.meta.env.VITE_STORAGE_URL

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Error al copiar el texto', err)
  }
}
</script>

<style lang="scss" scoped>
.copy-cont {
  position: relative;
  .copy-text {
    font-size: 12px;
    position: absolute;
    padding: 4px;
    background: rgba(10, 10, 10, 0.4);
    font-weight: 600;
    color: white;
    border-radius: 4px;
    transform: translateX(-50%);
  }
  .copy-image {
    cursor: pointer;
  }
}
</style>
