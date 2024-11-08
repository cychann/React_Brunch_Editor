type AddressData = {
  id: string;
  place_name: string;
  road_address_name: string;
  place_url: string;
};

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

export const fetchPlaceData = async (query: string) => {
  if (!query) {
    return [];
  }

  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("네트워크 응답이 정상이 아닙니다.");
    }

    const data = await response.json();
    return data.documents.map(
      ({ id, place_name, road_address_name, place_url }: AddressData) => ({
        id,
        name: place_name,
        address: road_address_name,
        url: place_url,
      })
    );
  } catch (error) {
    console.error("검색 중 오류 발생:", error);
    return [];
  }
};
