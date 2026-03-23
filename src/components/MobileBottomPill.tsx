import { House, Zap, Settings, User } from 'lucide-react';

export function MobileBottomPill() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-[999999] pointer-events-none w-max">
      <div className="relative pointer-events-auto flex items-center bg-[#111] dark:bg-[#111] border border-gray-800 shadow-2xl rounded-full h-[60px] px-6 gap-8">
        
        {/* Protruding left circle with matching rim to blend into the pill */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-[52px] h-[52px] rounded-full bg-[#FF6B35] border-[4px] border-[#111] flex items-center justify-center text-white shadow-lg">
            <House size={22} />
          </div>
        </div>

        {/* Spacer to push out the other icons so they don't hide under the left circle */}
        <div className="w-2 shrink-0" />

        {/* Other Icons */}
        <button
          className="flex items-center justify-center text-gray-400 hover:text-white p-2 transition-colors"
          aria-label="Explore"
        >
          <Zap size={24} />
        </button>

        <button
          className="flex items-center justify-center text-gray-400 hover:text-white p-2 transition-colors"
          aria-label="Settings"
        >
          <Settings size={24} />
        </button>

        <button
          className="flex items-center justify-center text-gray-400 hover:text-white p-2 transition-colors"
          aria-label="Profile"
        >
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
