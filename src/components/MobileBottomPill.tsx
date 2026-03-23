import { House, Zap, Settings } from 'lucide-react';

export function MobileBottomPill() {
  return (
    <div className="fixed left-0 right-0 bottom-6 z-[9999] flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto">
        {/* The rounded pill background */}
        <div className="flex items-center gap-6 bg-background/95 border border-border/60 shadow-xl rounded-full px-6 py-2 max-w-md mx-auto">
          <div className="w-12" />
          <button
            className="flex items-center justify-center text-foreground/90 hover:text-foreground p-2"
            aria-label="Explore"
          >
            <Zap size={20} />
          </button>

          <button
            className="flex items-center justify-center text-foreground/90 hover:text-foreground p-2"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>

          <button
            className="flex items-center justify-center text-foreground/90 hover:text-foreground p-2"
            aria-label="More"
          >
            <House size={20} />
          </button>
        </div>

        {/* Left circular notch with home icon */}
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
          <div className="w-14 h-14 rounded-full bg-background border border-border/60 shadow-lg flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white">
              <House size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
