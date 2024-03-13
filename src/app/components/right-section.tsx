import SessionInfo from "./session-info";

const RightSection: React.FC = () => {
  return (
    <section className="hidden lg:block sm:absolute lg:absolute right-0 h-full py-11 pr-11 w-1/2 bg-[#dfe9a6] main-section-figure">
      <div className="h-full bg-[#d2aae4] rounded-xl py-8">
        <SessionInfo />
        <main className="pt-12 w-full h-full flex items-end">
          <img
            className="h-full object-cover rounded-xl"
            src="right-image.webp"
          ></img>
        </main>
      </div>
    </section>
  );
};

export default RightSection;
