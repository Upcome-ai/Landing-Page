import Image from "next/image";
import type { ReactNode } from "react";

type FeedItem = {
  breaking?: boolean;
  time: string;
  source: string;
  topic: string;
  headline: string;
};

const feedItems: FeedItem[] = [
  {
    breaking: true,
    time: "12s",
    source: "Fed newsroom",
    topic: "Central Banks",
    headline: "Federal Reserve announces emergency policy review",
  },
  {
    breaking: true,
    time: "58s",
    source: "Global wire",
    topic: "Technology",
    headline: "Major chipmaker halts production at flagship fab",
  },
  {
    time: "6m",
    source: "Company filing",
    topic: "Technology",
    headline: "8-K filed: CEO transition at $40B logistics firm",
  },
  {
    time: "4m",
    source: "Local desk",
    topic: "Geopolitics",
    headline: "Port strike escalates, key shipping routes disrupted",
  },
  {
    time: "7m",
    source: "Citizen report",
    topic: "Energy",
    headline: "On-ground reports: power outage spreading across grid",
  },
  {
    time: "9m",
    source: "Global wire",
    topic: "Markets & Macro",
    headline: "Bond yields slide as investors reprice risk",
  },
];

const tickerItems: { text: string; accent?: boolean }[] = [
  { text: "FED ▲ policy review" },
  { text: "WIRE ● chip fab halt", accent: true },
  { text: "PORTS ▼ strike" },
  { text: "8-K ● CEO change" },
  { text: "GRID ● outage", accent: true },
  { text: "CB ▲ rate signal" },
];

const features = [
  {
    icon: "●",
    title: "Real-time alerts",
    description:
      "The instant a source publishes, it lands in your feed. No refresh, no delay.",
  },
  {
    icon: "◇",
    title: "Personalized feed",
    description:
      "Choose the companies, topics, industries and events you actually care about.",
  },
  {
    icon: "▣",
    title: "Trusted sources",
    description:
      "Government filings, global & local news agencies, and verified citizen reports.",
  },
  {
    icon: "▲",
    title: "Faster than the market",
    description: "Know what's happening before it's priced in and act on it first.",
  },
];

const sourceChips = [
  "Government filings",
  "Global & local news agencies",
  "Citizen journalism",
  "Company announcements",
  "Politicians' posts",
  "Central bank statements",
  "Regulatory rulings",
  "Earnings & economic data",
  "Social sentiment",
];

const footerLinks = ["MVP", "Sources", "Privacy", "Contact"];

type SocialLink = {
  name: string;
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    href: "https://discord.gg/etZEZaYFM9",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
      >
        <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/+XmQWp44yS2hiYTFk",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
      >
        <path d="M23.953 4.57a1.62 1.62 0 0 0-1.667-.278L1.71 12.42c-.828.334-.822 1.51.01 1.834l5.243 2.055 2.03 6.526c.198.635.983.865 1.49.436l2.923-2.478 5.14 3.79c.557.412 1.354.126 1.53-.55l3.86-14.845a1.62 1.62 0 0 0-.983-1.618l.001-.001zM9.53 15.29l-.32 4.51-1.42-4.56 9.36-5.79c.14-.087.29.104.17.213l-7.77 7.017z" />
      </svg>
    ),
  },
];

function LiveDot() {
  return (
    <span className="animate-blink h-[7px] w-[7px] rounded-full bg-[#F5922E]" />
  );
}

function FeedCard({ item }: { item: FeedItem }) {
  return (
    <div
      className="rounded-xl border border-[#17171A] bg-[#0B0B0E] px-[18px] py-[15px]"
      style={{ borderLeft: `3px solid ${item.breaking ? "#F5922E" : "transparent"}` }}
    >
      <div className="mb-[9px] flex items-center gap-[9px]">
        {item.breaking && (
          <span className="rounded-[5px] bg-[#F5922E] px-2 py-[3px] font-mono text-[10px] font-semibold tracking-[0.12em] text-[#0A0A0A]">
            BREAKING
          </span>
        )}
        <span className="font-mono text-[12px] text-[#6E6E76]">{item.time}</span>
        <span className="font-mono text-[11.5px] text-[#9A9AA0]">{item.source}</span>
        <span className="ml-auto rounded-full border border-[#2A1E12] bg-[#140F09] px-[10px] py-[3px] text-[11px] text-[#C9946A]">
          {item.topic}
        </span>
      </div>
      <div className="text-[16px] leading-[1.32] font-semibold tracking-[-0.01em] text-[#EDEDEC]">
        {item.headline}
      </div>
    </div>
  );
}

