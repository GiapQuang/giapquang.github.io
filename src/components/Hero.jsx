import { motion } from "framer-motion";
import img1 from "../img/Home/1.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-center">
        {/* Central Portrait */}
        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={img1} alt="Đỗ Quang Giáp" className="hero-portrait" />
          <div className="hero-portrait-glow" />
        </motion.div>

        {/* Name & Quote */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Đỗ Quang Giáp
        </motion.h1>

        <motion.p
          className="hero-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          "Không cần là người đi nhanh nhất, chỉ cần là người đi xa nhất."
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
