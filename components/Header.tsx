"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "@/app/auth/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getInitials = (email: string) => {
  if (!email) return "";
  const namePart = email.split('@')[0];
  return namePart.substring(0, 2).toUpperCase();
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
							) : data?.user ? (
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarImage src={user?.image ?? ''} alt={user?.name ?? ''} />
									<AvatarFallback>{getInitials(user?.email ?? '')}</AvatarFallback>
								</Avatar>
								<Link
									href="/api/auth/signout"
									className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
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
								Sign in
							</Link>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
