"use client";

import { RobotOutlined } from "@ant-design/icons";
import { Button, Input, Skeleton } from "antd";
import { MessageCircle, Plus, SendHorizontal, X } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAI } from "../../hooks/gemini-ai/use-ai";
import "./ChatbotPopup.css";

export const suggestedPrompts = [
  {
    title: "Tình thế ngàn cân treo sợi tóc",
    text: "Phân tích bối cảnh 'ngàn cân treo sợi tóc' (1945-1946) và các biện pháp diệt giặc đói, giặc dốt của Đảng.",
  },
  {
    title: "Sách lược Ngoại giao 1946",
    text: "Giải thích sách lược 'Hòa để tiến' và ý nghĩa lịch sử của việc ký Hiệp định Sơ bộ (6/3/1946).",
  },
  {
    title: "Đường lối Kháng chiến toàn quốc",
    text: "Phân tích nội dung đường lối kháng chiến: toàn dân, toàn diện, trường kỳ, tự lực cánh sinh.",
  },
  {
    title: "Đỉnh cao Điện Biên Phủ 1954",
    text: "Đánh giá ý nghĩa của quyết định chuyển phương châm sang 'Đánh chắc, tiến chắc' tại chiến dịch Điện Biên Phủ.",
  },
];

export const suggestionTags = [
  "Ngàn cân treo sợi tóc",
  "Tuần lễ Vàng 1945",
  "Hiệp định Sơ bộ 6/3",
  "Toàn quốc kháng chiến",
  "Việt Bắc Thu Đông 1947",
  "Biên Giới 1950",
  "Đại hội Đảng lần II",
  "Điện Biên Phủ 1954",
];

