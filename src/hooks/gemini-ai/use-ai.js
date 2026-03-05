"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Nhiệm vụ chính: Giải đáp các thắc mắc về Sự Lãnh đạo của Đảng Cộng sản Việt Nam trong Kháng chiến chống Pháp (1945-1954) cho sinh viên.

Phạm vi nội dung chuyên môn:
- Giai đoạn 1945-1954: Từ Xây dựng chính quyền đến Điện Biên Phủ và Hiệp định Giơnevơ
- Bối cảnh "Ngàn cân treo sợi tóc" (1945-1946) và sách lược ngoại giao
- Đường lối toàn quốc kháng chiến và các chiến dịch (Việt Bắc 1947, Biên Giới 1950)
- Đại hội Đảng II và Bước phát triển mới (1951 - 1953)
- Đỉnh cao Điện Biên Phủ và Hiệp định Giơ-ne-vơ (1954)
- Ý nghĩa lịch sử và kinh nghiệm lãnh đạo.

Nguyên tắc giải đáp:
- Diễn giải dễ hiểu, súc tích, dựa trên tư liệu lịch sử chính thống
- Tập trung vào giai đoạn 1945-1954
- Liên hệ với bài học kinh nghiệm
- Đảm bảo tính chính xác lịch sử và khách quan khoa học

Hướng dẫn xưng hô và từ ngữ:
- Chỉ cung cấp kiến thức lịch sử, phân tích và dẫn chứng học thuật.
- Trưng bày khách quan, trung lập
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userInput) => {
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("Không có API key khả dụng");
      return null;
    }

    setLoading(true);
    setError(null);

    const failedKeys = [];

    for (const keyToTry of availableKeys) {
      if (failedKeys.includes(keyToTry.version)) {
        continue;
      }

      try {
        const genAI = new GoogleGenAI({
          apiKey: keyToTry.key,
        });

        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: SYSTEM_PROMPT + "\n\n" + userInput,
        });

        setLoading(false);
        return response.text;
      } catch (err) {
        failedKeys.push(keyToTry.version);

        const isServiceUnavailable =
          err.message?.includes("503") ||
          err.status === 503 ||
          err.message?.includes("Service Unavailable");

        if (isServiceUnavailable) {
          const remainingKeys = availableKeys.filter(
            (k) => !failedKeys.includes(k.version),
          );
          if (remainingKeys.length > 0) {
            setError(
              "Dịch vụ tạm thời không khả dụng với \. Đang thử key khác...",
            );
            continue;
          }
        }

        const remainingKeys = availableKeys.filter(
          (k) => !failedKeys.includes(k.version),
        );
        if (remainingKeys.length === 0) {
          break;
        }
      }
    }

    setLoading(false);
    const errorMessage =
      failedKeys.length > 1
        ? "Tất cả API key đều gặp sự cố. Vui lòng thử lại sau vài phút. (Đã thử: " +
          failedKeys.join(", ") +
          ")"
        : "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.";

    setError(errorMessage);
    return null;
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
