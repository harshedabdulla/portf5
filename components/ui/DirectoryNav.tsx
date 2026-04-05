import React from 'react';

export const DirectoryNav = ({ navItems }: { navItems: { name: string; link: string; icon?: JSX.Element }[] }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] border-b border-neutral-800/80 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 border-x border-neutral-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800/50 py-3 text-[10px] sm:text-xs font-mono text-neutral-400 tracking-widest uppercase">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link}
              className="flex items-center justify-center gap-3 hover:text-white transition-colors duration-300 relative group py-2"
            >
              <div className="w-1.5 h-1.5 border border-neutral-600 flex-shrink-0 group-hover:bg-white transition-colors" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
