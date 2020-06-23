var days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

var daysRu = {
  0: "Воскресенье",
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
};

var month = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
var isoCountries = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

var coordX;
var coordY;
var farengeight = false;
var mymap;
var recognizing;
var recognition;
var animation = true;

let date = new Date();

let appWrapper = document.createElement("div");
appWrapper.className = "app_wrapper";
document.body.append(appWrapper);

let controlsBlock = document.createElement("div");
controlsBlock.className = "controls_block";
appWrapper.append(controlsBlock);

let buttonsWrapper = document.createElement("div");
buttonsWrapper.classList.add("wrapper", "wrapper-btns");
controlsBlock.append(buttonsWrapper);

let buttonsRefresh = document.createElement("div");
buttonsRefresh.classList.add("btn_base", "controls_block--btn-bg");
buttonsWrapper.append(buttonsRefresh);

let searchImg = document.createElement("img");
searchImg.setAttribute("src", "./img/spinner.svg");
searchImg.setAttribute("alt", "refresh");
searchImg.className = "controls_block--btn_icon";

buttonsRefresh.append(searchImg);

let langRadioButtonsWrapper = document.createElement("div");
langRadioButtonsWrapper.classList.add("wrapper", "wrapper-radio_btns");
buttonsWrapper.append(langRadioButtonsWrapper);

let buttonRU = document.createElement("div");
buttonRU.classList.add("btn_base", "controls_block--btn-lang_ru");
buttonRU.append("RU");
langRadioButtonsWrapper.append(buttonRU);

let buttonEN = document.createElement("div");
buttonEN.classList.add("btn_base", "controls_block--btn-lang_en", "selected");
buttonEN.append("EN");
langRadioButtonsWrapper.append(buttonEN);

let tempRadioButtonsWrapper = document.createElement("div");
tempRadioButtonsWrapper.classList.add("wrapper", "wrapper-radio_btns");
buttonsWrapper.append(tempRadioButtonsWrapper);

let buttonF = document.createElement("div");
buttonF.classList.add("btn_base", "controls_block--btn-temp_f");
buttonF.append("°F");
tempRadioButtonsWrapper.append(buttonF);

let buttonC = document.createElement("div");
buttonC.classList.add("btn_base", "controls_block--btn-temp_c", "selected");
buttonC.append("°C");
tempRadioButtonsWrapper.append(buttonC);

let searchWrapper = document.createElement("div");
searchWrapper.classList.add("wrapper", "wrapper-search");
controlsBlock.append(searchWrapper);

let inputBase = document.createElement("input");
inputBase.className = "input_base";
inputBase.setAttribute("type", "search");
inputBase.setAttribute("placeholder", "Search by City or ZIP code");
searchWrapper.append(inputBase);

let buttonsVoice = document.createElement("div");
buttonsVoice.id = "btn_voice";
buttonsVoice.className = "btn_voice";
searchWrapper.append(buttonsVoice);

let voiceImg = document.createElement("img");
voiceImg.setAttribute("src", "./img/voice.svg");
voiceImg.setAttribute("alt", "voice");
voiceImg.className = "btn_voice--voice_icon";
buttonsVoice.append(voiceImg);

let buttonSearch = document.createElement("div");
buttonSearch.classList.add("btn_base", "controls_block--btn-search");
buttonSearch.append("SEARCH");
searchWrapper.append(buttonSearch);

let weatherWrapper = document.createElement("div");
weatherWrapper.className = "weather--wrapper";
appWrapper.append(weatherWrapper);

let weatherTodayBlock = document.createElement("div");
weatherTodayBlock.className = "weather_today_block";
weatherWrapper.append(weatherTodayBlock);

let cityCountry = document.createElement("div");
cityCountry.classList.add("text_base", "weather_today_block--city_country");
weatherTodayBlock.append(cityCountry);

let dateTime = document.createElement("div");
dateTime.classList.add("text_base", "weather_today_block--date_time");
weatherTodayBlock.append(dateTime);

let weatherTodayBlockWrapper = document.createElement("div");
weatherTodayBlockWrapper.className = "weather_today_block--wrapper";
weatherWrapper.append(weatherTodayBlockWrapper);

let temp = document.createElement("div");
temp.classList.add("text_base", "weather_today_block--temp", "temp");
weatherTodayBlockWrapper.append(temp);