export default function Home() {
  const loopedFeed = [...feedItems, ...feedItems];
  const loopedTicker = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden bg-[#08080A] text-[#ECECEA]">
      {/* nav */}
      <header className="flex items-center justify-between border-b border-[#17171A] px-10 py-5">
        <div className="flex items-center gap-[9px]">
          <Image
            src="/upcome-mark.svg"
            alt="Upcome"
            width={26}
            height={26}
            className="block h-[26px] w-[26px]"
          />
          <span className="text-[20px] font-semibold tracking-[-0.02em]">Upcome</span>
        </div>
        <div className="flex items-center gap-8 text-[14.5px] text-[#9A9AA0]">
          <a
            href="https://terminal.upcome.ai"
            className="rounded-lg bg-[#F5922E] px-[18px] py-[11px] font-semibold text-[#0A0A0A] hover:text-[#0A0A0A]"
          >
            Try the terminal
          </a>
        </div>
      </header>

      {/* hero split */}
      <div className="grid grid-cols-1 items-center gap-14 px-10 pt-[60px] pb-[56px] lg:grid-cols-2 lg:gap-[56px]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#33261A] bg-[#140F09] px-3 py-[7px] font-mono text-[12px] tracking-[0.14em] text-[#F5922E] uppercase">
            <LiveDot /> Live · real-time news terminal
          </div>
          <h1 className="mt-[22px] text-[56px] leading-[1.02] font-bold tracking-[-0.03em]">
            The moment it happens. Not a moment later.
          </h1>
          <p className="mt-[22px] max-w-[30ch] text-[19px] leading-[1.5] text-[#A6A6AC]">
            Upcome watches trusted sources in real time and pushes the updates
            that matter to you the instant they publish.
          </p>
          <div className="mt-[34px] flex gap-[14px]">
            <a
              href="https://terminal.upcome.ai"
              className="rounded-[9px] bg-[#F5922E] px-[26px] py-[15px] text-[16px] font-semibold text-[#0A0A0A] hover:text-[#0A0A0A]"
            >
              Try the terminal →
            </a>
            <a
              href="#how"
              className="rounded-[9px] border border-[#33333A] px-[26px] py-[15px] text-[16px] font-medium text-[#ECECEA] hover:text-[#ECECEA]"
            >
              How it works
            </a>
          </div>
          <div className="mt-[18px] font-mono text-[12.5px] tracking-[0.03em] text-[#6E6E76]">
            Free while in beta · no card required
          </div>
        </div>

        {/* terminal panel */}
        <div className="overflow-hidden rounded-[14px] border border-[#232328] bg-[#0C0C0F] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between border-b border-[#1C1C21] bg-[#0F0F12] px-[15px] py-[11px]">
            <div className="flex items-center gap-2 font-mono text-[12px] text-[#8A8A90]">
              <LiveDot />
              LIVE FEED
            </div>
            <div className="font-mono text-[12px] text-[#5C5C63]">
              MY TOPICS · 6 SOURCES
            </div>
          </div>

          {/* ticker */}
          <div className="overflow-hidden border-b border-[#1C1C21] bg-[#0A0A0C]">
            <div className="animate-marquee flex w-max gap-[26px] py-[9px] whitespace-nowrap font-mono text-[12.5px] text-[#9A9AA0]">
              {loopedTicker.map((t, i) => (
                <span key={i} className={t.accent ? "text-[#F5922E]" : undefined}>
                  {t.text}
                </span>
              ))}
            </div>
          </div>

          {/* scrolling feed */}
          <div className="relative h-[352px] overflow-hidden bg-[#08080A]">
            <div className="animate-feed flex flex-col gap-[10px] p-[14px]">
              {loopedFeed.map((item, i) => (
                <FeedCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* features strip */}
      <div
        id="how"
        className="grid grid-cols-1 gap-px border-t border-b border-[#17171A] bg-[#17171A] sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f) => (
          <div key={f.title} className="bg-[#08080A] px-[28px] py-[32px]">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[#33261A] bg-[#140F09] text-[17px] text-[#F5922E]">
              {f.icon}
            </div>
            <div className="mt-4 text-[16.5px] font-semibold tracking-[-0.01em]">
              {f.title}
            </div>
            <div className="mt-2 text-[13.5px] leading-[1.45] text-[#8A8A90]">
              {f.description}
            </div>
          </div>
        ))}
      </div>

      {/* sources */}
      <div className="border-b border-[#17171A] px-10 py-[44px] text-center">
        <div className="font-mono text-[12px] tracking-[0.16em] text-[#6E6E76] uppercase">
          Monitoring trusted sources — around the clock
        </div>
        <div className="mx-auto mt-3 max-w-[34ch] text-[22px] font-medium tracking-[-0.01em] text-[#C6C6C8] text-balance">
          Every signal that moves markets, watched in one place.
        </div>
        <div className="mx-auto mt-7 flex max-w-[820px] flex-wrap justify-center gap-3">
          {sourceChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-[9px] rounded-full border border-[#26261C] bg-[#0D0D10] px-[22px] py-[11px] font-mono text-[12px] tracking-[0.04em] text-[#C6C6C8]"
            >
              <span className="text-[#F5922E]">●</span>
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* cta band */}
      <div className="bg-[radial-gradient(120%_140%_at_50%_-20%,#1A1109_0%,#08080A_62%)] px-10 py-20 text-center">
        <h2 className="mx-auto max-w-[20ch] text-[40px] leading-[1.08] font-bold tracking-[-0.025em]">
          Know what moves the world before it moves the market.
        </h2>
        <a
          href="https://terminal.upcome.ai"
          className="mt-[30px] inline-block rounded-[9px] bg-[#F5922E] px-[30px] py-[16px] text-[17px] font-semibold text-[#0A0A0A] hover:text-[#0A0A0A]"
        >
          Try the terminal for free →
        </a>
        <div className="mt-4 font-mono text-[12.5px] text-[#6E6E76]">
          Free while in beta · no card required
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#26261C] bg-[#0D0D10] px-[18px] py-[9px] text-[13px] font-medium text-[#C6C6C8] transition-colors hover:border-[#F5922E] hover:text-[#F5922E]"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-col items-center gap-4 border-t border-[#17171A] px-[44px] py-[26px] text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/upcome-mark.svg"
            alt="Upcome"
            width={22}
            height={22}
            className="block h-[22px] w-[22px]"
          />
          <span className="text-[16px] font-semibold tracking-[-0.01em] text-[#C6C6C8]">
            Upcome
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-[26px] text-[13.5px] text-[#8A8A90]">
          {footerLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="text-[#8A8A90] transition-colors hover:text-[#F5922E]"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="font-mono text-[12px] text-[#5C5C63]">© 2026 Upcome</div>
        </div>
      </div>
    </div>
  );
}
