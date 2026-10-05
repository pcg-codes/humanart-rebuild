"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Only reproduces the original floating visual on scroll. No click action.
export function DecorativeMeetButton({ label }: { label: string }) {
  const placeholder = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!placeholder.current) return;
    const positionObserver = new IntersectionObserver(([entry]) => {
      setSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    }, { threshold: 0 });
    positionObserver.observe(placeholder.current);

    const booking = document.getElementById("fair-booking");
    const bookingObserver = new IntersectionObserver(([entry]) => {
      setHidden(entry.boundingClientRect.top < window.innerHeight);
    }, { threshold: 0 });
    if (booking) bookingObserver.observe(booking);

    return () => {
      positionObserver.disconnect();
      bookingObserver.disconnect();
    };
  }, []);

  function button(className: string) {
    return <button className={className} type="button" aria-disabled="true" tabIndex={-1}>{label}</button>;
  }

  return (
    <>
      <div ref={placeholder} className="inline-sticky-button__placeholder">
        {!sticky && button("inline-sticky-button")}
      </div>
      {sticky && createPortal(button(`inline-sticky-button is-sticky${hidden ? " is-hidden" : ""}`), document.body)}
    </>
  );
}
