import PublicLayout from "../layouts/public-layout.vue"
import ProtectedLayout from "../layouts/protected-layout.vue"
import { LoginPage, SignupPage, ConfirmSignupPage } from "@/pages/auth"
import { WelcomePage } from "@/pages/welcome"
import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { ConfirmForgotPassword, ForgotPassword } from "@/pages/forgot-password"
import { PomodoroPage } from "@/pages/pomodoro"
import { ProfilePage } from "@/pages/profile"
import { InternalServerError } from "@/pages/errors"

const ApplyProtectedLayout = (routes: RouteRecordRaw[]) => {
  return routes.map((route) => {
    return {
      ...route,
      meta: {
        ...route.meta,
        layout: ProtectedLayout,
        isLogedin: true
      }
    }
  })
}

const routes = [
  { path: "/", component: WelcomePage, name: "welcome", meta: { layout: PublicLayout } },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/signup/confirm", name: "confirm-signup", component: ConfirmSignupPage },
  {
    path: "/forgot-password",
    children: [
      { path: "", name: "forgot-password", component: ForgotPassword },
      { path: "confirm", name: "confirm-forgot-password", component: ConfirmForgotPassword },
    ]
  },
  {
    path: "/",
    children: ApplyProtectedLayout([
      { path: "/pomodoro", component: PomodoroPage, name: "pomodoro", },
      { path: "/profile", component: ProfilePage, name: "profile" },
    ])
  },
  {
    path: "/error",
    children: [
      { path: "500", component: InternalServerError, name: "internal-server" }
    ]
  }
]

export const createAppRouter = (type: "web" | "memory") => {
  return createRouter({
    history: type === "web" ? createWebHistory() : createMemoryHistory(),
    routes: routes
  })
}