function Footer() {
  return (
    <footer className="border-t border-[#1a2e2e] bg-[#080e0e] py-8 px-6">
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-5">

     
        <p className="text-white font-extrabold text-lg tracking-tight  ms-10!">
          Sharuna<span className="text-teal-400">.</span>
        </p>

   
        <p className="text-[#2d5555] text-sm ">
          © {new Date().getFullYear()} Sharuna M K. All rights reserved.
        </p>

        <div className="flex items-center gap-10 me-10!">
          <a
            href="https://linkedin.com/in/sharuna-m-k"
            target="_blank"
            rel="noreferrer"
            className="text-[#2d5555] hover:text-teal-400 transition-colors duration-200"
          />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          <a
          
            href="https://github.com/Sharuna-mk"
            target="_blank"
            rel="noreferrer"
            className="text-[#2d5555] hover:text-teal-400 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;