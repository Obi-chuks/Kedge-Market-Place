import { Link } from "react-router";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import {
  ShoppingBagIcon,
  ShoppingCart,
  PlusIcon,
  UserIcon,
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="navbar bg-base-300">
      <div className="max-w-5xl mx-auto w-full px-4 flex justify-between items-center">
        {/* LOGO - LEFT SIDE */}
        {/* option 1 */}
        {/* <div className="flex-1"> */}
        {/* <Link to="/" className="btn btn-ghost gap-2"> */}
        {/* The Icon */}
        {/* <ShoppingCart className="size-6 text-primary" /> */}
        {/* <span className="text-lg font-bold font-mono uppercase tracking-wider"> */}
        {/* KEDGE Market Place */}
        {/* </span> */}
        {/* </Link> */}
        {/* </div> */}
        {/* option 2 */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case gap-2.5">
            <div className="bg-primary text-primary-content p-1.5 rounded-md">
              <ShoppingCart className="size-5" strokeWidth={2.5} />
            </div>

            <span className="text-lg font-bold tracking-tight text-base-content">
              Kedge<span className="text-primary">Market</span>
            </span>
          </Link>
        </div>
        {/* ACTIONS - RIGHT SIDE */}
        <div className="flex gap-2 items-center">
          <ThemeSelector />
          {isSignedIn ? (
            <>
              <Link to="/create" className="btn btn-primary btn-sm gap-1">
                <PlusIcon className="size-4" />
                <span className="hidden sm:inline">New Product</span>
              </Link>
              <Link to="/profile" className="btn btn-ghost btn-sm gap-1">
                <UserIcon className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
