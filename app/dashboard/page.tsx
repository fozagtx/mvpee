'use client';

import { useSession } from "@/app/auth/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push('/auth/login');
    }
  }, [isPending, data, router]);

  if (isPending || !data?.user) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-4 text-lg">Hello, {data.user.name || data.user.email}!</p>
    </div>
  );
}
