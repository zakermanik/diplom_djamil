<script setup lang="ts">
import { formatDateMoment } from '@/shared/lib'

const range = ref<[string, string]>(['', ''])
const from = defineModel('from', { required: true, default: '' }) as Ref<string>
const to = defineModel('to', { required: true, default: '' }) as Ref<string>

function handleChangeRange(dates: [string, string]) {
  if (!dates) {
    from.value = ''
    to.value = ''
  }
  else {
    const [_from, _to] = dates
    from.value = _from
    to.value = _to
  }
}

function updateRange(from: string, to: string) {
  if (from && to)
    range.value = [from, to]
  else range.value = ['', '']
}

watchEffect(() => {
  updateRange(from.value, to.value)
})

onMounted(() => {
  updateRange(from.value, to.value)
})
</script>

<template>
  <ElTimePicker
    v-model="range"
    format="HH:mm"
    value-format="HH:mm"
    is-range
    range-separator="до"
    :start-placeholder="`${formatDateMoment(new Date(), 'HH:mm')}`"
    :end-placeholder="`${formatDateMoment(new Date(), 'HH:mm')}`"
    @change="handleChangeRange"
  />
</template>
