"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "@/app/auth/client";
import { Toast } from "@/components/ui/toast";

const SignupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be less than 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupSchemaType = z.infer<typeof SignupSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [toastState, setToastState] = useState<{
    open: boolean;
    title: string;
    description: string;
  }>({ open: false, title: "", description: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupSchemaType) => {
    setIsLoading(true);
    const { error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    setIsLoading(false);

    if (error) {
      setToastState({
        open: true,
        title: "Error",
        description: typeof error.message === 'string' ? error.message : "An unknown error occurred.",
      });
      return;
    }

    setToastState({
      open: true,
      title: "Success",
      description: "Account created successfully! Please sign in.",
    });
    router.push("/login");
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
          <CardTitle className="text-xl font-mono">Create an Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  disabled={isLoading}
                  {...register("name")}
                  className={cn(errors.name && "border-destructive")}
                />
                {errors.name && (
                  <span className="text-sm text-destructive font-mono">
                    {errors.name.message}
                  </span>
                )}
              </div>
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
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  disabled={isLoading}
                  {...register("confirmPassword")}
                  className={cn(errors.confirmPassword && "border-destructive")}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-destructive font-mono">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Sign Up"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        By signing up, you agree to our{" "}
        <Link href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
