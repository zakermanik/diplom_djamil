<script setup lang="ts">
import SurveyTab from './SurveyTab.vue'
import SurveyHeader from './SurveyHeader.vue'
import SurveyEditForm from './SurveyEditForm.vue'
import { useSurveyStore } from '@/entities/survey/store'

const surveyStore = useSurveyStore()
function handleOpenCreateForm() {

}

onMounted(async () => {
  await surveyStore.getAll()
})
</script>

<template>
  <div class="flex h-full flex-col gap-2.5 font-normal">
    <SurveyHeader :disabled-create-button="!!surveyStore.questions.length" @open-create-form="handleOpenCreateForm" />
    <div class="flex gap-2.5">
      <SurveyEditForm :question="surveyStore.currentQuestion" />
      <SurveyTab />
    </div>
  </div>
</template>
