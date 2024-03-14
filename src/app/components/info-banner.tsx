import { memo } from "react";

type InfoBannerProps = {
  fixed?: boolean;
};

const InfoBanner: React.FC<InfoBannerProps> = memo(
  ({ fixed = true }: InfoBannerProps) => {
    const fixedOrRelativeClass = fixed
      ? "hidden sm:fixed lg:fixed lg:flex"
      : "flex mt-5";
    return (
      <article
        className={`${fixedOrRelativeClass} z-30 w-[16rem] h-28 bg-white top-[20%] left-[47.2%] price-section-figure`}
      >
        <div className="bg-secondary-foreground p-2 flex items-center">
          <span className="uppercase font-bold text-sm [writing-mode:vertical-rl]">
            Covered
          </span>
        </div>
        <div className="w-full h-full px-9 flex items-center pt-4">
          <div className="relative">
            <span className="absolute z-10 -top-14 -left-6 rounded-full w-10 h-10 bg-center-text flex items-center justify-center font-bold text-xl text-primary">
              $
            </span>
            <span className="absolute -top-10 text-primary font-extrabold text-4xl z-50">
              500k
            </span>
          </div>
          <span className="mt-6 text-base text-primary font-light">
            $10.99 / month
          </span>
        </div>
      </article>
    );
  }
);

export default InfoBanner;
