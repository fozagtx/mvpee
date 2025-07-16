"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/auth/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Toast } from "@/components/ui/toast";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [toastState, setToastState] = useState<{
    open: boolean;
    title: string;
    description: string | undefined;
  }>({ open: false, title: "", description: undefined });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setIsLoading(true);
    
    try {
      // Sign in the user
      const { error: signInError } = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (signInError) {
        setToastState({
          open: true,
          title: "Error",
          description: "Invalid credentials",
        });
        return;
      }

      setToastState({
        open: true,
        title: "Success",
        description: "Login successful!",
      });
      router.push("/");
    } catch (error) {
      setToastState({
        open: true,
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Toast
        open={toastState.open}
        onOpenChange={(open) => setToastState({ ...toastState, open })}
        title={toastState.title}
        description={toastState.description}
      />
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-mono">Welcome Back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  disabled={isLoading}
                  {...register("email")}
                  className={cn(errors.email && "border-destructive")}
                />
                {errors.email && (
                  <span className="text-sm text-destructive font-mono">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  disabled={isLoading}
                  {...register("password")}
                  className={cn(errors.password && "border-destructive")}
                />
                {errors.password && (
                  <span className="text-sm text-destructive font-mono">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full border bg-black text-white" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4"></CardFooter>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
