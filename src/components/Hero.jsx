import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../img/1.jpg";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Parallax and Reveal Transforms
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/giap.dev",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:quanggiapdo@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/GiapQuang",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },

    {
      label: "Phone",
      href: "tel:0962355335",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="hero" className="hero-identity-fullscreen">
      <motion.div
        className="hero-bg"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <img src={img1} alt="Bkg" className="hero-bg-img" />
        <div className="mesh-overlay" />
        <div className="hero-gradient-overlay" />
      </motion.div>

      <div className="container hero-content-cinematic">
        <motion.div
          className="hero-main-text"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-name-xl"
          >
            Đỗ Quang Giáp
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hero-social-links"
          >
            <span className="follow-me-label">Follow Me</span>
            <div className="hero-icon-row">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={
                    link.label === "Email" || link.label === "Phone"
                      ? "_self"
                      : "_blank"
                  }
                  rel={
                    link.label === "Email" || link.label === "Phone"
                      ? ""
                      : "noopener noreferrer"
                  }
                  className="hero-social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
