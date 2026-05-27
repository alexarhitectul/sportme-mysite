"use client";
"use client";

import { useState } from "react";
import { PublicTopControls } from "../components/PublicTopControls";
import { SiteFooter } from "../components/SiteFooter";
import { useI18n } from "../app/i18n";
import type { TranslationKey } from "../app/translations";
import { openExternal } from "../utils/openExternal";
import dynamic from "next/dynamic";

const ManagerAccessModal = dynamic(() => import("./ManagerAccessModal"), { ssr: false });

export default function ManageriPageClient() {
  const { t } = useI18n();
  const [showManagerAccessModal, setShowManagerAccessModal] = useState(false);
  const adminUrl = "https://admin.sportme.ro/auth";
  const managerPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.sportme.dashboard";
  const StatusIcon = ({ active }: { active: boolean }) => (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`h-4 w-4 sm:h-5 sm:w-5 ${active ? "text-emerald-600" : "text-rose-500"}`}
    >
      {active ? (
        <path
          d="M4 10.5l3.2 3.2L16 5.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        />
      ) : (
        <>
          <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2.4" />
          <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2.4" />
        </>
      )}
    </svg>
  );

  const featureRows = [
    { label: t("pricing.compare.feature1"), freemium: true, starter: true, pro: true },
    { label: t("pricing.compare.feature2"), freemium: true, starter: true, pro: true },
    { label: t("pricing.compare.feature3"), freemium: true, starter: true, pro: true },
    { label: t("pricing.compare.feature4"), freemium: false, starter: true, pro: true },
    { label: t("pricing.compare.feature5"), freemium: false, starter: true, pro: true },
    { label: t("pricing.compare.feature6"), freemium: false, starter: true, pro: true },
    { label: t("pricing.compare.feature7"), freemium: false, starter: true, pro: true },
  ];

  const freemiumItemKeys: TranslationKey[] = [
    "pricing.new.freemium.item1",
    "pricing.new.freemium.item2",
    "pricing.new.freemium.item3",
    "pricing.new.freemium.item4",
  ];
  const sharedPremiumItemKeys: TranslationKey[] = [
    "pricing.new.premium.shared.item1",
    "pricing.new.premium.shared.item2",
    "pricing.new.premium.shared.item3",
    "pricing.new.premium.shared.item4",
    "pricing.new.premium.shared.item5",
    "pricing.new.premium.shared.item6",
  ];
  const premiumGainItemKeys: TranslationKey[] = [
    "pricing.new.gains.item1",
    "pricing.new.gains.item2",
    "pricing.new.gains.item3",
    "pricing.new.gains.item4",
    "pricing.new.gains.item5",
  ];
  const freemiumItems = freemiumItemKeys.map((key) => t(key));
  const sharedPremiumItems = sharedPremiumItemKeys.map((key) => t(key));
  const premiumGainItems = premiumGainItemKeys.map((key) => t(key));

  return (
    <main className="public-site public-dark min-h-screen text-white">
      <style jsx global>{`
        .pricing-table-scroll {
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          scrollbar-gutter: stable;
          scrollbar-width: auto;
          scrollbar-color: #9a9587 #ece7da;
        }

        .pricing-table-scroll::-webkit-scrollbar {
          height: 10px;
        }

        .pricing-table-scroll::-webkit-scrollbar-track {
          background: #ece7da;
          border-radius: 999px;
        }

        .pricing-table-scroll::-webkit-scrollbar-thumb {
          background: #9a9587;
          border-radius: 999px;
          border: 2px solid #ece7da;
        }
      `}</style>
      <div className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:space-y-8 sm:px-5 sm:py-6 lg:space-y-10 lg:py-10">
          <div className="flex justify-end">
            <PublicTopControls showBack />
          </div>

          <header className="grid gap-6 lg:gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a7566]">SportMe</p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{t("pricing.hero.title")}</h1>
              <p className="text-base font-semibold text-[#1f211f] sm:text-lg">{t("pricing.hero.subtitle")}</p>
              <p className="max-w-xl text-sm text-[#5b564b]">{t("pricing.hero.body")}</p>
            </div>
          </header>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-white p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <div className="pricing-table-scroll pb-2">
              <div className="min-w-0 md:min-w-[680px]">
                <div className="overflow-hidden rounded-2xl border border-[#e6e0d2]">
                  <div className="grid grid-cols-[42%_19.333%_19.333%_19.333%] items-start bg-[#f1f2f4] px-2 py-2 text-[11px] font-semibold text-[#1f211f] sm:grid-cols-[1.35fr_0.7fr_0.7fr_0.7fr] sm:px-3 sm:py-2.5 sm:text-xs md:grid-cols-[1.4fr_0.9fr_1fr_1fr] md:px-4 md:py-3 md:text-sm">
                    <span>{t("pricing.new.compare.feature")}</span>
                    <div className="flex min-w-0 w-full flex-col items-center text-center">
                      <div className="text-[11px] font-semibold text-[#1f211f] sm:text-xs md:text-sm">{t("pricing.new.compare.freemium")}</div>
                      <div className="text-[10px] font-normal text-[#5b564b] sm:text-[11px] md:text-xs">{t("pricing.new.compare.freemiumPrice")}</div>
                    </div>
                    <div className="flex min-w-0 w-full flex-col items-center text-center">
                      <div className="text-[11px] font-semibold leading-tight text-[#1f211f] sm:text-xs md:text-sm">
                        <span className="block">Premium</span>
                        <span className="block">Starter</span>
                      </div>
                      <div className="mt-1 text-[10px] font-normal text-[#5b564b] sm:text-[11px] md:text-xs">{t("pricing.new.compare.starterPrice")}</div>
                      <div className="mt-2 inline-flex min-h-[46px] items-center justify-center rounded-[18px] border-2 border-[#4aa3ff] bg-[#ffffff] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.03em] text-[#0b84ff] shadow-[0_6px_14px_rgba(13,132,255,0.16)] sm:mt-1 sm:min-h-0 sm:rounded-full sm:px-2 sm:py-0.5 sm:text-[10px] md:text-[11px] md:tracking-[0.08em]">
                        {t("pricing.new.starter.limit")}
                      </div>
                    </div>
                    <div className="flex min-w-0 w-full flex-col items-center text-center">
                      <div className="text-[11px] font-semibold leading-tight text-[#1f211f] sm:text-xs md:text-sm">
                        <span className="block">Premium</span>
                        <span className="block">Pro</span>
                      </div>
                      <div className="mt-1 text-[10px] font-normal text-[#5b564b] sm:text-[11px] md:text-xs">{t("pricing.new.compare.proPrice")}</div>
                      <div className="mt-2 inline-flex min-h-[46px] items-center justify-center rounded-[18px] border-2 border-[#4aa3ff] bg-[#ffffff] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.03em] text-[#0b84ff] shadow-[0_6px_14px_rgba(13,132,255,0.16)] sm:mt-1 sm:min-h-0 sm:rounded-full sm:px-2 sm:py-0.5 sm:text-[10px] md:text-[11px] md:tracking-[0.08em]">
                        {t("pricing.new.pro.limit")}
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-[#e6e0d2]">
                    {featureRows.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[42%_19.333%_19.333%_19.333%] items-center px-2 py-2.5 text-[12px] text-[#1f211f] sm:grid-cols-[1.35fr_0.7fr_0.7fr_0.7fr] sm:px-3 sm:text-sm md:grid-cols-[1.4fr_0.9fr_1fr_1fr] md:px-4 md:py-3"
                      >
                        <span>{row.label}</span>
                        <span className="flex justify-center">
                          <StatusIcon active={row.freemium} />
                        </span>
                        <span className="flex justify-center">
                          <StatusIcon active={row.starter} />
                        </span>
                        <span className="flex justify-center">
                          <StatusIcon active={row.pro} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 sm:space-y-6">
            <div className="relative pt-16 lg:pt-0">
              <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 hidden rounded-2xl border-2 border-emerald-300 bg-[linear-gradient(135deg,rgba(7,31,24,0.84),rgba(18,67,48,0.8))] px-5 py-4 text-center shadow-[0_18px_45px_rgba(0,0,0,0.28)] lg:left-2 lg:right-2 lg:top-[56%] lg:block lg:-translate-y-1/2 lg:-rotate-[6deg]">
                <span className="block text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-[#7dffb2] drop-shadow-[0_2px_10px_rgba(32,255,142,0.35)]">
                  {t("pricing.new.trialBannerLine1")}
                </span>
                <span className="mt-1 block text-[18px] font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]">
                  {t("pricing.new.trialBannerLine2")}
                </span>
              </div>
              <p className="text-center text-sm font-semibold text-[#5b564b]">{t("pricing.new.selector")}</p>
              <p className="text-center text-sm font-semibold text-[#1f211f]">{t("pricing.new.proHighlight")}</p>

              <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                <div className="relative rounded-[24px] border border-[#d8d1bf] bg-[#f1f2f4] p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
                  <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.freemium.title")}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#1f211f]">{t("pricing.new.freemium.subtitle")}</p>
                  <div className="pointer-events-none relative z-10 mt-16 -mb-28 lg:hidden">
                    <div className="rotate-[-5deg] rounded-xl border-2 border-emerald-300 bg-[linear-gradient(135deg,rgba(7,31,24,0.82),rgba(18,67,48,0.78))] px-3 py-2 text-center shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
                      <span className="block text-[15px] font-extrabold leading-tight tracking-[-0.02em] text-[#7dffb2]">
                        {t("pricing.new.trialBannerLine1")}
                      </span>
                      <span className="mt-0.5 block text-[13px] font-bold leading-tight text-white">
                        {t("pricing.new.trialBannerLine2")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-[#5b564b]">
                    {freemiumItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#5b564b]">{t("pricing.new.freemium.note")}</p>
                  <div className="relative mt-5">
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-[#1f211f] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1f211f] opacity-60 sm:w-auto lg:mt-5"
                    >
                      {t("pricing.new.freemium.cta")}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-[#7a7566]">* {t("pricing.new.freemium.noteCta")}</p>
                </div>

                <div className="relative rounded-[24px] border border-[#d8d1bf] bg-white p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
                  <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.starter.title")}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#1f211f]">{t("pricing.new.starter.subtitle")}</p>
                  <div className="mt-3 rounded-xl border-2 border-[#4aa3ff] bg-[#ffffff] px-3 py-2 text-sm font-normal uppercase tracking-[0.1em] text-[#0b84ff] shadow-[0_10px_22px_rgba(13,132,255,0.14)]">
                    {t("pricing.new.starter.limit")}
                  </div>
                  <div className="pointer-events-none relative z-10 mt-16 -mb-28 lg:hidden">
                    <div className="rotate-[-5deg] rounded-xl border-2 border-emerald-300 bg-[linear-gradient(135deg,rgba(7,31,24,0.82),rgba(18,67,48,0.78))] px-3 py-2 text-center shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
                      <span className="block text-[15px] font-extrabold leading-tight tracking-[-0.02em] text-[#7dffb2]">
                        {t("pricing.new.trialBannerLine1")}
                      </span>
                      <span className="mt-0.5 block text-[13px] font-bold leading-tight text-white">
                        {t("pricing.new.trialBannerLine2")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-[#5b564b]">
                    {sharedPremiumItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#5b564b]">{t("pricing.new.starter.note")}</p>
                  <div className="relative mt-5">
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-[#1f211f] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1f211f] opacity-60 sm:w-auto lg:mt-5"
                    >
                      {t("pricing.new.starter.cta")}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-[#7a7566]">* {t("pricing.new.starter.noteCta")}</p>
                </div>

                <div className="relative rounded-[24px] border-2 border-[#1f211f] bg-white p-4 shadow-[0_30px_65px_-38px_rgba(32,33,31,0.75)] sm:rounded-[28px] sm:p-6">
                  <div className="inline-flex items-center rounded-full border border-[#1f211f] bg-[#f1f2f4] px-3 py-1 text-xs font-semibold text-[#1f211f]">
                    {t("pricing.new.pro.badge")}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.pro.title")}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#1f211f]">{t("pricing.new.pro.subtitle")}</p>
                  <div className="mt-3 rounded-xl border-2 border-[#4aa3ff] bg-[#ffffff] px-3 py-2 text-sm font-normal uppercase tracking-[0.1em] text-[#0b84ff] shadow-[0_10px_22px_rgba(13,132,255,0.14)]">
                    {t("pricing.new.pro.limit")}
                  </div>
                  <div className="pointer-events-none relative z-10 mt-16 -mb-28 lg:hidden">
                    <div className="rotate-[-5deg] rounded-xl border-2 border-emerald-300 bg-[linear-gradient(135deg,rgba(7,31,24,0.82),rgba(18,67,48,0.78))] px-3 py-2 text-center shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
                      <span className="block text-[15px] font-extrabold leading-tight tracking-[-0.02em] text-[#7dffb2]">
                        {t("pricing.new.trialBannerLine1")}
                      </span>
                      <span className="mt-0.5 block text-[13px] font-bold leading-tight text-white">
                        {t("pricing.new.trialBannerLine2")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-[#5b564b]">
                    {sharedPremiumItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#5b564b]">{t("pricing.new.pro.note")}</p>
                  <div className="relative mt-5">
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-[#1877F2] bg-[#1877F2] px-5 py-2 text-center text-sm font-semibold text-white opacity-60 sm:w-auto lg:mt-5"
                    >
                      {t("pricing.new.pro.cta")}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-[#7a7566]">* {t("pricing.new.pro.noteCta")}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-white p-4 text-center shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.final.title")}</h3>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[#1877F2] bg-[#1877F2] px-6 py-3 text-base font-semibold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0f6de5] sm:w-auto"
              onClick={() => setShowManagerAccessModal(true)}
            >
              <span className="mr-2 text-[18px]">{"\uD83D\uDC49"}</span>
              {t("pricing.new.final.cta")}
            </button>
          </section>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-white p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.gains.title")}</h3>
            <div className="mt-4 space-y-2 text-sm text-[#5b564b]">
              {premiumGainItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-[#1f211f]">{t("pricing.new.gains.line")}</p>
          </section>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-[#f1f2f4] p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.risk.title")}</h3>
            <div className="mt-4 space-y-2 text-sm text-[#5b564b]">
              <p>{t("pricing.new.risk.item1")}</p>
              <p>{t("pricing.new.risk.item2")}</p>
              <p>{t("pricing.new.risk.item3")}</p>
              <p>{t("pricing.new.risk.item4")}</p>
            </div>
          </section>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-white p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("pricing.new.faq.title")}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#e6e0d2] bg-[#f1f2f4] p-4">
                <p className="text-sm font-semibold text-[#1f211f]">{t("pricing.new.faq.q1")}</p>
                <p className="mt-2 text-sm text-[#5b564b]">{t("pricing.new.faq.a1")}</p>
              </div>
              <div className="rounded-2xl border border-[#e6e0d2] bg-[#f1f2f4] p-4">
                <p className="text-sm font-semibold text-[#1f211f]">{t("pricing.new.faq.q2")}</p>
                <p className="mt-2 text-sm text-[#5b564b]">{t("pricing.new.faq.a2")}</p>
              </div>
              <div className="rounded-2xl border border-[#e6e0d2] bg-[#f1f2f4] p-4">
                <p className="text-sm font-semibold text-[#1f211f]">{t("pricing.new.faq.q3")}</p>
                <p className="mt-2 text-sm text-[#5b564b]">{t("pricing.new.faq.a3")}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-[#d8d1bf] bg-white p-4 shadow-[0_25px_50px_-40px_rgba(32,33,31,0.6)] sm:rounded-[28px] sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-[#7a7566]">{t("about.managers.label")}</p>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d8d1bf] bg-[#f1f2f4] px-3 py-2 text-xs font-semibold text-[#1f211f]">
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#d8d1bf] bg-white">
                    <img src="/logo-512admin.png" alt="Admin SportMe logo" className="h-full w-full object-cover" />
                  </span>
                  <span>{t("about.managers.badge")}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1f211f] sm:text-xl">{t("about.managers.title")}</h3>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1877F2] bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0f6de5]"
                onClick={() => setShowManagerAccessModal(true)}
              >
                {t("pricing.new.final.cta")}
              </button>
            </div>
            <div className="mt-6 grid gap-4 text-sm text-[#5b564b] md:grid-cols-2 xl:grid-cols-3">
              {[
                ["about.managers.bookingsTitle", "about.managers.bookingsItem1", "about.managers.bookingsItem2", "about.managers.bookingsItem3"],
                ["about.managers.occupancyTitle", "about.managers.occupancyItem1", "about.managers.occupancyItem2", "about.managers.occupancyItem3"],
                ["about.managers.managementTitle", "about.managers.managementItem1", "about.managers.managementItem2", "about.managers.managementItem3"],
                ["about.managers.communicationTitle", "about.managers.communicationItem1", "about.managers.communicationItem2", "about.managers.communicationItem3"],
                [
                  "about.managers.whyTitle",
                  "about.managers.whyItem1",
                  "about.managers.whyItem2",
                  "about.managers.whyItem3",
                  "about.managers.whyItem4",
                  "about.managers.whyItem5",
                  "about.managers.whyItem6",
                  "about.managers.whyItem7",
                ],
                ["about.managers.securityTitle", "about.managers.securityItem1", "about.managers.securityItem2", "about.managers.securityItem3"],
                ["about.managers.startTitle", "about.managers.startItem1", "about.managers.startItem2", "about.managers.startItem3", "about.managers.startItem4"],
                ["about.managers.forTitle", "about.managers.forItem1", "about.managers.forItem2", "about.managers.forItem3", "about.managers.forItem4"],
                ["about.managers.ctaTitle", "about.managers.ctaBody", "about.managers.ctaAction"],
              ].map(([titleKey, ...itemKeys]) => (
                <div key={titleKey} className="rounded-2xl border border-[#e6e0d2] bg-[#f1f2f4] p-4">
                  <p className="font-semibold text-[#1f211f]">{t(titleKey as TranslationKey)}</p>
                  <div className="mt-2 space-y-1">
                    {itemKeys.map((key) => (
                      <p key={key}>{t(key as TranslationKey)}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SiteFooter />
        </div>
      </div>
      {showManagerAccessModal ? (
        <ManagerAccessModal
          onClose={() => setShowManagerAccessModal(false)}
          adminUrl={adminUrl}
          managerPlayStoreUrl={managerPlayStoreUrl}
        />
      ) : null}
    </main>
  );
}
