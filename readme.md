        <div className=" gap-5 ">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white  text-center mb-10 w-full">
            Available Trucks
          </p>
          <div className=" flex flex-col gap-5 overflow-x-auto overflow-y-clip">
            {allTrucks?.data?.attributes?.data?.map((data) => (
              <>
                <Trucks
                  key={data.key}
                  data={data}
                  setOpen={setOpen}
                  open={open}
                  setCurrentDriverModalData={setCurrentDriverModalData}
                  setDragData={setDragData}
                />
              </>
            ))}

            <div className="flex justify-center  mt-2">
              <ConfigProvider
                theme={{
                  components: {
                    Pagination: {
                      itemActiveBg: "#2b4257",
                      colorPrimary: "#F3F3F3",
                      colorPrimaryHover: "#F3F3F3",
                    },
                  },
                }}
              >
                <Pagination
                  onChange={(page) => setPage(page)}
                  pageSize={4}
                  current={page}
                  total={allTrucks?.data?.attributes?.pagination?.totalResults}
                />
              </ConfigProvider>
            </div>
            <Modal
              className="!rounded-lg "
              open={open}
              footer={null}
              onCancel={handleDriverModalCancel}
              mask={false}
              maskClosable={false} // Disable closing the modal when clicking outside
            >
              <div className="mt-5 rounded-lg ">
                {/* Header Text  */}
                {/* <div className="flex items-center gap-2 mx-auto p-2 bg-white">
                    <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
                      <span className="w-5 h-5 rounded-full bg-[#90BA7A]"></span>
                    </div>
                    <p className="text-lg font-semibold">
                      The truck is {currentDriverModalData?.availability} Not
                      complete
                    </p>
                  </div> */}
                {/* Track Details  */}
                <div className="bg-[#EEF2FC] p-3 rounded mt-2">
                  <div className="">
                    <p className="text-2xl font-semibold mb-1">
                      {currentDriverModalData?.truckNumber} weight{" "}
                      {currentDriverModalData?.weight}
                    </p>
                    <p className="text-lg font-semibold mb-1">
                      {currentDriverModalData?.trailerSize}-foot trailer—
                      {currentDriverModalData?.palletSpace} pallets
                    </p>
                  </div>
                </div>
                {/* Driver Details  */}
                <div className="bg-white flex justify-between items-center mt-5 p-3">
                  <div className="flex items-center gap-x-5">
                    <div className="p-1 rounded-full bg-[#2B4257] w-fit">
                      <Image
                        src={AllImages.user}
                        alt="user"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-12 h-12 "
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">
                        {currentDriverModalData?.driverName}
                      </p>
                      {/* <p className="mt-1 text-lg flex items-center">
                  <span className="pr-2 mr-1 border-r border-[#474747] flex items-center">
                    <IoMdStar className="text-[#FFCE31] mr-1 inline-block text-lg" />
                    4.65
                  </span>
                  <span>+995 654654</span>
                </p> */}
                    </div>
                  </div>
                  {/* <div className="p-3 rounded-full w-fit bg-[#FDFDFD] border border-[#DDDDDD]">
                      <FaPhone className="w-6 h-6" />
                    </div> */}
                </div>
                <div ref={inputRef} className="bg-[#EEF2FC] rounded-lg">
                  {/* Assign And Cancle  */}
                  <div className=" flex justify-center items-center gap-5 pt-5 p-3">
                    <Button
                      onClick={handleDriverModalCancel}
                      className="!bg-[#DDDDDD] w-full py-6 rounded-xl text-2xl font-semibold !text-black border border-[#2B4257]"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() =>
                        onAssignLoad(
                          currentDriverModalData?.driverId ||
                            currentDriverModalData?.driver,
                          dragData?._id
                        )
                      }
                      className="!bg-[#2B4257] w-full py-6 rounded-xl text-2xl font-semibold !text-white border border-[#2B4257]"
                    >
                      Assign Load
                    </Button>
                  </div>
                  {/* Drag Input  */}
                  <div className="  p-3">
                    {dragData ? (
                      <div className="my-6 overflow-x-auto">
                        {/* Shipper and Receiver Section */}
                        <Row
                          gutter={0}
                          style={{
                            textAlign: "center",
                            backgroundColor: "#d9d9f0",
                            border: "1px solid gray",
                          }}
                        >
                          <Col
                            xs={24}
                            sm={12}
                            style={{
                              padding: "10px",
                              fontWeight: "bold",
                              borderRight: "1px solid gray",
                            }}
                          >
                            Shipper
                          </Col>
                          <Col
                            xs={24}
                            sm={12}
                            style={{
                              padding: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            Receiver
                          </Col>
                        </Row>

                        <Row
                          gutter={0}
                          style={{
                            textAlign: "center",
                            border: "1px solid gray",
                          }}
                        >
                          <Col
                            xs={24}
                            sm={12}
                            style={{
                              padding: "10px",
                              borderRight: "1px solid #ccc",
                            }}
                          >
                            {dragData?.shipperName || "N/A"}
                          </Col>
                          <Col xs={24} sm={12} style={{ padding: "10px" }}>
                            {dragData?.receiverName || "N/A"}
                          </Col>
                        </Row>

                        {/* Data Table */}
                        <ConfigProvider
                          theme={{
                            components: {
                              Table: {
                                padding: 10,
                                margin: 10,
                                cellFontSize: 12,
                                headerBg: "rgb(189,196,222)",
                              },
                              Input: {
                                colorText: "rgb(255,255,255)",
                              },
                            },
                          }}
                        >
                          {console.log("dragData", dragData)}
                          <Table
                            columns={dragColumns}
                            dataSource={[dragData]}
                            rowKey="_id" // Use `_id` as a unique key for rows
                            pagination={false}
                            bordered
                            scroll={{ x: "max-content" }}
                            style={{
                              maxWidth: "100%",
                              overflowX: "hidden",
                            }}
                          />
                        </ConfigProvider>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xl text-center text-[#7D7D7D] mb-3">
                          - OR -
                        </p>
                        <div className="">
                          <Image
                            src={AllImages.drop}
                            alt="drag"
                            className="h-40 w-auto mx-auto"
                          />
                        </div>
                        <p className="text-2xl  text-center text-[#7D7D7D] my-2 font-semibold">
                          Drop Your Load Here
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
