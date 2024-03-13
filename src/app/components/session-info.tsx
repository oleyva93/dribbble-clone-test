import DrawerSidebar from "./drawer-sidebar";

const SessionInfo: React.FC = () => {
  return (
    <header className="flex justify-end gap-x-2 lg:px-10 h-fit">
      <DrawerSidebar />
      <button className="text-white text-xs font-bold px-4 py-2 rounded-md hidden sm:block">
        Log in
      </button>
      <button className="text-[rgb(71,78,33)] lg:text-[#d2abe4] text-xs font-bold px-4 py-2 bg-[#d2abe4] lg:bg-[rgb(71,78,33)] hidden sm:block">
        Get a quote
      </button>
    </header>
  );
};

export default SessionInfo;
