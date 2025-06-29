import Logo from "./Logo";
import Profile from "./Profile";
export default function Navbar() {
    return (
       <div className="p-4 w-screen flex items-stretch rounded-b-xl">
           <Logo/>
           <Profile/>
       </div>
    )
}