import SessionInfo from "./components/session-info";

const RightSection: React.FC = () => {
  return (
    <section className="hidden lg:block sm:absolute lg:absolute right-0 h-full py-11 pr-11 w-1/2 bg-secondary main-section-figure min-h-[679px]">
      <div className="h-full bg-primary-foreground rounded-xl py-8">
        <SessionInfo />
        <main className="pt-12 w-full h-full flex items-end mt-[2px]">
          <img
            className="h-full w-full rounded-xl"
            src="right-section.png"
          ></img>
        </main>
      </div>
    </section>
  );
};

export default RightSection;
