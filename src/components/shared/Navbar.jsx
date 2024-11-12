"use client";
import { useEffect, useState } from "react";
import { Button, Dropdown, ConfigProvider } from "antd";
import Image from "next/image";
import { IoChatbubbles, IoLogOut, IoMenu, IoPerson } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const menu = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About App",
      link: "/about-app",
    },
    {
      name: "Dispatching",
      link: "/dispatching",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
    {
      name: "Recruit New Drivers",
      link: "/recruit-new-drivers",
    },
  ];

  // const profile = [
  //   {
  //     name: "Personal information",
  //     link: "/profile",
  //   },
  //   {
  //     name: "Chat with MVR",
  //     link: "",
  //   },
  // ];

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
            color: item.link === path ? "text-[#f5382c]" : "text-[#000106]",
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

  // if (path === "/") {
  //   dropdownItems.push({
  //     key: "signIn",
  //     label: (
  //       <Link href="/login">
  //         <Button
  //           className="py-5 w-full bg-transparent border-secondary-color text-secondary-color font-semibold duration-200 delay-75 rounded-lg shadow-md  drop-shadow-md"
  //           onMouseEnter={handleMouseEnter}
  //           onMouseLeave={handleMouseLeave}
  //         >
  //           Sign in
  //         </Button>
  //       </Link>
  //     ),
  //   });
  //   dropdownItems.push({
  //     key: "signup",
  //     label: (
  //       <Link href="/signup">
  //         <Button
  //           className="py-5 w-full bg-secondary-color border-secondary-color text-primary-color font-semibold duration-200 delay-75 rounded-lg shadow-md  drop-shadow-md"
  //           onMouseEnter={handleMouseEnter2}
  //           onMouseLeave={handleMouseLeave2}
  //         >
  //           Sign up
  //         </Button>
  //       </Link>
  //     ),
  //   });
  // }

  // const profileItems = profile.map((item, index) => ({
  //   key: String(index),
  //   label: (
  //     <Link href={item.link} key={index}>
  //       <Button
  //         className={`capitalize text-start font-medium flex justify-start items-center border-none hover:text-site-color hover:bg-transparent shadow-none text-lg w-full ${
  //           item.link === path ? "text-[#f5382c]" : "text-[#000106]"
  //         }`}
  //         onClick={() => select(index)}
  //       >
  //         {item.name === "Personal information" ? (
  //           <IoPerson className="text-site-color size-6 text-secondary-color" />
  //         ) : (
  //           <IoChatbubbles className="text-site-color size-6 text-secondary-color" />
  //         )}
  //         {item.name}
  //       </Button>
  //     </Link>
  //   ),
  // }));

  // profileItems.push({
  //   key: "signOut",
  //   label: (
  //     <Button
  //       className={`capitalize text-start font-medium flex justify-start items-center hover:bg-transparent border-none hover:text-site-color shadow-none text-lg w-full `}
  //     >
  //       <IoLogOut className="text-site-color size-6 text-secondary-color" />
  //       Log out
  //     </Button>
  //   ),
  // });

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#ffffff]">
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
                        ? "text-base-color rounded-none"
                        : "text-base-color "
                    }`}
                    style={{
                      backgroundColor: "transparent",
                      color: path === item.link ? "#ffe6b9" : "white",
                    }}
                    onClick={() => select(index)}
                  >
                    {/* {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className="inline-block h-6 w-6"
                      />
                    )} */}
                    <p className="mb-0">{item.name}</p>
                    {/* {item.link === path ? (
                      <p className="w-3 rounded-full bg-[#2B4257]"></p>
                    ) : (
                      <p className="w-3 rounded-full bg-transparent"></p>
                    )} */}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="lg:flex items-center hidden">
              {/* {path === "/" ? (
                <>
                  <Link href="/sign-in">
                    <Button
                      className="py-5 w-full bg-transparent border-secondary-color text-secondary-color font-semibold duration-200 delay-75 rounded-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Sign In
                    </Button>
                  </Link>

                  <Link href="/sign-up">
                    <Button
                      className="py-5 mx-3 bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-lg"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <>

                {/* Comment it when in work */}
              {/* <ConfigProvider
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
                  <Link href="/sign-up">
                    <Button
                      className="py-5 px-8 shadow-inner shadow-white mx-3 bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-lg"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Register
                    </Button>
                  </Link> */}
              {/* </>
              )} */}{" "}
              <Link
                href="/contact-us"
                className=" px-2 py-1 rounded-lg border-2 text-[#2B4257] border-[#2B4257] hover:bg-[#2B4257] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden">
            {/* {path !== "/" ? (
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {},
                  },
                }}
              >
                <Dropdown
                  menu={{ items: profileItems }}
                  placement="bottomRight"
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
              <div></div>
            )} */}
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
