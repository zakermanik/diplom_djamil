<script setup lang="ts">
import { AnswerDataToResponse, QuestionDataDTO } from '@/entities/survey/dto'
import { useSurveyStore } from '@/entities/survey/store'
import type { QuestionData } from '@/entities/survey/types'
import { messageDeleteAnswer } from '@/features/survey'
import { notifyService } from '@/shared/services/notify/notify'
import type { Question } from '@/shared/types/survey'

interface Props {
  question: Question
}

const props = defineProps<Props>()
const { question } = toRefs(props)

const surveyStore = useSurveyStore()

const form = ref({} as QuestionData)

async function handleUpdateQuestion() {
  form.value.answers.map((answer) => {
    switch (answer.reasonOrQuestion) {
      case ('reason'):
        delete answer.nextQuestion
        break
      case ('nextQuestion'):
        delete answer.reason
        break
    }
    return answer
  })

  await surveyStore.update(question.value.id, new QuestionDataDTO(form.value))
  if (surveyStore.error) {
    notifyService.error('Ошибка в редактировании вопроса')
    return
  }
  notifyService.success('Вопрос обновлён')
}

// позже уберу any, и так
async function handleRemoveAnswer(answer: any) {
  messageDeleteAnswer(answer, () => surveyStore.removeAnswer(answer))
}
watch(() => question.value, () => {
  console.log(question.value)
  form.value = {
    text: question.value.text ?? '',
    answers: question.value.answers ? question.value.answers.map(a => new AnswerDataToResponse(a)) : [],
    isFirst: false,
  }
})
</script>

<template>
  <div class="bg-white w-full max-w-3xl rounded p-5 shadow">
    <ElScrollbar height="815px" wrap-class="pr-5">
      <ElForm v-if="question.id" label-position="top">
        <div class="flex flex-col gap-10">
          <ElFormItem>
            <template #label>
              <span class="text-base font-medium">Вопрос</span>
            </template>
            <ElInput v-model="form.text" class="w-full" />
          </ElFormItem>
          <div class="flex flex-col gap-2">
            <div v-for="answer in form.answers" :key="answer.id" class="flex flex-col">
              <ElFormItem label="Ответ">
                <div class="flex items-center gap-2.5">
                  <ElInput v-model="answer.value" class="w-full" />
                </div>
                <ElIcon size="20px" class="cursor-pointer" @click="handleRemoveAnswer(answer)">
                  <Close />
                </ElIcon>
              </ElFormItem>
            </div>
          </div>
        </div>
        <div class="mt-5 flex gap-2.5">
          <ElButton type="warning" @click="handleUpdateQuestion">
            <p class="font-normal">
              Сохранить
            </p>
          </ElButton>
          <ElButton>
            <p class="font-normal">
              Добавить ответ
            </p>
          </ElButton>
        </div>
      </ElForm>
    </ElScrollbar>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-radio) {
  margin-right: 0px;
  }
</style>
