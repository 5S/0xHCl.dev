"use client";

import { useEffect, useState } from "react";

const STORE_URL = {
  ios: "https://apps.apple.com/us/app/eventlens/id6753732968",
  android: "https://play.google.com/store/apps/details?id=dev.zerohexhcl.eventlens",
} as const;

type Platform = keyof typeof STORE_URL;

const detectPlatform = (userAgent: string): Platform | null => {
  const ua = userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) {
    return "ios";
  }

  if (/android/.test(ua)) {
    return "android";
  }

  return null;
};

export default function EventLensRedirect() {
  const [status, setStatus] = useState<"checking" | "redirected" | "unknown">(
    "checking",
  );
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const platform = detectPlatform(ua);

    if (platform) {
      const url = STORE_URL[platform];
      setTargetUrl(url);
      setStatus("redirected");
      window.location.replace(url);
      return;
    }

    setStatus("unknown");
  }, []);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-[#9198a1]">
          イベントレンズ
        </p>
        <h1 className="text-2xl font-bold">EventLens</h1>
        <p className="text-sm text-[#9198a1]">
          数秒待ってもページが切り替わらない場合は、下記のリンクから直接ストアを開いてください。
        </p>
      </header>

      <section className="space-y-4">
        <StatusMessage status={status} />
        <StoreLinks />
      </section>

      {targetUrl && (
        <p className="text-xs text-[#9198a1]">
          自動遷移先: <span className="break-all">{targetUrl}</span>
        </p>
      )}
    </div>
  );
}

const StatusMessage = ({
  status,
}: {
  status: "checking" | "redirected" | "unknown";
}) => {
  if (status === "checking") {
    return <p>端末を判定しています…</p>;
  }

  if (status === "redirected") {
    return <p>まもなくアプリストアに移動します。</p>;
  }

  return (
    <p>
      端末を判定できませんでした。以下のボタンから該当するアプリストアを開いてください。
    </p>
  );
};

const StoreLinks = () => (
  <div className="flex flex-col gap-4 md:flex-row">
    <a
      className="rounded-md border border-[#30363d] px-4 py-3 text-center hover:border-white"
      href={STORE_URL.ios}
      target="_blank"
      rel="noopener noreferrer"
    >
      App Storeで開く（iOS）
    </a>
    <a
      className="rounded-md border border-[#30363d] px-4 py-3 text-center hover:border-white"
      href={STORE_URL.android}
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Playで開く（Android）
    </a>
  </div>
);
