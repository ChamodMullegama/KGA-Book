const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 select-none">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-heading tracking-widest text-blood">KGA</span>
            <span className="text-xs font-body italic text-zinc-500 mt-1">THE UNCOMFORTABLE WRITER</span>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg font-heading tracking-widest uppercase">
            <a href="#about" className="text-zinc-400 hover:text-white transition">THE BOOK</a>
            <a href="#chapters" className="text-zinc-400 hover:text-white transition">INSIDE</a>
            <a href="#author" className="text-zinc-400 hover:text-white transition">AUTHOR</a>
            <a href="#reviews" className="text-zinc-400 hover:text-white transition">REVIEWS</a>
            <a href="#faq" className="text-zinc-400 hover:text-white transition">FAQ</a>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition" aria-label="Twitter X">
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" width="22" height="22">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://amazon.com/dp/YOURASIN" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition" aria-label="Amazon Kindle Store">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-zinc-600">
          <p>© 2026 KGA. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase italic text-zinc-700">NOT FOR THE EMOTIONALLY FRAGILE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;