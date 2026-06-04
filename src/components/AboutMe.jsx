import { motion } from "framer-motion";
import img1 from "../img/About/1.png";

const interests = [
  { emoji: "⚽", label: "Đá bóng" },
  { emoji: "🎮", label: "Game" },
  { emoji: "☕", label: "Cà phê" },
  { emoji: "🎵", label: "Nghe nhạc" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={img1}
              alt="Quang Giáp chân dung"
              className="about-image"
            />
            <div className="about-image-overlay" />
          </motion.div>

          {/* Text */}
          <div className="about-text">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1}
            >
              Một con người <span>bình thường</span> với những <span>giấc mơ lớn.</span>
            </motion.h2>

            <motion.p
              className="text-body"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.2}
            >
              Yêu những hành trình mới, trân trọng những khoảnh khắc bình yên và
              luôn giữ cho mình sự tò mò trước thế giới rộng lớn.
            </motion.p>

            <motion.p
              className="text-body"
              style={{ marginTop: "1rem" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.3}
            >
              Tin rằng mỗi trải nghiệm đều mang một ý nghĩa riêng, và hạnh phúc
              không nằm ở đích đến, mà ở cách ta cảm nhận từng bước trên hành
              trình.
            </motion.p>

            <motion.div
              className="interest-tags"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.4}
            >
              {interests.map((item, i) => (
                <motion.div
                  key={i}
                  className="interest-tag"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="tag-emoji">{item.emoji}</span>
                  {item.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
