import Footer from "./octo-layout/footer";
import LeftSection from "./octo-layout/left-section";

import RightSection from "./octo-layout/right-section";
import "./index.css";

const OctoApp = () => {
  return (
    <main className="grid grid-rows-octo h-dvh min-h-octo-screen">
      <LeftSection />
      <RightSection />
      <Footer />
    </main>
  );
};

export default OctoApp;
