<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { MAIN_ROUTE_NAMES } from '@/shared/router/routes'
import { notifyService } from '@/shared/services/notify/notify'
import type { LoginData } from '@/shared/types/auth'
import { useCurrentUserStore } from '@/entities/current-user'
import { useAppConfigStore } from '@/entities/app-config'
import { checkValidForm } from '@/shared/lib/checkValidForm'
import { ROLES } from '@/shared/config/roles'

const currentUserStore = useCurrentUserStore()
const appConfigStore = useAppConfigStore()

const router = useRouter()

const formRef = ref<FormInstance>()

const form = reactive<LoginData>({
  username: '',
  password: '',
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: 'Введите логин', trigger: 'blur' }],
  password: [{ required: true, message: 'Введите пароль', trigger: 'blur' }],
})

async function submitForm() {
  const isValid = await checkValidForm(formRef.value)
  if (!isValid)
    return

  await currentUserStore.handleAuth(form)

  if (currentUserStore.error) {
    notifyService.error(currentUserStore.error.response.data.msg)
    return
  }

  await appConfigStore.getAppConfig()
  notifyService.success(`Добро пожаловать, ${currentUserStore.currentUser?.username}`)

  if ([ROLES.CALL_MANAGER, ROLES.SENIOR_DOCTOR].includes(currentUserStore.currentUser?.role ?? ''))
    router.push({ name: MAIN_ROUTE_NAMES.DEVICE_SETTINGS })
  else router.push({ name: MAIN_ROUTE_NAMES.ARM_REDIRECT })
}
</script>

<template>
  <div class="flex size-[276px] flex-col items-center gap-6">
    <p class="text-gray-800 text-[40px] font-medium">
      Дипломка
    </p>
    <ElForm
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      class="flex flex-col gap-4"
      @keyup.enter="submitForm"
    >
      <div class="flex flex-col gap-1">
        <p class="text-gray-700 text-[14px] font-normal">
          Логин
        </p>
        <ElFormItem prop="username" data-testid="username-form-item">
          <ElInput
            v-model="form.username"
            data-testid="username-form-input"
            placeholder="Введите логин"
            size="large"
            class="border-gray-300 focus:border-gray-500"
          />
        </ElFormItem>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-gray-700 text-[14px] font-normal">
          Пароль
        </p>
        <ElFormItem prop="password" data-testid="password-form-item">
          <ElInput
            v-model="form.password"
            data-testid="password-form-input"
            placeholder="Введите пароль"
            type="password"
            size="large"
            show-password
            class="border-gray-300 focus:border-gray-500"
          />
        </ElFormItem>
      </div>
      <ElButton
        class="w-full"
        type="primary"
        size="large"
        :loading="currentUserStore.isLoading"
        data-testid="submit-form-button"
        @click="submitForm"
      >
        Войти
      </ElButton>
    </ElForm>
  </div>
</template>
