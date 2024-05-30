<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps<{
  name: string
  id: number | string
}>()
const router = useRouter()

function handleGoTo() {
  router.push({ name: props.name, params: { id: props.id } })
}
</script>

<template>
  <ElIcon
    :size="24"
    color="#606266"
    class="cursor-pointer"
    @click="handleGoTo"
  >
    <ArrowRight />
  </ElIcon>
</template>
