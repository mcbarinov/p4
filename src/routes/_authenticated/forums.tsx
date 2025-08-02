import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/forums")({
  component: ForumsList,
})

function ForumsList() {
  const forums = [
    { id: "1", name: "General Discussion" },
    { id: "2", name: "Tech Support" },
    { id: "3", name: "Feature Requests" },
    { id: "4", name: "Bug Reports" },
    { id: "5", name: "Off-Topic" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Forums</h2>
      <div className="space-y-2">
        {forums.map((forum) => (
          <Link
            key={forum.id}
            to="/forums/$forumId"
            params={{ forumId: forum.id }}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">{forum.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
