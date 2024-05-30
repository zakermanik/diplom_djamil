<script setup lang="ts">
import { useSurveyStore } from '@/entities/survey/store'

const surveyStore = useSurveyStore()
const previousQuestionChain = ref<number[]>([])

async function handleGoToQuestion(questionID?: number) {
  if (!questionID)
    return
  if (surveyStore.currentQuestion.id)
    previousQuestionChain.value.push(surveyStore.currentQuestion.id)
  await surveyStore.changeCurrentQuestion(questionID)
}

async function handleReturnToPrevious() {
  if (!previousQuestionChain.value.length) {
    surveyStore.resetCurrentQuestion()
    return
  }

  await surveyStore.changeCurrentQuestion(previousQuestionChain.value[previousQuestionChain.value.length - 1])
  previousQuestionChain.value.pop()
}
async function handleReturnToMain() {
  surveyStore.resetCurrentQuestion()
  previousQuestionChain.value = []
}
</script>

<template>
  <div class="w-full max-w-3xl rounded bg-white shadow p-5">
    <ElScrollbar height="815px" wrap-class="pr-5">
      <div class="flex flex-col items-start gap-2.5">
        <div class="flex items-center gap-5">
          <ElButton text class="cursor-pointer text-base font-medium" @click="handleReturnToMain">
            Все вопросы
          </ElButton>
          <p v-if="previousQuestionChain.length" class="cursor-pointer" @click="handleReturnToPrevious">
            Назад
          </p>
        </div>
        <div v-if="!surveyStore.currentQuestion.id" class="flex flex-col items-start">
          <template v-for="questions in surveyStore.questions" :key="questions.id">
            <ElButton text class="cursor-pointer" @click="handleGoToQuestion(questions.id)">
              {{ questions.text }}
            </ElButton>
          </template>
        </div>
        <div>
          <div>
            <p class="text-base font-medium">
              {{ surveyStore.currentQuestion.text }}
            </p>
          </div>
          <div class="flex flex-col items-start">
            <template v-for="answer in surveyStore.currentQuestion.answers" :key="answer.id">
              <ElButton v-if="answer.nextQuestion" text class="cursor-pointer" @click="handleGoToQuestion(answer.nextQuestion?.id)">
                <p>
                  {{ answer.nextQuestion?.text }}
                </p>
              </ElButton>
            </template>
          </div>
        </div>
      </div>
    </ElScrollbar>
  </div>
</template>
