import { Input } from "./components/Input";

export default function Home() {
  return (
    //if not loggedin, show Input. else show logged in page / component
    <div className="">
      <main className="">
          <Input inputName="email" inputPlaceholder="you@example.com"  inputType="email"  />
      </main>
    </div>
  );
}
