import ReceiverNavbar from "@/components/shared/ReceiverNavbar";
import Footer from "../../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <ReceiverNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
