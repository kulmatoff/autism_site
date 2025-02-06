import React, { useState, useEffect, useRef } from 'react';

export const AnimatedCounter = ({ start, end, duration, className }) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible || hasStarted) return;
    setHasStarted(true);
    let startTime = null;
    const animate = timestamp => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(start + (end - start) * progress));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isVisible, hasStarted, start, end, duration]);
  return <span ref={ref} className={className}>{count}</span>;
};

export default AnimatedCounter;
