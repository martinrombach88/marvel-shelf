interface LoginStatusProps {
  userName?: string
}
/*
component syntax: using react fc
Using React.FC provides built-in type support for children and enforces the return type of JSX.Element or null. 
However, React.FC is optional, as some teams prefer to avoid it due to its inclusion of children by default.
*/
const LoginStatus: React.FC<LoginStatusProps> = ({ userName = "" }) => {
  let component = userName ? (
    <div className="w-80">
      <p className="text-sm">Logged in as {userName}</p>
    </div>
  ) : (
    <div className="w-80">
      <p className="text-sm">
        Log in to continue. First time? Click sign up and get searching!
      </p>
    </div>
  )
  return component
}

export default LoginStatus
