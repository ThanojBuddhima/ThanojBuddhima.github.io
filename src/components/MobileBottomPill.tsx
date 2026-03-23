import { House, Zap, Settings } from 'lucide-react';

export function MobileBottomPill() {
  return (
    <div className="fixed inset-x-0 bottom-8 z-[999999] flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto w-[90%] max-w-[360px]">
        {/* The rounded pill background */}
        <div className="flex items-center justify-between bg-[#111111] dark:bg-[#111111] border border-gray-700 shadow-2xl rounded-full px-6 py-3 w-full">
          <div className="w-10" /> {/* Spacer for the home notch */}
          <button
            className="flex items-center justify-center text-gray-300 hover:text-white p-2 transition-colors"
            aria-label="Explore"
          >
            <Zap size={22} />
          </button>

          <button
            className="flex items-center justify-center text-gray-300 hover:text-white p-2 transition-colors"
            aria-label="Settings"
          >
            <Settings size={22} />
          </button>

          <button
            className="flex items-center justify-center text-gray-300 hover:text-white p-2 transition-colors"
            aria-label="More"
          >
            <House size={22} />
          </button>
        </div>

        {/* Left circular notch with home icon */}
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
          <div className="w-[60px] h-[60px] rounded-full bg-background dark:bg-[#111] border border-gray-700 shadow-xl flex items-center justify-center">
            <div className="w-[44px] h-[44px] rounded-full bg-[#FF6B35] flex items-center justify-center text-white shadow-inner">
              <House size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
