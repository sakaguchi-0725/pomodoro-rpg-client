import { inject, provide, Ref } from "vue"
import { Account } from "../model"

const key = "account"

export const useAccount = () => {
  const provideAccount = (account: Ref<Account | undefined>) => {
    provide(key, account)
  }

  const injectAccount = (): Account | undefined => {
    return inject(key)
  }

  return {
    provideAccount,
    injectAccount,
  }
}