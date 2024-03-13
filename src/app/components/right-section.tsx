const RightSection: React.FC = () => {
  return (
    <section className="absolute right-0 h-full py-11 pr-11 w-1/2 bg-[#dfe9a6] main-section-figure">
      <div className="h-full bg-[#d2aae4] rounded-t-lg py-8">
        <header className="flex justify-end gap-x-2 px-10">
          <button className="text-white text-xs font-bold px-4 py-2 rounded-md">
            Log in
          </button>
          <button className="text-[#d2abe4] text-xs font-bold px-4 py-2 bg-[rgb(71,78,33)]">
            Get a quote
          </button>
        </header>
        <main className="pt-12 w-full h-full flex items-end">
          <img className="h-full object-cover" src="right-image.webp"></img>
        </main>
      </div>
    </section>
  );
};

export default RightSection;
