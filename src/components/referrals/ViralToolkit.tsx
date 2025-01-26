import { useState } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const AVATAR_STYLES = [
  { name: "Cyber Samurai", image: "/avatars/cyber-samurai.png" },
  { name: "Neon Warrior", image: "/avatars/neon-warrior.png" },
  { name: "Digital Nomad", image: "/avatars/digital-nomad.png" },
];

export function ViralToolkit() {
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  const referralLink = "https://example.com/ref/user123";

  const copyLink = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-card group h-full">
      <h2 className="mb-4 text-lg font-semibold text-cyber-teal">Viral Toolkit</h2>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Choose Your Avatar Style
        </h3>
        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-start">
          {AVATAR_STYLES.map((style, index) => (
            <button
              key={style.name}
              onClick={() => setSelectedStyle(index)}
              className={`group relative rounded-full transition-transform hover:scale-105 ${
                selectedStyle === index ? "ring-2 ring-cyber-green ring-offset-2 ring-offset-cyber-black" : ""
              }`}
            >
              <Avatar className={cn("transition-all", isMobile ? "h-14 w-14" : "h-16 w-16")}>
                <AvatarImage src={style.image} alt={style.name} />
                <AvatarFallback className="bg-cyber-green/10 text-cyber-green">
                  {style.name[0]}
                </AvatarFallback>
              </Avatar>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Your Referral Link
        </h3>
        <div className="flex items-center space-x-2">
          <code className="flex-1 rounded bg-cyber-black/50 px-3 py-2 font-mono text-xs md:text-sm text-cyber-green overflow-x-auto">
            {referralLink}
          </code>
          <Button
            variant="outline"
            size="icon"
            onClick={copyLink}
            className="transition-colors hover:bg-cyber-green/10 hover:text-cyber-green"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Share Your Hologram
        </h3>
        <Button
          className="w-full bg-cyber-green/10 text-cyber-green transition-all hover:bg-cyber-green/20"
          variant="outline"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Hack the system with me! 💻🔗
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyber-pink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

