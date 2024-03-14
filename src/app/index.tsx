import Footer from "./octo-layout/footer";
import LeftSection from "./octo-layout/left-section";

import RightSection from "./octo-layout/right-section";
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
