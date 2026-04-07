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
          <h2 className="section-title">
            Hành trình không phải là cuộc đua
            <span> với ai.</span>
            <br />
            Mà là quá trình hoàn thiện bản thân
            <span> mỗi ngày.</span>
          </h2>
          <p className="text-large">
            Sự tiến bộ không đến từ những bước nhảy vọt ngẫu hứng...
            <br />
            mà đến từ sự <span className="highlight">nỗ lực bền bỉ</span> mỗi
            ngày.
          </p>
          <p className="text-large">
            Tốc độ không phải là ưu tiên, không cần là người đi nhanh nhất...
            <br />
            chỉ cần là người <span className="highlight">đi xa nhất.</span>
          </p>
        </div>
        <div className="now-moodboard">
          <div className="mood-item glass philosophy-featured">
            <img src={img4} alt="Identity Portrait" />
          </div>
        </div>
      </motion.div>
    ),
    now: (
      <motion.div
        key="now"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="now-grid"
      >
        <div className="now-content">
          <div className="now-item">
            <h3>Cải thiện bản thân</h3>
            <p>
              Không ngừng học hỏi, xây dựng tư duy và nâng cấp kỹ năng mỗi ngày.
            </p>
          </div>
          <div className="now-item">
            <h3>Duy trì thể thao</h3>
            <p>
              Rèn luyện sức bền và sự kỷ luật thông qua các hoạt động thể chất
              đều đặn.
            </p>
          </div>
          <div className="now-item">
            <h3>Xây dựng giá trị</h3>
            <p>
              Tập trung vào những dự án và kiến thức mang lại giá trị lâu dài.
            </p>
          </div>
        </div>
        <div className="now-moodboard">
          {[img2, img3, img5, img6].map((img, i) => (
            <div key={i} className="mood-item glass">
              <img src={img} alt={`Life ${i}`} />
            </div>
          ))}
        </div>
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
