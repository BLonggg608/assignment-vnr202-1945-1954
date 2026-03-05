"use client";

import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./HomeButton.css";

export default function HomeButton() {
  const handleHomeClick = () => {
    // Force full page reload to ensure CSS is loaded properly
    window.location.href = "/";
  };

  return (
    <div className="home-button-container">
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<HomeOutlined style={{ fontSize: "24px" }} />}
        onClick={handleHomeClick}
        className="home-btn-circle"
        title="Về trang chủ"
      />
    </div>
  );
}
