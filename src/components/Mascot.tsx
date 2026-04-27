"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Mascot() {
  const { t } = useLanguage();
  return (
    <div className="mascot" aria-live="polite">
      <span className="mascot-bubble">{t.contact.mascotMessage}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/mascot.png" alt="Mascota prietenoasa pentru lectii" />
    </div>
  );
}
