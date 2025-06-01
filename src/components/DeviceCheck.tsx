"use client";

import { useEffect, useState } from "react";

export default function DeviceCheck({ children }: { children: React.ReactNode }) {
  const [device, setDevice] = useState<string>("");

  useEffect(() => {
    const responsiveCheck = () => {
      if (window.innerWidth < 768) {
        return "mobile";
      } else if (window.innerWidth < 1024) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    setDevice(responsiveCheck());
    const handleResize = () => setDevice(responsiveCheck());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (device === "desktop") {
    return <>{children}</>;
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>please use desktop</span>
      </div>
    );
  }
} 