import { Link } from "react-router-dom";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { HeaderBase } from "./header-base";

export function Header() {
  const leftContent = (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">K</span>
      </div>
      <span className="text-xl font-medium hidden md:block">Kyonosuke</span>
    </Link>
  );

  const rightContent = (
    <nav className="flex items-center gap-3">
      <Link to="/contributors">
        <Button variant="ghost" className="text-sm p-0">
          Contributors
        </Button>
      </Link>
      <a href="https://github.com/0xkyon" target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="text-sm ml-4">
          GitHub
          <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </nav>
  );

  return (
    <div className="mx-4 md:mx-0">
      <HeaderBase
        className="bg-secondary border rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[14px]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  );
}