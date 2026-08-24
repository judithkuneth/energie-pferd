<script setup lang="ts">
import { ref } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import BookingModal from '@/components/BookingModal.vue'

const isBookingOpen = ref(false)

function openBooking() {
  isBookingOpen.value = true
}

defineExpose({ openBooking })
</script>

<template>
  <SiteNav @book="openBooking" />
  <BookingModal :open="isBookingOpen" @close="isBookingOpen = false" />
</template>
