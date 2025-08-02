import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/forums_/$forumId")({
  component: ForumPosts,
})

function ForumPosts() {
  const { forumId } = Route.useParams()

  const forumNames: Record<string, string> = {
    "1": "General Discussion",
    "2": "Tech Support",
    "3": "Feature Requests",
    "4": "Bug Reports",
    "5": "Off-Topic",
  }

  const posts = [
    { id: "1", title: "Welcome to the forum!", author: "admin", replies: 5 },
    { id: "2", title: "How to get started?", author: "user123", replies: 3 },
    { id: "3", title: "Share your thoughts", author: "alice", replies: 12 },
    { id: "4", title: "Community guidelines", author: "moderator", replies: 8 },
  ]

  return (
    <div>
      <div className="mb-4">
        <Link to="/forums" className="text-blue-600 hover:underline">
          ← Back to forums
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4">{forumNames[forumId] || `Forum ${forumId}`}</h2>

      <div className="space-y-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            to="/forums/$forumId/$postId"
            params={{ forumId, postId: post.id }}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <div className="text-sm text-gray-600 mt-1">
              by {post.author} • {post.replies} replies
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
