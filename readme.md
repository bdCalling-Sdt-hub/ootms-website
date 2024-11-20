// if (path === "/") {
// dropdownItems.push({
// key: "signIn",
// label: (
// <Link href="/login">
// <Button
// className="py-5 w-full bg-transparent border-secondary-color text-secondary-color font-semibold duration-200 delay-75 rounded-lg shadow-md drop-shadow-md"
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
// >
// Sign in
// </Button>
// </Link>
// ),
// });
// dropdownItems.push({
// key: "signup",
// label: (
// <Link href="/signup">
// <Button
// className="py-5 w-full bg-secondary-color border-secondary-color text-primary-color font-semibold duration-200 delay-75 rounded-lg shadow-md drop-shadow-md"
// onMouseEnter={handleMouseEnter2}
// onMouseLeave={handleMouseLeave2}
// >
// Sign up
// </Button>
// </Link>
// ),
// });
// }

<!--
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
            )} */} -->

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              borderRadiusLG: 20,
            },
          },
        }}
      >
        <Modal
          visible={isRequestModalVisible}
          onCancel={handleCancelRequest}
          footer={null}
          centered
          width={800}
        >
          <div className="p-5">
            <div className="flex justify-between space-x-36">
              {/* Driver Information */}
              <div className="w-full flex flex-col">
                <p className="text-2xl font-semibold">Driver’s Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Name: </p>
                      <div className="flex items-center gap-2">
                        <p>
                          <FaStar className="text-yellow-400" />
                        </p>
                        <p>4.5</p>
                        <p>NRShakib</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Phone: </p>
                      <p>123-456-789</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Email: </p>
                      <p>example@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Address: </p>
                      <p>Rupatoli, Barishal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck Information */}
              <div className="w-full flex flex-col">
                <p className="text-2xl font-semibold">Truck Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Truck Number: </p>
                      <p>DHK METRO HA 64-8549</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Trailer Size: </p>
                      <p>48-foot trailer.</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Pallet Spaces: </p>
                      <p>24 pallets.</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Availability: </p>
                      <p>Fully Available.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {/* Load Information */}
              <p className="text-2xl font-semibold">Load Information</p>
              <hr className="w-56 mb-4" />
              <div className="flex space-x-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg font-semibold">Load Type: </p>
                    <p>Dry Load</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Weight: </p>
                    <p>120 kg</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Pickup: </p>
                    <p>12-12-2024, Rupatoli, Barishal.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg font-semibold">Trailer Size: </p>
                    <p>48-foot trailer—24 pallets.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">HazMat: </p>
                    <p>Flammable Gas 2, Corrosive, Danger.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Delivery: </p>
                    <p>13-12-2024, Banasree, Dhaka.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button to find a new driver */}
            <div className="mt-8 text-center">
              <Button
                type="primary"
                size="large"

                className="bg-[#2B4257] px-4 rounded-lg"
              >
                Find A New Driver
              </Button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
