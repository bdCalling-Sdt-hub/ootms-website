import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import localFont from "next/font/local";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";
import FeedBack from "@/components/shared/FeedBack";
import Providers from "@/lib/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const skia = localFont({
  src: "./font/Skia.ttf",
  variable: "--skia",
});

export const metadata = {
  title: "OOTMS",
  description: "OOTMS Truch Loading App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-poppins ${skia.variable}`}>
        <Providers>
          <Toaster richColors />
          <AntdRegistry>
            <ConfigProvider theme={mainTheme}>
              {children} <FeedBack />
            </ConfigProvider>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
