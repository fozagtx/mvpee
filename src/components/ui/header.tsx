import { Link } from "react-router-dom";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { HeaderBase } from "./header-base";

export function Header() {
  const leftContent = (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
        <div className="w-4 h-4 bg-black rounded-sm" />
      </div>
    </Link>
  );

  const rightContent = (
    <nav className="flex items-center gap-8">
      <Link to="/discover" className="text-sm text-gray-300 hover:text-white transition-colors">
        DISCOVER
      </Link>
      <Link to="/careers" className="text-sm text-gray-300 hover:text-white transition-colors">
        CAREERS
      </Link>
      <Link to="/manifesto" className="text-sm text-gray-300 hover:text-white transition-colors">
        MANIFESTO
      </Link>
    </nav>
  );

  return (
    <div className="relative z-20">
      <HeaderBase
        className="border-none bg-transparent max-w-7xl mx-auto mt-8 px-8"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  );
}