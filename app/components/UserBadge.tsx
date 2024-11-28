const UserBadge = ({ user }: { user: { id: string; name: string } }) => (
  <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full">
    {user.name}
  </div>
)

export default UserBadge
