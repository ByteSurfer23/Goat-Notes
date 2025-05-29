"use client" // use whenever react hooks are used
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'


const LogoutButton = () => {
    const [loading , setLoading] = useState(false);
    const router = useRouter();
    const handleLogOut = async() =>{
          console.log("Logging Out");
          setLoading(true);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          const error = null ; 

          if(!error){
            setLoading(false);
            toast("Logout successful");
            router.push("/");
          }
          else{
            toast("Unkown error occured");
          }
          setLoading(false);
    };
  return (
        <Button className='w-24'
        variant="outline"
        onClick={handleLogOut}>
            {
                loading ? <Loader2 className='animate-spin'/> : "Log Out"
            }
        </Button>
  )
}

export default LogoutButton