let todayIcon = document.createElement("img");
todayIcon.setAttribute("alt", "iconWeatherToday");
todayIcon.className = "weather_today_block--sign";
weatherTodayBlockWrapper.append(todayIcon);

let weatherTodayPropWrapper = document.createElement("div");
weatherTodayPropWrapper.className = "weather_today_block--wrapper_prop";
weatherTodayBlockWrapper.append(weatherTodayPropWrapper);

let prop = document.createElement("div");
prop.classList.add("text_base", "weather_today_block--prop");
weatherTodayPropWrapper.append(prop);

let weatherDaysBlock = document.createElement("div");
weatherDaysBlock.className = "weather_days_block";
weatherWrapper.append(weatherDaysBlock);

createForecastDay(weatherDaysBlock, 1);
createForecastDay(weatherDaysBlock, 2);
createForecastDay(weatherDaysBlock, 3);

let mapBlock = document.createElement("div");
mapBlock.className = "map_block";
appWrapper.append(mapBlock);

let mapBox = document.createElement("div");
mapBox.id = "mapid";
mapBox.className = "map";
mapBlock.append(mapBox);

let latitude = document.createElement("div");
latitude.className = "map_block--text";
latitude.classList.add("text_base");
mapBlock.append(latitude);

function getCountryName(countryCode) {
  if (isoCountries.hasOwnProperty(countryCode)) {
    return isoCountries[countryCode];
  } else {
    return countryCode;
  }
}

function createForecastDay(parentBlock, i) {
  let dayBlock = document.createElement("div");
  dayBlock.classList.add("day_block");
  parentBlock.append(dayBlock);

  let dayName = document.createElement("div");
  dayName.className = `day_block--name${i}`;
  dayName.classList.add("day_block--name");
  dayName.classList.add("text_base");
  dayBlock.append(dayName);

  let dayTemp = document.createElement("div");
  dayTemp.className = `day_block--temp${i}`;
  dayTemp.classList.add("day_block--temp");
  dayTemp.classList.add("text_base");
  dayBlock.append(dayTemp);

  let dayIcon = document.createElement("img");
  dayIcon.setAttribute("alt", "iconWeather");
  dayIcon.className = `day_block--sign${i}`;
  dayIcon.classList.add("day_block--sign");
  dayBlock.append(dayIcon);
}

function refreshCurrentDate() {
  date = new Date();
  dateTime.textContent =
    days[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    month[date.getMonth()] +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2);
}

