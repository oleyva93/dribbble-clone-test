const Footer = () => {
  return (
    <footer className="bg-[#bfc88a] pl-11 pb-11 pr-11">
      <div className="h-full bg-[#f6fcd5] rounded-b-lg grid">
        <section className="flex items-end h-fit">
          <div className="h-16 w-full md:w-[18rem] bg-[#d2abe4] banner-info-figure flex items-center px-5 text-white font-bold">
            <span>As seen on!</span>
          </div>
          <div className="hidden md:block h-8 w-52 border-t-2 border-r-2 -ml-14 border-[#d2abe4] relative">
            <div className="absolute -right-[9px] bottom-0 h-2 w-4 arrow-dow-figure bg-[#d2abe4]" />
          </div>
        </section>
        <section className="grid md:flex gap-y-6 md:gap-x-10 p-4 md:px-12 items-center h-fit relative">
          <img src="tech-crunch-logo.png" className="w-36" />
          <img src="forbes-logo.png" className="w-24 -mt-[3px]" />
          <img src="tws-logo.png" className="w-48" />
          <div className="block md:hidden absolute h-[14.7vh] w-6 right-7 top-0 border-b-2 border-r-2 border-[#d2abe4]">
            <div className="absolute right-[19px] -bottom-[6px] h-3 w-4 arrow-left-figure bg-[#d2abe4]" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
