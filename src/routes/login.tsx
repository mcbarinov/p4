import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="border p-4">Centered Box</div>
    </div>
  )
}
