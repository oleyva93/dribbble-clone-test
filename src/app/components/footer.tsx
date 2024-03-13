const Footer = () => {
  return (
    <footer className="bg-[#bfc88a] pl-11 pb-11 pr-11">
      <div className="h-full bg-[#f6fcd5] rounded-b-lg grid">
        <section className="flex items-end h-fit">
          <div className="h-16 w-full sm:w-[18rem] bg-[#d2abe4] banner-info-figure flex items-center justify-center pr-6 text-white font-bold">
            As seen on
          </div>
          <div className="hidden sm:block h-8 w-52 border-t-2 border-r-2 -ml-14 border-[#d2abe4] relative">
            <div className="absolute -right-[9px] bottom-0 h-2 w-4 arrow-dow-figure bg-[#d2abe4]" />
          </div>
        </section>
        <section className="grid sm:flex gap-y-6 sm:gap-x-10 p-4 sm:px-16 items-center h-fit relative">
          <span className="font-bold text-xl">TechCrunch</span>
          <span className="font-bold text-xl">Forbes</span>
          <span className="uppercase">The wall Street Journal</span>
          <div className="block sm:hidden absolute h-5/6 w-6 right-7 top-0 border-b-2 border-r-2 border-[#d2abe4]">
            <div className="absolute right-[19px] -bottom-[7px] h-3 w-4 arrow-left-figure bg-[#d2abe4]" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
