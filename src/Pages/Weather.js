import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  // const API_KEY = "996a44cbb581ae3e49638b763e125be5";
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const city = {
    서울: 108,
    인천: 112,
    부산: 159,
    제주: 184,
    동두천: 98,
    대관령: 100,
    대구: 143,
    전주: 146,
    울산: 152,
    광주: 156,
  };

  const API_KEY =
    "6AMwmJyU3pjfWMiZVS%2B29cee3QCPWLvSiDSTaquzvkLoI4GdvkP2QDQz3Fow5DFxZYvFDV1vd0Tkg2evL3EmGQ%3D%3D";
  const Params = {
    startDt: "20230406",
    startHh: "12",
    endDt: "20230406",
    endHh: "12",
    stnIds: city[location],
  };
  console.log(city[location]);
  const url = `http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?dataCd=ASOS&dateCd=HR&startDt=${Params.startDt}&startHh=${Params.startHh}&endDt=${Params.endDt}&endHh=${Params.endHh}&stnIds=${Params.stnIds}&dataType=JSON&ServiceKey=${API_KEY}`;
  const handleClick = async () => {
    try {
      await axios.get(url).then((response) => {
        setWeatherData(response.data.response.body.items.item[0]);
        console.log(response.data.response.body.items.item[0]);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const { tm, stnNm, ta, rn, hm } = weatherData;

  return (
    <WeatherContainer>
      <div className="title">
        <h2> 어제</h2>
        <input
          type="text"
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <h2>의 날씨</h2>
        <button onClick={handleClick}>날씨 조회</button>
      </div>
      <h4>
        {" "}
        검색 가능한 도시 : 서울, 인천, 부산, 전주, 울산, 광주, 대구, 제주,
        동두천, 대관령
      </h4>
      {weatherData.length !== 0 && (
        <div className="content-container">
          <p className="city">{stnNm}의 날씨</p>
          <p className="date-time">일시: {tm}</p>
          <p className="temperature">온도:{ta}</p>
          <p className="humidity"> 습도 : {hm}</p>
          <p className="precipitation"> 강수량 : {rn}</p>
        </div>
      )}
    </WeatherContainer>
  );
}

const WeatherContainer = styled.div`
  height: 90vh;
  .title {
    width: 600px;
    display: flex;
    justify-content: center;
  }

  .title > * {
    margin: 10px 5px 30px 10px;
  }

  input {
    padding-left: 10px;
    font-size: 20px;
    width: 170px;
  }

  h4 {
    text-align: center;
  }

  p {
    margin-top: 20px;
  }

  .city {
    font-size: 30px;
    text-align: center;
  }
`;

export default Weather;
