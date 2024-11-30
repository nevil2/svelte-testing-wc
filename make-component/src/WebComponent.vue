<template>

<h2>Test Component</h2>

type of image = {{ typeof image }} (should be object)

<img v-if="image" :src="image" alt="image" />

</template>

<script setup>

import { watch } from 'vue'

const props = defineProps({
  image: File,
  getFile: Boolean,
})

const emit = defineEmits(['change'])

watch (() => props.image, (current) => {
  if (current) {
    console.log('image', typeof current, current)
  }
})

watch (() => props.getFile, (current) => {
  if (current) {
    emit('change', props.image)
  }
})

</script>