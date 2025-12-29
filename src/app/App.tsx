import React from "react";
import svgPaths from "../imports/svg-may4544nkt";
import { ArrowRight } from "lucide-react";

function WeveLogo() {
  return (
    <div
      className="w-[193px] h-[143px] relative"
      aria-label="We've Logo"
    >
      <svg
        className="w-full h-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 193 143"
      >
        <g clipPath="url(#clip0_1_23)">
          <path d={svgPaths.p1607ae00} fill="#363F2D" />
          <path d={svgPaths.p194e0f00} fill="#363F2D" />
          <path d={svgPaths.p19a68700} fill="#363F2D" />
          <path d={svgPaths.p21888880} fill="#363F2D" />
          <path d={svgPaths.p81b1680} fill="#363F2D" />
          <path d={svgPaths.p3d6fc200} fill="#363F2D" />
        </g>
        <defs>
          <clipPath id="clip0_1_23">
            <rect fill="white" height="143" width="193" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MailchimpForm() {
  return (
    <div className="w-full max-w-[442px] bg-black p-8 md:p-10 flex flex-col items-center justify-center text-center">
      {/* 
        INSTRUCTIONS FOR USER:
        To connect this form to your Mailchimp account:
        1. Go to Mailchimp -> Audience -> Signup forms -> Embedded forms
        2. Copy the form action URL (it looks like https://yourdomain.us1.list-manage.com/subscribe/post?u=...&id=...)
        3. Paste it into the 'action' attribute below
        4. Make sure the input name matches your Mailchimp configuration (usually "EMAIL")
      */}
      <form
        action="#"
        method="POST"
        target="_blank"
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border-b border-white/30 text-white py-3 px-1 placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors font-['Arial',sans-serif] text-lg"
          />
        </div>

        <button
          type="submit"
          className="group flex items-center justify-between w-full text-white hover:text-neutral-300 transition-colors pt-2"
        >
          <span className="font-['Fahkwang',sans-serif] text-lg uppercase tracking-widest">
            Sign Up
          </span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#dbd4bd] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Decorative background elements if needed, but keeping it clean for now as per design */}

      <div className="flex flex-col items-center gap-12 md:gap-16 w-full max-w-2xl z-10">
        {/* Logo Section */}
        <div className="hover:scale-105 transition-transform duration-500 ease-out">
          <WeveLogo />
        </div>

        {/* Text Section */}
        <p className="font-['Fahkwang',sans-serif] text-[24px] leading-tight text-black text-center max-w-[430px]">
          Join our interest list to be the first to know when
          our product is ready.
        </p>

        {/* Form Section */}
        <div className="w-full flex justify-center shadow-2xl shadow-black/20">
          <MailchimpForm />
        </div>
      </div>

      {/* Footer / Copyright */}
      <footer className="absolute bottom-6 text-[#363F2D]/60 font-['Arial',sans-serif] text-xs">
        &copy; {new Date().getFullYear()} We've. All rights
        reserved.
      </footer>
    </main>
  );
}