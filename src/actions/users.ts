"use server"
import { handleError } from "@/lib/utils";
import { createClient } from "@/auth/supabase/server"
import { prisma } from "@/db/prisma";

export const loginAction = async (email : string , password :string) =>{
    try{
        const {auth} = await createClient();
        console.log(auth);
        const {error} = await auth.signInWithPassword({
            email , 
            password
        })
        if(error) throw error;

        return { errorMessage : null};
    }
    catch(error){
        return handleError(error);
    }
}

export const signUpAction = async (email : string , password :string) =>{
    try{
        console.log("signupreached");
        const {auth} = await createClient();
        
        const {data , error} = await auth.signUp({
            email , 
            password
        })
        if(error) throw error;

        const userId = data.user?.id;
        if(!userId){
            throw new Error("Error Signing Up");
        }

        await prisma.user.create({
            data:{
                id:userId , 
                email, 
            }
        })

        return { errorMessage : null};
    }
    catch(error){
        return handleError(error);
    }
}


