import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Design the favicon dynamically using our official "Ascending Growth Pillars" branding
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B132B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          position: "relative",
          padding: "3px",
        }}
      >
        {/* Simplified Vector representation of the Ascending Pillars for 32x32 size */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "100%", width: "100%" }}>
          {/* Pillar 1 (Equity) */}
          <div style={{ background: "#1A7F5A", width: "5px", height: "10px", borderRadius: "1px" }} />
          {/* Pillar 2 (Futures) */}
          <div style={{ background: "#10B981", width: "5px", height: "16px", borderRadius: "1px" }} />
          {/* Pillar 3 (Options) */}
          <div style={{ background: "#38BDF8", width: "5px", height: "22px", borderRadius: "1px" }} />
          {/* Pillar 4 (Commodity) */}
          <div style={{ background: "#D97706", width: "5px", height: "28px", borderRadius: "1px" }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
