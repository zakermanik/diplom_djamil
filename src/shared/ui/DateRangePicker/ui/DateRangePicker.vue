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
  <ElDatePicker
    v-model="range"
    format="DD.MM.YYYY"
    value-format="YYYY-MM-DD"
    type="daterange"
    range-separator="до"
    :start-placeholder="`${formatDateMoment(new Date(), 'DD.MM.YYYY')}`"
    :end-placeholder="`${formatDateMoment(new Date(), 'DD.MM.YYYY')}`"
    class="!w-full"
    @change="handleChangeRange"
  />
</template>
