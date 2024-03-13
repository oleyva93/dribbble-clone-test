import Footer from "./components/footer";
import LeftSection from "./components/left-section";

import RightSection from "./components/right-section";
import "./index.css";

const OctoApp = () => {
  return (
    <main className="grid [grid-template-rows:1fr_.336fr] h-[100dvh] min-h-[679px]">
      <LeftSection />
      <RightSection />
      <Footer />
    </main>
  );
};

export default OctoApp;
