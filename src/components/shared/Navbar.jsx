"use client";
import { Button, ConfigProvider, Dropdown } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { IoChatbubbles, IoLogOut, IoMenu, IoPerson } from "react-icons/io5";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { decodedToken } from "@/utils/jwt";
import { clearAuth } from "@/redux/slices/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const [userData, setUserData] = useState(null);

  // Use useEffect to handle client-side logic
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      try {
        const userInfo = decodedToken(token);
        setUserData(userInfo);
      } catch (err) {
        setUserData(null);
      }
    }
  }, [token]);

  console.log(userData);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const select = (index) => {
    setSelected(index);
    setMobileMenuVisible(false);
  };

  const beforeLoginMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About App",
      link: "/about-app",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];
  const AfterLoginMenu = [
    {
      name: "Dispatching",
      link: "/dispatching",
    },
    {
      name: "Current Shipment",
      link: "/current-shipment",
    },
    {
      name: "Load Request",
      link: "/load-request",
    },
    {
      name: "Recruit New Drivers",
      link: "/recruit-new-drivers",
    },
  ];

  const menu = userData ? AfterLoginMenu : beforeLoginMenu;

  const dropdownItems = menu.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize font-medium  w-full ${
            item.link === path ? "text-[#2B4257]" : "text-[#000106]"
          }`}
          style={{
            backgroundColor: "transparent",
            color: item.link === path ? "text-[#2B4257]" : "text-[#000106]",
          }}
          onClick={() => select(index)}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              className="inline-block mr-1 h-6 w-6 text-[#F3F3F3]"
            />
          )}
          {item.name}
        </Button>
      </Link>
    ),
  }));

  const profile = [
    {
      name: "Personal information",
      link: "/profile",
    },
  ];

  const profileItems = profile.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize text-start font-medium flex justify-start items-center border-none hover:text-site-color hover:bg-transparent shadow-none text-lg w-full ${
            item.link === path ? "text-[#2B4257]" : "text-[#000106]"
          }`}
          onClick={() => select(index)}
        >
          {item.name === "Personal information" ? (
            <IoPerson className="text-site-color size-6 text-[#2B4257]" />
          ) : (
            <IoChatbubbles className="text-site-color size-6 text-[#2B4257]" />
          )}
          {item.name}
        </Button>
      </Link>
    ),
  }));

  if (!userData) {
    dropdownItems.push({
      key: "sign-in",
      label: (
        <Link href="/sign-in">
          <Button
            className="py-5 px-3 rounded-lg border-2 text-[#2B4257] border-[#2B4257] hover:bg-[#2B4257] hover:text-white"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Sign in
          </Button>
        </Link>
      ),
    });
    dropdownItems.push({
      key: "sign-up",
      label: (
        <Link href="/sign-up">
          <Button
            className="py-5 px-3 rounded-lg border-2 text-[#2B4257] border-[#2B4257] hover:bg-[#2B4257] hover:text-white"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Sign up
          </Button>
        </Link>
      ),
    });
  }

  profileItems.push({
    key: "signOut",
    label: (
      <Button
        onClick={() => {
          dispatch(clearAuth());
          router.refresh();
          toast.success("Sign out successfully!");
          setUserData(null);
        }}
        className={`capitalize text-start font-medium flex justify-start items-center hover:bg-transparent border-none hover:text-site-color shadow-none text-lg w-full `}
      >
        <IoLogOut className="text-site-color size-6 text-[#2B4257]" />
        Log out
      </Button>
    ),
  });

  return (
    <div className="sticky top-0 left-0 w-full  bg-[#ffffff] !z-[999999]">
      <Container>
        <div className="flex items-center justify-between py-5 ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <Image
                src={AllImages.logo}
                alt="logo"
                className="w-auto h-[40px]"
              />
            </Link>
            <div className="hidden lg:flex lg:justify-center space-x-4">
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Button
                    className={`flex flex-col items-center justify-center px-2 py-0 gap-0 cursor-pointer capitalize border-none font-medium xl:text-lg duration-200 hover:scale-110 shadow-none ${
                      item.link === path
                        ? " text-cyan-600 rounded"
                        : "text-base-color "
                    }`}
                    style={{
                      backgroundColor: "transparent",
                      color: path === item.link ? "#ffe6b9" : "white",
                    }}
                    onClick={() => select(index)}
                  >
                    <p className="mb-0">{item.name}</p>
                  </Button>
                </Link>
              ))}
            </div>
            <div className="lg:flex items-center gap-2 hidden">
              {userData ? (
                <ConfigProvider
                  theme={{
                    components: {
                      Dropdown: {},
                    },
                  }}
                >
                  <Dropdown
                    menu={{ items: profileItems }}
                    placement="bottomCenter"
                  >
                    <Image
                      src={AllImages.profile}
                      alt="profile_img"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px]"
                    />
                  </Dropdown>
                </ConfigProvider>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className=" px-2 py-1 rounded-lg border-2 text-[#2B4257] border-[#2B4257] hover:bg-[#2B4257] hover:text-white"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className=" px-2 py-1 rounded-lg border-2 text-[#2B4257] border-[#2B4257] hover:bg-[#2B4257] hover:text-white"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden">
            {userData && (
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {},
                  },
                }}
              >
                <Dropdown
                  menu={{ items: profileItems }}
                  placement="bottomCenter"
                >
                  <Image
                    src={AllImages.profile}
                    alt="profile_img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px]"
                  />
                </Dropdown>
              </ConfigProvider>
            )}
            <div className="lg:hidden">
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      colorBgElevated: "#F3F3F3",
                    },
                  },
                }}
              >
                <Dropdown
                  menu={{ items: dropdownItems }}
                  placement="bottomRight"
                >
                  <Button
                    shape="circle"
                    icon={
                      <IoMenu className="h-7 w-7 items-center justify-center   hover:text-[#2B4257] text-[#2B4257]" />
                    }
                    onClick={handleMobileMenuClick}
                  />
                </Dropdown>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
