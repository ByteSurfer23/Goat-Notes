"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
//import { toast } from "./ui/sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "register";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const router = useRouter();

  const[isPending, startTransition] = useTransition();
  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted");
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>

                <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            disabled={isPending}
          />
        </div>

        
      </CardContent>
      <CardFooter className=" mt-4 flex flex-col gap-6">
        <Button className="w-full">
            {
                isPending ? (<Loader2 className="animate-spin"/>) 
                : 
                isLoginForm ? (
                    "Login"
                ) : (
                    "Sign Up"
                )}
        </Button>
        <p className="text-xs">
            {
                isLoginForm ? "Dont have an account yet ?" : "Already have an account"

            }
            <Link className={`text-blue-500 undeline ${isPending ? "pointer-events-none opacity-50" : ""}`} href={isLoginForm ? "/sign-up" : "/login"}>
            {isLoginForm ? "Sign Up" : "Login"}
            </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
