import { Input } from "./components/Input";
import { Image } from "./components/Image";
import {Button} from "./components/Button";

export default function Home() {
  return (
    //if not loggedin, show Input. else show logged in page / component 
    <>

        <body className="bg-white max-w-screen max-h-screen grid place-content-center">
          <div className= "bg-iron-200 grid place-content-center rounded-sm">
            <Image className="w-80" imageSrc="./marvelshelflogo.webp" />
            <div className="p-2 place-content-evenly">
              <Input className="m-2 pt-2 pb-2" inputName="email" inputPlaceholder="you@example.com"  inputType="email" />
              <Input  className="m-2 pt-2 pb-2" inputName="password" inputPlaceholder="Password"  inputType="password" />  
              <Button buttonText="Login" className="m-2 place-content-center" format="other"/>
              <Button buttonText="Sign Up" className="m-2 place-content-center" />
            </div>

            
            {/* 
            card (same color, shadow and borders make it pop out)
              inputs
              log in button
              sign up button
            card
            */}
          </div> 
        </body>

    </>
  );
}
