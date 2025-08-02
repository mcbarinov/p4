import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router"
import { useAuth } from "../auth"

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AuthLayout,
})

function AuthLayout() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.logout()
    await navigate({ to: "/login", search: { redirect: undefined } })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Forums App</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, {auth.user}</span>
            <Link to="/forums" className="hover:text-gray-300">
              Forums
            </Link>
            <button type="button" onClick={() => void handleLogout()} className="hover:text-gray-300">
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto p-4">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm text-gray-400">© 2024 Forums App</p>
      </footer>
    </div>
  )
}
