type SectionHeaderProps = {
  title: string;
  text?: string;
  kicker?: string;
  align?: "left" | "center";
};

export function SectionHeader({ title, text, kicker, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? (
        <p className="mb-4 font-body text-sm font-bold text-ember">{kicker}</p>
      ) : null}
      <h2 className="font-display text-[clamp(2.15rem,4.6vw,4.35rem)] leading-[1] text-cream text-balance">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-[66ch] text-[1.05rem] leading-8 text-taupe text-pretty sm:text-lg">{text}</p> : null}
    </div>
  );
}
