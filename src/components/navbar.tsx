import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Services", href: "https://www.aidenlabs.ai/#service" },
  { name: "Products", href: "https://www.aidenlabs.ai/#products" },
  { name: "FAQs", href: "https://www.aidenlabs.ai/#faqs" },
  { name: "Contact Us", href: "https://www.aidenlabs.ai/#contact" },
  { name: "Blog", href: "https://www.aidenlabs.ai/blog" },
  { name: "Whitepaper", href: "https://aiden-labs.gitbook.io/aiden-labs" },
];

export function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto px-4 py-4 fixed z-40 top-0 left-0 right-0">
      <div className="flex items-center justify-between bg-black rounded-md p-2 backdrop-blur-sm border">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.avif"
            alt="Aiden"
            width={512}
            height={137}
            className="h-7 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button asChild key={item.name} variant="ghost">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </Button>
          ))}
        </div>

        <Button asChild>
          <a
            href="https://quest.aidenlabs.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Quest
          </a>
        </Button>
      </div>
    </nav>
  );
}
