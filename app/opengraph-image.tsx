import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "전생탐정 - 사주로 알아보는 나의 전생";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 고정된 별빛 위치 (Math.random() 사용 금지 - 정적 생성 중 일관성 보장)
const STARS = [
  { x: 5, y: 8, r: 2 }, { x: 12, y: 22, r: 1.5 }, { x: 18, y: 5, r: 1 },
  { x: 25, y: 35, r: 2.5 }, { x: 32, y: 15, r: 1 }, { x: 40, y: 28, r: 2 },
  { x: 48, y: 10, r: 1.5 }, { x: 55, y: 42, r: 1 }, { x: 62, y: 18, r: 2 },
  { x: 70, y: 30, r: 1.5 }, { x: 78, y: 8, r: 2.5 }, { x: 85, y: 45, r: 1 },
  { x: 92, y: 20, r: 2 }, { x: 8, y: 65, r: 1.5 }, { x: 15, y: 80, r: 1 },
  { x: 22, y: 55, r: 2 }, { x: 35, y: 70, r: 1.5 }, { x: 45, y: 88, r: 1 },
  { x: 58, y: 60, r: 2.5 }, { x: 65, y: 75, r: 1 }, { x: 72, y: 52, r: 2 },
  { x: 80, y: 68, r: 1.5 }, { x: 88, y: 82, r: 1 }, { x: 95, y: 58, r: 2 },
  { x: 3, y: 45, r: 1 }, { x: 97, y: 35, r: 1.5 }, { x: 50, y: 90, r: 1 },
  { x: 20, y: 92, r: 2 }, { x: 75, y: 90, r: 1.5 }, { x: 42, y: 3, r: 2 },
];

export default async function Image() {
  // 한글 폰트 로드 (Noto Sans KR)
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgm203Tq4JJWq209pU0DPdWuqxJco4H6RFT.0.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #080416 0%, #150933 35%, #0e1a3a 65%, #04091a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 별빛 파티클 */}
        {STARS.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.r * 2}px`,
              height: `${star.r * 2}px`,
              borderRadius: "50%",
              background: i % 3 === 0 ? "#D4AF37" : "#C8B8FF",
              opacity: 0.6 + (i % 4) * 0.1,
            }}
          />
        ))}

        {/* 배경 원형 글로우 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(120,60,220,0.15) 0%, transparent 70%)",
          }}
        />

        {/* 메인 콘텐츠 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* 수정구슬 이모지 */}
          <div style={{ fontSize: "96px", lineHeight: 1, marginBottom: "20px" }}>
            🔮
          </div>

          {/* 서비스명 */}
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              color: "#D4AF37",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "16px",
              textShadow: "0 0 40px rgba(212,175,55,0.4)",
            }}
          >
            전생탐정
          </div>

          {/* 구분선 */}
          <div
            style={{
              width: "320px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #9B6DFF, #D4AF37, #9B6DFF, transparent)",
              marginBottom: "20px",
            }}
          />

          {/* 슬로건 */}
          <div
            style={{
              fontSize: "34px",
              color: "#E8DEFF",
              letterSpacing: "3px",
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            사주팔자로 알아보는 나의 전생
          </div>

          {/* 기능 태그 */}
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            {["60가지 전생 유형", "오행 분석", "친구와 비교"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  background: "rgba(155,109,255,0.18)",
                  border: "1px solid rgba(155,109,255,0.4)",
                  color: "#C8B8FF",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoSansKR",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
