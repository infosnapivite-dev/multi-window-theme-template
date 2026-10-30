import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function useScrollSync(scrollerRef) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 600 : true
  );
  const lenisRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scrollerEl = scrollerRef.current || document.getElementById('mockup-scroll-container');
    if (!scrollerEl && isDesktop) return;

    // Configure ScrollTrigger defaults per PRD mandate
    ScrollTrigger.defaults({
      scroller: isDesktop ? scrollerEl : window,
    });

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      wrapper: isDesktop ? scrollerEl : window,
      content: isDesktop ? scrollerEl.firstElementChild : document.documentElement,
      smoothWheel: true,
      syncTouch: false,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis RAF with GSAP Ticker
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    // Set lag smoothing to 0 to eliminate frame drops during scrubbed animations
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isDesktop, scrollerRef]);

  return { isDesktop, lenisRef };
}
