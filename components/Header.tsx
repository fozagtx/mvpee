"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "@/app/auth/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getInitials = (email: string) => {
  if (!email) return "";
  // Extract first 3 characters before @ and convert to uppercase
  const namePart = email.split('@')[0];
  return namePart.substring(0, 3).toUpperCase();
};

export default function Header() {
	const { data, isPending } = useSession();
	const user = data?.user;
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Force re-render when session data changes
	React.useEffect(() => {
		if (data?.session?.id) {
			setScrolled(prev => !prev); // Force a re-render
		}
	}, [data?.session?.id]);

	return (
	   <header
		   className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 
			   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185] 
			   ${scrolled ? 'py-2' : 'py-4'}`}
	   >
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className={`flex justify-between items-center transition-all duration-300 ${
					scrolled ? 'gap-4' : 'gap-8'
				}`}>
					{/* Logo on Left */}
					<span className="text-xl font-bold tracking-tight text-black font-mono">
						MVPE
					</span>

					{/* Navigation Links on Right */}
					<nav className="flex items-center space-x-4 sm:space-x-8">
						<Link
							href="/docs"
							className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
						>
							Demo
						</Link>
						<Link
							href="/about"
							className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
						>
							About
						</Link>
						{isPending ? (
								<div>Loading...</div>
							) : data?.session?.id ? (
							<div className="flex items-center gap-4">
								<div className="relative">
									<Avatar className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#fb7185] h-10 w-10">
										<AvatarImage src={user?.image ?? ''} alt={user?.name ?? ''} />
										<AvatarFallback className="text-white font-bold text-lg">{getInitials(user?.email ?? '')}</AvatarFallback>
									</Avatar>
									<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
								</div>
								<Link
									href="/api/auth/signout"
									className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-red-500 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 focus-visible:ring-red-500"
								>
									Sign out
								</Link>
							</div>
						) : (
							<Link
								href="/login"
								target="_blank"
								rel="noopener noreferrer"
								className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
							>
								Dashboard
							</Link>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
