import {SignOutButton} from '@clerk/nextjs'
import { toast } from "sonner"

const StoreSignOut_43 = () => {
    const handleSignOut = () => {
        toast("You have been signed out.");
    };

    return <SignOutButton redirectUrl="/store_43" >
        <button className="w-full text-left" onClick={handleSignOut}>
            Logout
        </button>
    </SignOutButton>
}

export default StoreSignOut_43