function cToF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function fToC(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

function convertTemperature(farengeight) {
  let spans = document.getElementsByTagName('span');
  for (i = 0; i < spans.length; i++) {
    let temp = spans[i].innerHTML;
    spans[i].innerHTML = farengeight
      ? cToF(Number.parseFloat(temp))
      : fToC(Number.parseFloat(temp));
  }
}

function updateCityValue(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2232de9b87e6361b62475e4da72aeb07&units=metric`
  )
    .catch(function (e) {
      inputBase.value = e.message;
      return;
    })
    .then(function (resp) {
      return resp.json();
    }) // convert to json
    .then(function (data) {
      if (data.cod != "200") {
        inputBase.value = data.message;
        return;
      }
      localTime = data.timezone / 3600;
      document.querySelector(".map_block--text").innerHTML =
        "Latitude: " + data.coord.lat + " <br /> Longitude: " + data.coord.lon;
      document.querySelector(".weather_today_block--city_country").textContent =
        data.name + ", " + getCountryName(data.sys.country);

      document.querySelector(".weather_today_block--temp").innerHTML =
        "<span id='temperature'>" + Math.round(data.main.temp) + "</span>&deg";
      document.querySelector(".weather_today_block--prop").innerHTML =
        data.weather[0]["description"][0].charAt(0).toUpperCase() +
        data.weather[0]["description"].slice(1) +
        " <br /> Feels like: " +
        "<span id='temperature'>" +
        Math.round(data.main.feels_like) +
        "</span>&deg" +
        "<br /> Wind: " +
        data.wind.speed +
        "m/s" +
        "<br /> Humididty: " +
        data.main.humidity +
        "%";
      document.querySelector(
        ".weather_today_block--sign"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@4x.png`;
      coordX = data.coord.lat;
      coordY = data.coord.lon;

      if (mymap != undefined) {
        mymap.off();
        mymap.remove();
      }

      mymap = L.map("mapid").setView([coordX, coordY], 12);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoibXVtcGxpbmkiLCJhIjoiY2tiNm5ua2pqMDBlZDJ0bXB0ZTJ2dWdxYyJ9.OgUJYZ5kr5Vp7Vkn_2Ltiw",
        }
      ).addTo(mymap);
    })
    .then(function (data) {
      // forecast

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2232de9b87e6361b62475e4da72aeb07&units=metric`
      )
        .catch(function (e) {
          inputBase.value = e.message;
          return;
        })
        .then(function (resp) {
          return resp.json();
        }) // convert to json
        .then(function (data) {
          if (data.cod != "200") {
            inputBase.value = data.message;
            return;
          }
          for (let i = 1; i <= 3; i++) {
            document.querySelector(`.day_block--name${i}`).innerHTML =
              days[(date.getDay() + i) % 7];
            document.querySelector(`.day_block--temp${i}`).innerHTML =
              "<span id='temperature'>" +
              Math.round(
                (data.list[8 * i + 1].main.temp +
                  data.list[8 * i + 2].main.temp +
                  data.list[8 * i + 3].main.temp +
                  data.list[8 * i + 4].main.temp +
                  data.list[8 * i + 5].main.temp +
                  data.list[8 * i + 6].main.temp +
                  data.list[8 * i + 7].main.temp +
                  data.list[8 * i + 8].main.temp) /
                  8
              ) +
              "</span>&deg";
            document
              .querySelector(`.day_block--sign${i}`)
              .setAttribute(
                "src",
                `https://openweathermap.org/img/wn/${
                  data.list[8 * i + 4].weather[0]["icon"]
                }@2x.png`
              );
          }
          if (farengeight) convertTemperature(farengeight);
        });
    });
}

let a = new Promise((resolve, reject) => {
  fetch("https://ipinfo.io?token=13ac3ded6c6c91")
    .then(function (resp) {
      return resp.json();
    }) // convert to json
    .then(function (data) {
      cityName = data.city;
      updateCityValue(cityName);
      refreshCurrentDate();
    });
});

// search
buttonSearch.onclick = function () {
  cityName = inputBase.value;

  updateCityValue(cityName);
  refreshBackground(cityName);
};

// temperature radio button C/F
buttonF.onclick = function () {
  if (farengeight) return;
  farengeight = true;
  buttonF.classList.add("selected");
  buttonC.classList.remove("selected");
  convertTemperature(farengeight);
};
buttonC.onclick = function () {
  if (!farengeight) return;
  farengeight = false;
  buttonC.classList.add("selected");
  buttonF.classList.remove("selected");
  convertTemperature(farengeight);
};

//refresh background
function refreshBackground(cityName) {
  const options = { month: "long" };
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  fetch(
    `https://api.unsplash.com/photos/random?query=${cityName},${month}&client_id=4fL5YLtT96HaVRyaBGsVBzxgBsLcBCoWMo0OkI150i4`
  )
    .catch(function (e) {
      inputBase.value = e.message;
      return;
    })
    .then(function (resp) {
      return resp.json();
    }) // convert to json
    .then(function (data) {
      var img = data.urls.regular;

      document.body.style.background = `url(${img}) no-repeat`;
      document.body.style.backgroundSize = "100%";
      stopAnimation();
    });
  refreshCurrentDate();
}

buttonsRefresh.onclick = function () {
  startAnimation();
  refreshBackground(cityName);
};

function startAnimation(){
  if (animation) return;
  animation = true;
  searchImg.classList.add("controls_block--btn_icon_active");
}

function stopAnimation(){
  if (!animation) return;
  animation = false;
  searchImg.classList.remove("controls_block--btn_icon_active");
}


if (window.hasOwnProperty("webkitSpeechRecognition")) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  reset();
  recognition.onend = reset();

  recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        inputBase.value = event.results[i][0].transcript;
        cityName = inputBase.value;
        if (cityName) {
          updateCityValue(cityName);
          refreshBackground(cityName);
        }
      }
    }
  };
}

function reset() {
  recognizing = false;
}

function toggleStartStop() {
  if (window.hasOwnProperty("webkitSpeechRecognition")) {
    if (recognizing) {
      recognition.stop();
      recognizing = false;
    } else {
      recognition.start();
      recognizing = true;
      inputBase.value = "Click to Stop";
    }
  } else {
    inputBase.value = "Webkit Speech Recognition is not supported by browser";
  }
}

buttonsVoice.onclick = toggleStartStop;
