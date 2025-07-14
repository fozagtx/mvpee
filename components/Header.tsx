"use client";
import React from "react";
import Link from "next/link";

interface HeaderProps {
	user: { id: string; email: string } | null;
}

export default function Header({ user }: HeaderProps) {
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
			className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
				scrolled ? 'py-2' : 'py-4'
			}`}
			style={{ 
				background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
				backdropFilter: "blur(8px)",
				WebkitBackdropFilter: "blur(8px)"
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className={`flex justify-between items-center transition-all duration-300 ${
					scrolled ? 'gap-4' : 'gap-8'
				}`}>
					{/* Logo on Left */}
					<span className="text-xl font-bold tracking-tight text-black font-mono">
						mvpee
					</span>

					{/* Navigation Links on Right */}
					<nav className="flex items-center space-x-4 sm:space-x-8">
						<Link
							href="/docs"
							className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
						>
							Docs
						</Link>
						<Link
							href="/about"
							className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
						>
							About
						</Link>
						{user ? (
							<Link
								href="/api/auth/signout"
								className="h-10 px-4 text-sm font-mono flex items-center justify-center transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring"
							>
								Sign out
							</Link>
						) : (
							<Link
								href="/login"
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