export default function ChatbotPopup({ onClose, buttonPosition }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, title: "Cuộc trò chuyện mới", active: true },
  ]);
  const { generateResponse, loading, error } = useAI();

  const formatResponse = (text) => {
    if (!text) return text;
    return text
      .replace(/\*\*(.*?)\*\*/g, "**$1**")
      .replace(/^\* /gm, "- ")
      .replace(/([.!?])\s*(\*\*[^*]+\*\*)/g, "$1\n\n$2")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();
  };

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    // Filter out previous error or loading messages to avoid confusing the API
    const historyList = messages.filter(
      (m) => !m.isLoading && !m.text.includes("Xin lỗi, đã xảy ra lỗi"),
    );
    const currentInput = text;

    const userMessage = { text: text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const loadingMessage = { text: "", isUser: false, isLoading: true };
    setMessages((prev) => [...prev, loadingMessage]);

    const response = await generateResponse(historyList, currentInput);

    setMessages((prev) => {
      const newMessages = [...prev];
      newMessages.pop();
      if (response) {
        const formattedResponse = formatResponse(response);
        const aiMessage = {
          text: formattedResponse,
          isUser: false,
          isLoading: false,
        };
        newMessages.push(aiMessage);
      } else {
        const errorMessage = {
          text: "Xin lỗi, đã xảy ra lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại sau.",
          isUser: false,
          isLoading: false,
        };
        newMessages.push(errorMessage);
      }
      return newMessages;
    });
  };

  const handlePromptClick = (prompt) => {
    handleSend(prompt.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (loading || !input.trim()) return;
      handleSend();
    }
  };

  const createNewSession = () => {
    const newSession = {
      id: sessions.length + 1,
      title: `Cuộc trò chuyện ${sessions.length + 1}`,
      active: false,
    };
    setSessions((prev) => [
      newSession,
      ...prev.map((s) => ({ ...s, active: false })),
    ]);
    setMessages([]);
    setSidebarOpen(false);
  };

  const switchSession = (sessionId) => {
    setSessions((prev) =>
      prev.map((s) => ({ ...s, active: s.id === sessionId })),
    );
    setMessages([]);
    setSidebarOpen(false);
  };

  // Calculate popup position to avoid overlap with button
  const getPopupPosition = () => {
    const popupWidth = 450;
    const popupHeight = 600;
    const margin = 20;

    let left = buttonPosition.x - popupWidth - margin;
    let top = buttonPosition.y;

    // If popup goes off left edge, position to right of button
    if (left < margin) {
      left = buttonPosition.x + 80;
    }

    // Keep popup within viewport
    if (left + popupWidth > window.innerWidth - margin) {
      left = window.innerWidth - popupWidth - margin;
    }

    if (top + popupHeight > window.innerHeight - margin) {
      top = window.innerHeight - popupHeight - margin;
    }

    if (top < margin) {
      top = margin;
    }

    return { left, top };
  };

  const popupPos = getPopupPosition();

  return (
    <>
      <div className="chatbot-overlay" onClick={onClose} />
      <div
        className="chatbot-popup"
        style={{
          position: "fixed",
          left: `${popupPos.left}px`,
          top: `${popupPos.top}px`,
          width: "450px",
          height: "600px",
          zIndex: 10000,
        }}
      >
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-title">
            <RobotOutlined style={{ marginRight: 8, fontSize: "18px" }} />
            <span>Trợ lý AI - Lịch sử Đảng CSVN</span>
          </div>
          <Button
            type="text"
            icon={<X size={18} />}
            onClick={onClose}
            className="close-button"
          />
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="chatbot-sidebar">
            <div className="sidebar-header">
              <h4>Lịch sử trò chuyện</h4>
              <Button
                type="text"
                icon={<X size={14} />}
                onClick={() => setSidebarOpen(false)}
                size="small"
              />
            </div>

            <Button
              className="new-session-btn"
              icon={<Plus size={14} />}
              onClick={createNewSession}
              size="small"
              block
            >
              Cuộc trò chuyện mới
            </Button>

            <div className="session-list">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className={`session-item ${session.active ? "active" : ""}`}
                  onClick={() => switchSession(session.id)}
                >
                  <MessageCircle size={14} style={{ marginRight: "6px" }} />
                  {session.title}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="chatbot-content">
          {messages.length === 0 ? (
            <div className="welcome-section">
              <div className="welcome-title">
                Sự Lãnh đạo của Đảng CSVN (1945-1954)
              </div>
              <div className="welcome-subtitle">
                Chọn một chủ đề hoặc đặt câu hỏi của bạn
              </div>

              <div className="prompt-grid">
                {suggestedPrompts.map((prompt, index) => (
                  <div
                    key={index}
                    className="prompt-item"
                    onClick={() => handlePromptClick(prompt)}
                  >
                    <div className="prompt-title">📖 {prompt.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="messages-container">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.isUser ? "user-message" : "ai-message"
                  }`}
                >
                  <div className="message-avatar">
                    {message.isUser ? "ME" : <RobotOutlined />}
                  </div>
                  <div className="message-bubble">
                    {message.isUser ? (
                      message.text
                    ) : message.isLoading ? (
                      <div>
                        <Skeleton
                          active
                          paragraph={{ rows: 2, width: ["100%", "80%"] }}
                          title={false}
                        />
                        <div className="loading-hint">Đang phân tích...</div>
                      </div>
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p style={{ marginBottom: "0.5rem" }}>{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong style={{ color: "var(--lacquer-red)" }}>
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {error && <div className="error-text">{error}</div>}
            </div>
          )}

          {/* Quick suggestions after conversation starts */}
          {messages.length > 0 && (
            <div className="quick-suggestions">
              {suggestionTags.slice(0, 4).map((tag, index) => (
                <button
                  key={index}
                  className="suggestion-chip"
                  onClick={() => handleSend(tag)}
                  disabled={loading}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="chatbot-input">
          <Input.TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Đặt câu hỏi..."
            autoSize={{ minRows: 1, maxRows: 3 }}
            style={{
              background: "transparent",
              border: "1px solid #f2c2c2",
              resize: "none",
            }}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendHorizontal size={16} />}
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            style={{
              backgroundColor: "var(--lacquer-red)",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "var(--lacquer-red)",
              minWidth: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
    </>
  );
}
