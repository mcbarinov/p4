import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated/forums_/$forumId_/$postId")({
  component: PostDetail,
})

function PostDetail() {
  const { forumId, postId } = Route.useParams()

  const forumNames: Record<string, string> = {
    "1": "General Discussion",
    "2": "Tech Support",
    "3": "Feature Requests",
    "4": "Bug Reports",
    "5": "Off-Topic",
  }

  const post = {
    id: postId,
    title: "Welcome to the forum!",
    author: "admin",
    content:
      "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: "2024-01-15 10:30 AM",
  }

  const comments = [
    { id: "1", author: "user1", content: "Great post! Thanks for sharing.", timestamp: "2024-01-15 11:00 AM" },
    { id: "2", author: "user2", content: "I have a question about this topic.", timestamp: "2024-01-15 11:30 AM" },
    { id: "3", author: "user3", content: "Looking forward to more posts like this!", timestamp: "2024-01-15 12:00 PM" },
  ]

  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link to="/forums" className="text-blue-600 hover:underline">
          Forums
        </Link>
        <span>/</span>
        <Link to="/forums/$forumId" params={{ forumId }} className="text-blue-600 hover:underline">
          {forumNames[forumId] || `Forum ${forumId}`}
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          by {post.author} • {post.timestamp}
        </div>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-600">{comment.timestamp}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
