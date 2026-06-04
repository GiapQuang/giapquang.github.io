import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const CurrentLife = () => {
  return (
    <section id="current" className="current-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Tôi đang <span>sống như thế nào.</span>
        </motion.h2>

        <div className="current-grid">
          {/* Focus */}
          <motion.div
            className="current-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
          >
            <span className="card-emoji">🎯</span>
            <h3>Đang tập trung</h3>
            <ul>
              <li>Cải thiện bản thân mỗi ngày</li>
              <li>Rèn luyện sức khỏe & thể thao</li>
              <li>Xây dựng giá trị lâu dài</li>
            </ul>
          </motion.div>

          {/* Music */}
          <motion.div
            className="current-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
          >
            <span className="card-emoji">🎧</span>
            <h3>Nhạc yêu thích</h3>
            <div className="music-list">
              <div className="music-item">
                <span className="music-note">♪</span>
                <div className="music-info">
                  <span className="music-title">Thành Đô</span>
                  <span className="music-artist">Gurbane</span>
                </div>
              </div>
              <div className="music-item">
                <span className="music-note">♪</span>
                <div className="music-info">
                  <span className="music-title">Cả Một Đời Để Quên</span>
                  <span className="music-artist">Đặng Tuấn Vũ x Lâm Tuấn</span>
                </div>
              </div>
              <div className="music-item">
                <span className="music-note">♪</span>
                <div className="music-info">
                  <span className="music-title">
                    Người Bình Thản Kẻ Nặng Lòng
                  </span>
                  <span className="music-artist">Noo Phước Thịnh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Daily Inspiration */}
          <motion.div
            className="current-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
          >
            <span className="card-emoji">✨</span>
            <h3>Cảm hứng hàng ngày</h3>
            <p>
              Mỗi buổi sáng thức dậy là một cơ hội mới. Tìm cảm hứng từ những
              điều nhỏ bé.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              Không cố gắng trở thành ai khác. Chỉ mong mỗi ngày hiểu bản thân
              hơn một chút.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentLife;
