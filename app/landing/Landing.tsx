"use client"

import ShaderBackground from "@/components/ShaderBackground";
import { useRouter } from "next/navigation";

export default function Landing() {
	const router = useRouter();
	return (
		<>
			<ShaderBackground />
			<div className=" relative z-10 flex min-h-screen w-full justify-center">
				<div className="flex flex-col justify-center items-center self-center w-full">
					<h1 className="text-white font-mono p-2 m-2 text-5xl">Experience the fute of content delivery</h1>
					<button
						className="mt-6 px-6 py-2 font-mono border bg-blue-600 text-white rounded hover:bg-blue-700 transition"
						onClick={() => {
							router.push('/start');
						}}
					>
						Go to Main UI
					</button>
				</div>
			</div>
		</>
	);
}
