import { motion } from "framer-motion";

const philosophyCards = [
  {
    icon: "🛤️",
    title: "Hành trình, không phải cuộc đua",
    text: "Không cần so sánh với ai. Mỗi người có một con đường riêng — điều quan trọng là ta đang tiến bước mỗi ngày.",
  },
  {
    icon: "🌱",
    title: "Nỗ lực bền bỉ",
    text: "Sự tiến bộ không đến từ những bước nhảy vọt ngẫu hứng, mà đến từ sự kiên trì và kỷ luật trong từng việc nhỏ.",
  },
  {
    icon: "🤝",
    title: "Sống chân thật",
    text: "Không giả tạo, không cố gắng trở thành ai khác. Sống đúng với bản thân là cách tốt nhất để tìm thấy sự bình yên.",
  },
  {
    icon: "🌊",
    title: "Chấp nhận và buông bỏ",
    text: "Không phải mọi thứ đều nằm trong tầm kiểm soát. Học cách chấp nhận và tập trung vào điều mình có thể thay đổi.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Những điều <span>tôi tin.</span>
        </motion.h2>

        <div className="philosophy-grid">
          {philosophyCards.map((card, i) => (
            <motion.div
              key={i}
              className="philosophy-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.5}
            >
              <span className="card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}

          {/* Big Quote */}
          <motion.div
            className="philosophy-quote-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="big-quote">
              "Điều đáng quý không phải là ta đang ở đâu, mà là ta đang trở
              thành người như thế nào."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
