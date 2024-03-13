const Footer = () => {
  return (
    <footer className="bg-[#bfc88a] pl-11 pb-11">
      <div className="h-full bg-[#f6fcd5] rounded-b-lg grid">
        <section className="flex items-end h-fit">
          <div className="h-16 w-56 bg-[#d2abe4] banner-info-figure flex items-center justify-center pr-6 text-white font-bold">
            As seen on
          </div>
          <div className="h-8 w-56 border-t-2 border-r-2 -ml-8 border-[#d2abe4] relative">
            <div className="absolute -right-[9px] bottom-0 h-2 w-4 arrow-dow-figure bg-[#d2abe4]" />
          </div>
        </section>
        <section className="flex gap-x-10 px-16 items-center h-fit">
          <span className="font-bold text-xl">TechCrunch</span>
          <span className="font-bold text-xl">Forbes</span>
          <span className="uppercase">The wall Street Journal</span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
