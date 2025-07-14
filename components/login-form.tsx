"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const SignupSchema = z.object({
  email: z.string().email("You need top enter a valid email"),
  password: z.string().min(3, "enter a valid password more that 3 ").max(20, "enter a passowrd less that 20 char")
})

type SignupSchemaType = z.infer< typeof SignupSchema>; 

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });


const onSubmit = (data: SignupSchemaType) => console.log(data);

 return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
           Together lets fix the future of seo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-sm text-destructive font-mono">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    {...register("password")} 
                  />
                  {errors.password && (
                    <span className="text-sm text-destructive font-mono">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
