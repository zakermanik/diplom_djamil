<script setup lang='ts'>
interface Props {
  color: string
  size: string
}
const props = defineProps<Props>()

function defineDropShadowColor(color: string = 'red') {
  switch (color) {
    case 'green':
      return 'drop-shadow-[0_0_8px_rgba(103,194,58,0.7)] bg-system_green'
    case 'orange':
      return 'drop-shadow-[0_0_8px_rgba(100,64,11,0.7)] bg-system_orange'
    case 'red':
      return 'drop-shadow-[0_0_8px_rgba(245,108,108,0.7)] bg-system_red'
    case 'blue':
      return 'drop-shadow-[0_0_8px_rgba(26,92,255,0.7)] bg-system_ocean'
  }
}
</script>

<template>
  <div class="relative" :style="size">
    <div class="z-1000 absolute -left-1/2 -top-1/2 flex size-[20px] items-center justify-center">
      <div data-testid="status-circle" class="rounded-full" :style="size" :class="defineDropShadowColor(props.color)" />
    </div>
  </div>
</template>
