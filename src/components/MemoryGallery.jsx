import { motion } from "framer-motion";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

const memories = [
  { img: img5, caption: "Đêm trên sân cỏ" },
  { img: img4, caption: "Nhìn xa, nghĩ rộng" },
  { img: img3, caption: "Nụ cười sau trận đấu" },
  { img: img1, caption: "Khoảnh khắc bình yên" },
  { img: img6, caption: "Tuổi trẻ và kỷ niệm" },
  { img: img2, caption: "Số 7 — đam mê" },
];

const MemoryGallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Những khoảnh khắc <span>đáng nhớ.</span>
          </h2>
        </motion.div>

        <div className="gallery-grid">
          {memories.map((item, i) => (
            <motion.div
              key={i}
              className="polaroid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img src={item.img} alt={item.caption} className="polaroid-img" />
              <p className="polaroid-caption">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
