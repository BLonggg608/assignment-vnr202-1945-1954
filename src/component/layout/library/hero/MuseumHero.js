"use client";

import { FlagOutlined, StarOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./MuseumHero.css";

const { Title, Paragraph } = Typography;

export default function MuseumHero() {
  return (
    <div className="museum-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <StarOutlined className="badge-icon" />
          <span>VNR202 - Nhóm 3 - Haft_2 GD1815</span>
        </div>

        <Title level={1} className="hero-main-title">
          Sự lãnh đạo của Đảng Cộng sản Việt Nam
          <br />
          trong Kháng chiến chống Pháp
        </Title>

        <div className="hero-divider">
          <span className="divider-star">★</span>
        </div>

        <Title level={2} className="hero-subtitle">
          Xây dựng chính quyền, toàn quốc kháng chiến
          <br />
          và đỉnh cao Điện Biên Phủ
        </Title>

        <div className="hero-years">
          <FlagOutlined className="years-icon" />
          <span>1945 – 1954</span>
        </div>

        <div className="hero-learning-outcomes">
          <div className="outcome-badge">
            <span className="outcome-label">CLO1</span>
            <span className="outcome-text">
              Phân tích bối cảnh "ngàn cân treo sợi tóc"
            </span>
          </div>
          <div className="outcome-badge">
            <span className="outcome-label">CLO2</span>
            <span className="outcome-text">
              Nắm vững đường lối và các chiến dịch lớn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
