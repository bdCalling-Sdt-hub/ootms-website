const { tagTypes } = require("../tagTypes");
const { baseApi } = require("./baseApi");

const CurrentShipmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentShipment: builder.query({
      query: ({ page }) => `/shipment/current?page=${page}&limit=9`,
      providesTags: [tagTypes.currentShipment],
    }),
  }),
});


export const {
    useGetCurrentShipmentQuery
}= CurrentShipmentApi