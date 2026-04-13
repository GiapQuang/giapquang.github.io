import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import img4 from "../img/4.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

const IdentityHub = () => {
  const [activeTab, setActiveTab] = useState("philosophy");

  const tabs = [
    { id: "philosophy", label: "Philosophy" },
    { id: "now", label: "Now" },
  ];

  const content = {
    philosophy: (
      <motion.div
        key="philosophy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="now-grid"
      >
        <div className="now-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Hành trình không phải là cuộc đua
            <span> với ai.</span>
            <br />
            Mà là quá trình hoàn thiện bản thân
            <span> mỗi ngày.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-large"
          >
            Sự tiến bộ không đến từ những bước nhảy vọt ngẫu hứng...
            <br />
            mà đến từ sự <span className="highlight">nỗ lực bền bỉ</span> mỗi
            ngày.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-large"
          >
            Tốc độ không phải là ưu tiên, không cần là người đi nhanh nhất...
            <br />
            chỉ cần là người <span className="highlight">đi xa nhất.</span>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="now-moodboard"
        >
          <div className="mood-item glass philosophy-featured">
            <img src={img4} alt="Identity Portrait" />
          </div>
        </motion.div>
      </motion.div>
    ),
    now: (
      <motion.div
        key="now"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="now-zigzag-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="zigzag-row"
        >
          <div className="zigzag-text">
            <h3>Cải thiện bản thân</h3>
            <p>
              Không ngừng học hỏi, xây dựng tư duy và nâng cấp kỹ năng mỗi ngày.
            </p>
          </div>
          <div className="zigzag-img glass">
            <img src={img2} alt="Learn" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="zigzag-row reverse"
        >
          <div className="zigzag-text">
            <h3>Duy trì thể thao</h3>
            <p>
              Rèn luyện sức bền và sự kỷ luật thông qua các hoạt động thể chất
              đều đặn.
            </p>
          </div>
          <div className="zigzag-img glass">
            <img src={img3} alt="Sport" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="zigzag-row"
        >
          <div className="zigzag-text">
            <h3>Xây dựng giá trị</h3>
            <p>
              Tập trung vào những dự án và kiến thức mang lại giá trị lâu dài.
            </p>
          </div>
          <div className="zigzag-img glass">
            <img src={img5} alt="Value" />
          </div>
        </motion.div>
      </motion.div>
    ),
  };

  return (
    <section id="hub" className="hub-section">
      <div className="container">
        <div className="hub-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`hub-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="hub-tab-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hub-content">
          <AnimatePresence mode="wait">{content[activeTab]}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IdentityHub;
