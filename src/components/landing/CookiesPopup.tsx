"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookiesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("krovos_cookies_accepted");
    if (!hasAccepted) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("krovos_cookies_accepted", "true");
    setIsVisible(false);
    setTimeout(() => setIsHidden(true), 300);
  };

  const handleDecline = () => {
    setIsVisible(false);
    setTimeout(() => setIsHidden(true), 300);
  };

  if (isHidden) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-sm w-full transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">Cookie Settings</h3>
              <p className="text-white/80 text-xs">We value your privacy</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-slate-600 mb-4">
            We use cookies to enhance your experience. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleAccept}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-[1.02]"
            >
              Accept All
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleDecline}
                className="flex-1 py-3 px-4 text-slate-600 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-sm"
              >
                Reject
              </button>
              <Link
                href="/legal/cookies"
                className="flex-1 py-3 px-4 text-center text-indigo-600 font-medium rounded-xl border border-indigo-200 hover:bg-indigo-50 transition-colors text-sm"
              >
                Preferences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
