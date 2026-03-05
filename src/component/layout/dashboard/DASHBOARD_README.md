# Dashboard Hero Section - Vietnamese Historical Theme

## Tổng quan

Trang dashboard đã được refactor hoàn toàn để phù hợp với chủ đề lịch sử kháng chiến chống Mỹ (1954-1975), thay thế cho trang MuseumHero.js cũ.

## Các thay đổi chính

### 1. Màu sắc và Theme

- **Màu chủ đạo**: Sử dụng palette màu từ `globals.css`
  - `--lacquer-red`: Đỏ sơn mài (màu chính)
  - `--lacquer-gold`: Vàng sơn mài (màu nhấn)
  - `--museum-cream`: Màu kem bảo tàng (nền)
  - `--jade-green`: Xanh ngọc (màu phụ)
  - `--museum-brown`: Nâu gỗ (văn bản)

### 2. Nội dung Historical Images

15 hình ảnh lịch sử được lấy từ các file trong thư mục `library`:

- Hiệp định Giơnevơ 1954
- Phong trào Đồng Khởi 1960
- Chiến thắng Ấp Bắc 1963
- Xây dựng Miền Bắc XHCN
- Đường Trường Sơn Huyền thoại
- Phòng không nhân dân
- Chiến dịch Điện Biên Phủ trên không
- Đại thắng mùa Xuân 1975
- Giải phóng Sài Gòn
- Và nhiều hơn nữa...

### 3. Navigation Cards

Ba cards điều hướng chính:

1. **Thư Viện Lịch Sử** (`/giaidap`) - Màu đỏ sơn mài
2. **Trắc Nghiệm Lịch Sử** (`/quiz`) - Màu xanh ngọc
3. **Trợ Lý AI** (`/ai-usage`) - Màu vàng sơn mài

### 4. Hiệu ứng và Animation

- Badge floating animation
- Gradient shift trên title
- Hover effects trên navigation cards
- Parallax scrolling cho historical images
- Scroll indicator với bounce animation
- Pattern overlay theo phong cách Việt Nam

### 5. Learning Outcomes (CLO)

- **CLO2**: Phân tích sự lãnh đạo của Đảng trong kháng chiến chống Mỹ
- **CLO4**: Củng cố niềm tin vào sự lãnh đạo của Đảng

## Cấu trúc Files

```
src/
├── app/
│   └── dashboard/
│       └── page.js (Updated - Historical content)
└── component/
    └── layout/
        └── dashboard/
            ├── sections/
            │   ├── hero-section.jsx (Updated - Main hero component)
            │   └── hero-section.css (New - Custom styles)
            ├── ui/
            │   └── hero-parallax.jsx (Updated - Historical theme)
            └── elements/
                └── flipwords/
                    └── flipwords.jsx (Updated - Historical words)
```

## Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Grid layout tự động điều chỉnh
- Typography scales với viewport

## Accessibility

- Semantic HTML structure
- Alt text cho tất cả images
- Proper heading hierarchy (h1, h2)
- ARIA labels cho interactive elements
- Color contrast theo WCAG guidelines

## Performance

- Image lazy loading (built-in Next.js)
- CSS animations với GPU acceleration
- Minimal re-renders với React memoization
- Optimized parallax với Framer Motion

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Cách sử dụng

```jsx
import HeroSection from "@/component/layout/dashboard/sections/hero-section";

// In your page component
<HeroSection
  historicalImages={historicalImages}
  navigationCards={navigationCards}
/>;
```

## Credits

- Historical images: Various Vietnamese archives
- Design inspiration: Vietnamese museum aesthetics
- Color palette: Traditional Vietnamese lacquerware
- Typography: Fraunces (elegant serif)

---

**Note**: Trang này đã thay thế hoàn toàn `MuseumHero.js` và trở thành trang chính của ứng dụng.
