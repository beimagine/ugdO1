const ServerAPI = () => {
  const API_URL = "https://bitmemoir.com/api/v2/";

  async function crud(requestMethod, endpoint, data) {
    const requestOptions = {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };

    try {
      const response = await fetch(API_URL + endpoint + "/", requestOptions);

      if (response.status < 200 || response.status > 299) {
        throw response.status;
      }
      const responseData = await response.json();

      if (responseData["status"]) {
        responseData["modelStatus"] = responseData["status"];
      }
      responseData["status"] = response.status;
      return responseData;
    } catch (error) {
      console.error("API call error:", error);
      throw error;
    }
  }

  return { crud };
};

export default ServerAPI;
