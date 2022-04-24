//Google Analytics関連のものは、このファイルにまとめる
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

//Google AnalyticsのID
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== "";

// PVを測定する
export const pageview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
  });
};

//RouterのURL書き換えが完了した時に発火するrouteChangeCompleteイベント
//のコールバックとしてpageview関数を設定
export function usePageView() {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export function GoogleAnalytics() {
  return (
    <>
      {existsGaId && (
        <>
          {/* Google Analytics の JS をサイトの実行に必要なスクリプトを読み込んでページがインタラクティブになった後に読み込む(For SEO) */}
          {/* strategy="afterInteractive" */}
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga" defer strategy="afterInteractive">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());    
                    gtag('config', '${GA_ID}');
                `}
          </Script>
        </>
      )}
    </>
  );
}

type ContactEvent = {
  action: "submit_form";
  category: "contact";
  label: string;
};

type ClickEvent = {
  action: "click";
  category: "other";
  label: string;
};

export type Event = ContactEvent | ClickEvent;
