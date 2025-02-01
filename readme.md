const onFinish = async (values) => {
const toastId = toast.loading("Assigning Diver...");

    const data = loadId?.map((loadData) => ({
      load: loadData,
      driver: values.driver,
    }));

    try {
      const res = await createLoadRequest(data).unwrap();

      localStorage.removeItem("myXlLoad");

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      navigate.push("/load-request?req=myRequest");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          error?.error ||
          "An error occurred during Login",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }

};
