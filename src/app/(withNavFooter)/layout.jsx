import FeedBack from "@/components/shared/FeedBack";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        {children} <FeedBack />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
