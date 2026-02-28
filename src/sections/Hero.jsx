import "../styles/sections/Hero.css";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const navRef = useRef(null);
  const topNavRef = useRef(null);
  const [showTopNav, setShowTopNav] = useState(false);


  useEffect(() => {
    const bottomNav = navRef.current;
    const topNav = topNavRef.current;
    if (!bottomNav || !topNav) return;

    let io;
    let rafId = 0;

    const attach = () => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const h = topNav.getBoundingClientRect().height;

        if (io) io.disconnect();

        io = new IntersectionObserver(
          ([entry]) => setShowTopNav(!entry.isIntersecting),
          { threshold: 0, rootMargin: `-${h}px 0px 0px 0px` }
        );

        io.observe(bottomNav);
      });
    };

    attach();
    window.addEventListener("resize", attach);

    return () => {
      window.removeEventListener("resize", attach);
      if (rafId) cancelAnimationFrame(rafId);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <p className="hero-greet">안녕하세요, 저는</p>

        <h1 className="hero-title">
          <span className="hero-role">Frontend Developer</span>
          <span className="hero-name">최준혁</span>
        </h1>

        <p className="hero-desc">
          사용자 경험을 집요하게 다듬는 프론트엔드 개발자입니다.
          <br />
          React 기반으로 빠르고 명확한 UI를 만듭니다.
        </p>

        <div className="hero-scroll" aria-label="Scroll down">
          <span className="hero-scroll-text">Scroll</span>
          <span className="hero-scroll-dot" />
        </div>
      </div>

      <nav ref={navRef} className="hero-nav" aria-label="Section navigation" >
        <a className="hero-nav-item" href="#top">Home</a>
        <a className="hero-nav-item" href="#about">About</a>
        <a className="hero-nav-item" href="#skill">Skill</a>
        <a className="hero-nav-item" href="#projects">Projects</a>
      </nav>

      <nav ref={topNavRef} className={`top-nav ${showTopNav ? "show" : ""}`} aria-label="Top navigation">
        <a className="hero-nav-item" href="#top">Home</a>
        <a className="hero-nav-item" href="#about">About</a>
        <a className="hero-nav-item" href="#skill">Skill</a>
        <a className="hero-nav-item" href="#projects">Projects</a>
      </nav>
    </section>
  );
}