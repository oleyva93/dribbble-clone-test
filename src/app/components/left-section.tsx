import { useSiteData } from "shared/hooks/useHeaderData";
import Header from "./header";

const LeftSection: React.FC = () => {
  const { data } = useSiteData();

  return (
    <section className="bg-[#ebf1ca] pl-11 pt-11">
      <div className="grid h-full bg-[#474e21] rounded-t-lg py-5 px-10">
        <Header />
        <main className="py-10 grid w-[42%] gap-y-2">
          <article
            className="text-[#eaff6c] text-4xl"
            dangerouslySetInnerHTML={{ __html: data.home["header-title"] }}
          />
          <button className="text-xs font-bold px-1 bg-[#eaff6c] w-56 h-11 shadow-[4px_4px_0px_0_#d2aae4]">
            {data.home["header-cta"]}
          </button>
        </main>
        <article className="fixed z-30 w-[16rem] h-28 bg-white top-[20%] left-[46.7%] price-section-figure flex">
          <div className="bg-[#f6fcd5] p-2 flex items-center">
            <span className="uppercase font-bold text-sm [writing-mode:vertical-rl]">
              Covered
            </span>
          </div>
          <div className="w-full h-full px-9 flex items-center pt-4">
            <div className="relative">
              <span className="absolute z-10 -top-14 -left-6 rounded-full w-10 h-10 bg-[#eaff6c] flex items-center justify-center font-bold text-xl text-[#474e21]">
                $
              </span>
              <span className="absolute -top-10 text-[#474e21] font-extrabold text-4xl z-50">
                500k
              </span>
            </div>
            <span className="mt-8 text-xl font-light">$10.99 / month</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LeftSection;
