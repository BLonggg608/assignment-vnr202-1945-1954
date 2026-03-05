"use client";

import { RobotOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import ChatbotPopup from "./ChatbotPopup";
import "./FloatingChatbot.css";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  // Initialize position to bottom-right
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 80,
      y: window.innerHeight - 80,
    });
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest(".chatbot-popup")) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Keep button within viewport
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    // Only toggle if not dragging
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart, position]);

  return (
    <>
      <div
        ref={buttonRef}
        className={`floating-chatbot-button ${isDragging ? "dragging" : ""}`}
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 9999,
        }}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RobotOutlined style={{ fontSize: "24px" }} />}
          style={{
            width: "60px",
            height: "60px",
            background: "var(--lacquer-red)",
            borderColor: "var(--lacquer-gold)",
            border: "3px solid var(--lacquer-gold)",
            boxShadow: "0 4px 12px rgba(139, 26, 26, 0.4)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        />
        {!isOpen && (
          <div className="chatbot-hint">
            <span>💬 Hỏi đáp AI</span>
          </div>
        )}
      </div>

      {isOpen && (
        <ChatbotPopup
          onClose={() => setIsOpen(false)}
          buttonPosition={position}
        />
      )}
    </>
  );
}
