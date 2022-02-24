// change enterKey variable name

// Timer
const initialMm = 15; // To quickly test, change it to 0.1
let time = initialMm * 60;

const timeDisplay = document.getElementById("timer-display");

function timer() {
  let mm = Math.floor(time / 60);
  let ss = time % 60;

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  timeDisplay.innerHTML = `${mm}:${ss}`;
  time--;

  // if (time <= -2) {
  //   alert("GAME OVER"); // or function for game over
  // }
}

// Start the game
const startButton = document.getElementById("start-button");

function start() {
  setInterval(timer, 1000);
  // start button disappears
  // Give up button replaces start button
}

startButton.addEventListener("click", start);

// Get country name from input when player hits enter
const enterKey = document.getElementById("enter");

function getCountryFromInput() {
  return enterKey.value.toUpperCase();
}

// Compare country from input to country table
function showCountryOnTable(countryFromPlayer) {
  switch (countryFromPlayer) {
    case "AFGHANISTAN":
      document.querySelector("#afghanistan").style.visibility = "visible";
      // select from svg image
      //count++
      break;
    case "ALBANIA":
      document.querySelector("#albania").style.visibility = "visible";
      break;
    case "ALGERIA":
      document.querySelector("#algeria").style.visibility = "visible";
      break;
    case "ANDORRA":
      document.querySelector("#andorra").style.visibility = "visible";
      break;
    case "ANGOLA":
      document.querySelector("#angola").style.visibility = "visible";
      break;
    case "ANTIGUA AND BARBUDA":
      document.querySelector("#antigua-and-barbuda").style.visibility =
        "visible";
      break;
    case "ARGENTINA":
      document.querySelector("#argentina").style.visibility = "visible";
      break;
    case "ARMENIA":
      document.querySelector("#armenia").style.visibility = "visible";
      break;
    case "AUSTRALIA":
      document.querySelector("#australia").style.visibility = "visible";
      break;
    case "AUSTRIA":
      document.querySelector("#austria").style.visibility = "visible";
      break;
    case "AZERBAIJAN":
      document.querySelector("#azerbaijan").style.visibility = "visible";
      break;
    case "BAHAMAS":
      document.querySelector("#bahamas").style.visibility = "visible";
      break;
    case "BAHRAIN":
      document.querySelector("#bahrain").style.visibility = "visible";
      break;
    case "BANGLADESH":
      document.querySelector("#bangladesh").style.visibility = "visible";
      break;
    case "BARBADOS":
      document.querySelector("#barbados").style.visibility = "visible";
      break;
    case "BELARUS":
      document.querySelector("#belarus").style.visibility = "visible";
      break;
    case "BELGIUM":
      document.querySelector("#belgium").style.visibility = "visible";
      break;
    case "BELIZE":
      document.querySelector("#belize").style.visibility = "visible";
      break;
    case "BENIN":
      document.querySelector("#benin").style.visibility = "visible";
      break;
    case "BHUTAN":
      document.querySelector("#bhutan").style.visibility = "visible";
      break;
    case "BOLIVIA":
      document.querySelector("#bolivia").style.visibility = "visible";
      break;
    case "BOSNIA AND HERZEGOVINA":
      document.querySelector("#bosnia-and-herzegovina").style.visibility =
        "visible";
      break;
    case "BOTSWANA":
      document.querySelector("#botswana").style.visibility = "visible";
      break;
    case "BRAZIL":
      document.querySelector("#brazil").style.visibility = "visible";
      break;
    case "BRUNEI":
      document.querySelector("#brunei").style.visibility = "visible";
      break;
    case "BULGARIA":
      document.querySelector("#bulgaria").style.visibility = "visible";
      break;
    case "BURKINA FASO":
      document.querySelector("#burkina-faso").style.visibility = "visible";
      break;
    case "BURUNDI":
      document.querySelector("#burundi").style.visibility = "visible";
      break;
    case "CAMBODIA":
      document.querySelector("#cambodia").style.visibility = "visible";
      break;
    case "CAMEROON":
      document.querySelector("#cameroon").style.visibility = "visible";
      break;
    case "CANADA":
      document.querySelector("#canada").style.visibility = "visible";
      break;
    case "CAPE VERDE":
      document.querySelector("#cape verde").style.visibility = "visible";
      break;
    case "CENTRAL AFRICAN REPUBLIC":
    case "CAR":
      document.querySelector("#central-african-republic").style.visibility =
        "visible";
      break;
    case "CHAD":
      document.querySelector("#chad").style.visibility = "visible";
      break;
    case "CHILE":
      document.querySelector("#chile").style.visibility = "visible";
      break;
    case "CHINA":
      document.querySelector("#china").style.visibility = "visible";
      break;
    case "COLOMBIA":
      document.querySelector("#colombia").style.visibility = "visible";
      break;
    case "COMOROS":
      document.querySelector("#comoros").style.visibility = "visible";
      break;
    case "COSTA RICA":
      document.querySelector("#costa-rica").style.visibility = "visible";
      break;
    case "CÔTE D'IVOIRE":
    case "CÔTE DIVOIRE":
    case "COTE D'IVOIRE":
    case "COTE DIVOIRE":
      document.querySelector("#cote-divoire").style.visibility = "visible";
      break;
    case "CROATIA":
      document.querySelector("#croatia").style.visibility = "visible";
      break;
    case "CUBA":
      document.querySelector("#cuba").style.visibility = "visible";
      break;
    case "CYPRUS":
      document.querySelector("#cyprus").style.visibility = "visible";
      break;
    case "CZECH REPUBLIC":
      document.querySelector("#czech-republic").style.visibility = "visible";
      break;
    case "DEMOCRATIC REPUBLIC OF THE CONGO":
    case "DRC":
      document.querySelector(
        "#democratic-republic-of-the-congo"
      ).style.visibility = "visible";
      break;
    case "DENMARK":
      document.querySelector("#denmark").style.visibility = "visible";
      break;
    case "DJIBOUTI":
      document.querySelector("#djibouti").style.visibility = "visible";
      break;
    case "DOMINICA":
      document.querySelector("#dominica").style.visibility = "visible";
      break;
    case "DOMINICAN REPUBLIC":
      document.querySelector("#dominican-republic").style.visibility =
        "visible";
      break;
    case "EAST TIMOR":
      document.querySelector("#east-timor").style.visibility = "visible";
      break;
    case "ECUADOR":
      document.querySelector("#ecuador").style.visibility = "visible";
      break;
    case "EGYPT":
      document.querySelector("#egypt").style.visibility = "visible";
      break;
    case "EL SALVADOR":
      document.querySelector("#el-salvador").style.visibility = "visible";
      break;
    case "EQUATORIAL GUINEA":
      document.querySelector("#equatorial-guinea").style.visibility = "visible";
      break;
    case "ERITREA":
      document.querySelector("#eritrea").style.visibility = "visible";
      break;
    case "ESTONIA":
      document.querySelector("#estonia").style.visibility = "visible";
      break;
    case "ESWATINI":
      document.querySelector("#eswatini").style.visibility = "visible";
      break;
    case "ETHIOPIA":
      document.querySelector("#ethiopia").style.visibility = "visible";
      break;
    case "FEDERATED STATES OF MICRONESIA":
    case "MICRONESIA":
      document.querySelector(
        "#federated-states-of-micronesia"
      ).style.visibility = "visible";
      break;
    case "FIJI":
      document.querySelector("#fiji").style.visibility = "visible";
      break;
    case "FINLAND":
      document.querySelector("#finland").style.visibility = "visible";
      break;
    case "FRANCE":
      document.querySelector("#france").style.visibility = "visible";
      break;
    case "GABON":
      document.querySelector("#gabon").style.visibility = "visible";
      break;
    case "GAMBIA":
      document.querySelector("#gambia").style.visibility = "visible";
      break;
    case "GEORGIA":
      document.querySelector("#georgia").style.visibility = "visible";
      break;
    case "GERMANY":
      document.querySelector("#germany").style.visibility = "visible";
      break;
    case "GHANA":
      document.querySelector("#ghana").style.visibility = "visible";
      break;
    case "GREECE":
      document.querySelector("#greece").style.visibility = "visible";
      break;
    case "GRENADA":
      document.querySelector("#grenada").style.visibility = "visible";
      break;
    case "GUATEMALA":
      document.querySelector("#guatemala").style.visibility = "visible";
      break;
    case "GUINEA":
      document.querySelector("#guinea").style.visibility = "visible";
      break;
    case "GUINEA BISSAU":
      document.querySelector("#guinea-bissau").style.visibility = "visible";
      break;
    case "GUYANA":
      document.querySelector("#guyana").style.visibility = "visible";
      break;
    case "HAITI":
      document.querySelector("#haiti").style.visibility = "visible";
      break;
    case "HONDURAS":
      document.querySelector("#honduras").style.visibility = "visible";
      break;
    case "HUNGARY":
      document.querySelector("#hungary").style.visibility = "visible";
      break;
    case "ICELAND":
      document.querySelector("#iceland").style.visibility = "visible";
      break;
    case "INDIA":
      document.querySelector("#india").style.visibility = "visible";
      break;
    case "INDONESIA":
      document.querySelector("#indonesia").style.visibility = "visible";
      break;
    case "IRAN":
      document.querySelector("#iran").style.visibility = "visible";
      break;
    case "IRAQ":
      document.querySelector("#iraq").style.visibility = "visible";
      break;
    case "IRELAND":
      document.querySelector("#ireland").style.visibility = "visible";
      break;
    case "ISRAEL":
      document.querySelector("#israel").style.visibility = "visible";
      break;
    case "ITALY":
      document.querySelector("#italy").style.visibility = "visible";
      break;
    case "JAMAICA":
      document.querySelector("#jamaica").style.visibility = "visible";
      break;
    case "JAPAN":
      document.querySelector("#japan").style.visibility = "visible";
      break;
    case "JORDAN":
      document.querySelector("#jordan").style.visibility = "visible";
      break;
    case "KAZAKHSTAN":
      document.querySelector("#kazakhstan").style.visibility = "visible";
      break;
    case "KENYA":
      document.querySelector("#kenya").style.visibility = "visible";
      break;
    case "KIRIBATI":
      document.querySelector("#kiribati").style.visibility = "visible";
      break;
    case "KOSOVO":
      document.querySelector("#kosovo").style.visibility = "visible";
      break;
    case "KUWAIT":
      document.querySelector("#kuwait").style.visibility = "visible";
      break;
    case "KYRGYZSTAN":
      document.querySelector("#kyrgyzstan").style.visibility = "visible";
      break;
    case "LAOS":
      document.querySelector("#laos").style.visibility = "visible";
      break;
    case "LATVIA":
      document.querySelector("#latvia").style.visibility = "visible";
      break;
    case "LEBANON":
      document.querySelector("#lebanon").style.visibility = "visible";
      break;
    case "LESOTHO":
      document.querySelector("#lesotho").style.visibility = "visible";
      break;
    case "LIBERIA":
      document.querySelector("#liberia").style.visibility = "visible";
      break;
    case "LIBYA":
      document.querySelector("#libya").style.visibility = "visible";
      break;
    case "LIECHTENSTEIN":
      document.querySelector("#liechtenstein").style.visibility = "visible";
      break;
    case "LITHUANIA":
      document.querySelector("#lithuania").style.visibility = "visible";
      break;
    case "LUXEMBOURG":
      document.querySelector("#luxembourg").style.visibility = "visible";
      break;
    case "MADAGASCAR":
      document.querySelector("#madagascar").style.visibility = "visible";
      break;
    case "MALAWI":
      document.querySelector("#malawi").style.visibility = "visible";
      break;
    case "MALAYSIA":
      document.querySelector("#malaysia").style.visibility = "visible";
      break;
    case "MALDIVES":
      document.querySelector("#maldives").style.visibility = "visible";
      break;
    case "MALI":
      document.querySelector("#mali").style.visibility = "visible";
      break;
    case "MALTA":
      document.querySelector("#malta").style.visibility = "visible";
      break;
    case "MARSHALL ISLANDS":
      document.querySelector("#marshall islands").style.visibility = "visible";
      break;
    case "MAURITANIA":
      document.querySelector("#mauritania").style.visibility = "visible";
      break;
    case "MAURITIUS":
      document.querySelector("#mauritius").style.visibility = "visible";
      break;
    case "MEXICO":
      document.querySelector("#mexico").style.visibility = "visible";
      break;
    case "MOLDOVA":
      document.querySelector("#moldova").style.visibility = "visible";
      break;
    case "MONACO":
      document.querySelector("#monaco").style.visibility = "visible";
      break;
    case "MONGOLIA":
      document.querySelector("#mongolia").style.visibility = "visible";
      break;
    case "MONTENEGRO":
      document.querySelector("#montenegro").style.visibility = "visible";
      break;
    case "MOROCCO":
      document.querySelector("#morocco").style.visibility = "visible";
      break;
    case "MOZAMBIQUE":
      document.querySelector("#mozambique").style.visibility = "visible";
      break;
    case "MYANMAR":
      document.querySelector("#myanmar").style.visibility = "visible";
      break;
    case "NAMIBIA":
      document.querySelector("#namibia").style.visibility = "visible";
      break;
    case "NAURU":
      document.querySelector("#nauru").style.visibility = "visible";
      break;
    case "NEPAL":
      document.querySelector("#nepal").style.visibility = "visible";
      break;
    case "NETHERLANDS":
      document.querySelector("#netherlands").style.visibility = "visible";
      break;
    case "NEW ZEALAND":
      document.querySelector("#new-zealand").style.visibility = "visible";
      break;
    case "NICARAGUA":
      document.querySelector("#nicaragua").style.visibility = "visible";
      break;
    case "NIGER":
      document.querySelector("#niger").style.visibility = "visible";
      break;
    case "NIGERIA":
      document.querySelector("#nigeria").style.visibility = "visible";
      break;
    case "NORTH KOREA":
    case "SOUTH KOREA":
    case "KOREA":
      document.querySelector("#north-korea").style.visibility = "visible";
      document.querySelector("#south-korea").style.visibility = "visible";
      //count += 2;
      break;
    case "NORTH MACEDONIA":
      document.querySelector("#north-macedonia").style.visibility = "visible";
      break;
    case "NORWAY":
      document.querySelector("#norway").style.visibility = "visible";
      break;
    case "OMAN":
      document.querySelector("#oman").style.visibility = "visible";
      break;
    case "PAKISTAN":
      document.querySelector("#pakistan").style.visibility = "visible";
      break;
    case "PALAU":
      document.querySelector("#palau").style.visibility = "visible";
      break;
    case "PANAMA":
      document.querySelector("#panama").style.visibility = "visible";
      break;
    case "PAPUA NEW GUINEA":
      document.querySelector("#papua-new-guinea").style.visibility = "visible";
      break;
    case "PARAGUAY":
      document.querySelector("#paraguay").style.visibility = "visible";
      break;
    case "PERU":
      document.querySelector("#peru").style.visibility = "visible";
      break;
    case "PHILIPPINES":
      document.querySelector("#philippines").style.visibility = "visible";
      break;
    case "POLAND":
      document.querySelector("#poland").style.visibility = "visible";
      break;
    case "PORTUGAL":
      document.querySelector("#portugal").style.visibility = "visible";
      break;
    case "QATAR":
      document.querySelector("#qatar").style.visibility = "visible";
      break;
    case "REPUBLIC OF THE CONGO":
      document.querySelector("#republic-of-the-congo").style.visibility =
        "visible";
      break;
    case "ROMANIA":
      document.querySelector("#romania").style.visibility = "visible";
      break;
    case "RUSSIA":
      document.querySelector("#russia").style.visibility = "visible";
      break;
    case "RWANDA":
      document.querySelector("#rwanda").style.visibility = "visible";
      break;
    case "SAMOA":
      document.querySelector("#samoa").style.visibility = "visible";
      break;
    case "SAN MARINO":
      document.querySelector("#san-marino").style.visibility = "visible";
      break;
    case "SAUDI ARABIA":
      document.querySelector("#saudi-arabia").style.visibility = "visible";
      break;
    case "SENEGAL":
      document.querySelector("#senegal").style.visibility = "visible";
      break;
    case "SERBIA":
      document.querySelector("#serbia").style.visibility = "visible";
      break;
    case "SEYCHELLES":
      document.querySelector("#seychelles").style.visibility = "visible";
      break;
    case "SIERRA LEONE":
      document.querySelector("#sierra-leone").style.visibility = "visible";
      break;
    case "SINGAPORE":
      document.querySelector("#singapore").style.visibility = "visible";
      break;
    case "SLOVAKIA":
      document.querySelector("#slovakia").style.visibility = "visible";
      break;
    case "SLOVENIA":
      document.querySelector("#slovenia").style.visibility = "visible";
      break;
    case "SOLOMON ISLANDS":
      document.querySelector("#solomon-islands").style.visibility = "visible";
      break;
    case "SOMALIA":
      document.querySelector("#somalia").style.visibility = "visible";
      break;
    case "SOUTH AFRICA":
      document.querySelector("#south-africa").style.visibility = "visible";
      break;
    case "SOUTH SUDAN":
      document.querySelector("#south-sudan").style.visibility = "visible";
      break;
    case "SPAIN":
      document.querySelector("#spain").style.visibility = "visible";
      break;
    case "SRI LANKA":
      document.querySelector("#sri-lanka").style.visibility = "visible";
      break;
    case "SAINT KITTS AND NEVIS":
      document.querySelector("#saint-kitts-and-nevis").style.visibility =
        "visible";
      break;
    case "SAINT LUCIA":
      document.querySelector("#saint-lucia").style.visibility = "visible";
      break;
    case "SAINT VINCENT AND GRENADINES":
      document.querySelector("#saint-vincent-and-grenadines").style.visibility =
        "visible";
      break;
    case "SUDAN":
      document.querySelector("#sudan").style.visibility = "visible";
      break;
    case "SURINAME":
      document.querySelector("#suriname").style.visibility = "visible";
      break;
    case "SWEDEN":
      document.querySelector("#sweden").style.visibility = "visible";
      break;
    case "SWITZERLAND":
      document.querySelector("#switzerland").style.visibility = "visible";
      break;
    case "SYRIA":
      document.querySelector("#syria").style.visibility = "visible";
      break;
    case "SÃO TOMÉ AND PRÍNCIPE":
    case "SAO TOME AND PRINCIPE":
    case "SÃO TOMÉ E PRÍNCIPE":
    case "SAO TOME E PRINCIPE":
      document.querySelector("#sao-tome-and-principe").style.visibility =
        "visible";
      break;
    case "TAIWAN":
      document.querySelector("#taiwan").style.visibility = "visible";
      break;
    case "TAJIKISTAN":
      document.querySelector("#tajikistan").style.visibility = "visible";
      break;
    case "TANZANIA":
      document.querySelector("#tanzania").style.visibility = "visible";
      break;
    case "THAILAND":
      document.querySelector("#thailand").style.visibility = "visible";
      break;
    case "TOGO":
      document.querySelector("#togo").style.visibility = "visible";
      break;
    case "TONGA":
      document.querySelector("#tonga").style.visibility = "visible";
      break;
    case "TRINIDAD AND TOBAGO":
      document.querySelector("#trinidad-and-tobago").style.visibility =
        "visible";
      break;
    case "TUNISIA":
      document.querySelector("#tunisia").style.visibility = "visible";
      break;
    case "TURKEY":
      document.querySelector("#turkey").style.visibility = "visible";
      break;
    case "TURKMENISTAN":
      document.querySelector("#turkmenistan").style.visibility = "visible";
      break;
    case "TUVALU":
      document.querySelector("#tuvalu").style.visibility = "visible";
      break;
    case "UGANDA":
      document.querySelector("#uganda").style.visibility = "visible";
      break;
    case "UKRAINE":
      document.querySelector("#ukraine").style.visibility = "visible";
      break;
    case "UNITED ARAB EMIRATES":
    case "UAE":
      document.querySelector("#united-arab-emirates").style.visibility =
        "visible";
      break;
    case "UNITED KINGDOM":
    case "UK":
      document.querySelector("#united-kingdom").style.visibility = "visible";
      break;
    case "UNITED STATES OF AMERICA":
    case "UNITED STATES":
    case "USA":
      document.querySelector("#united-states").style.visibility = "visible";
      break;
    case "URUGUAY":
      document.querySelector("#uruguay").style.visibility = "visible";
      break;
    case "UZBEKISTAN":
      document.querySelector("#uzbekistan").style.visibility = "visible";
      break;
    case "VANUATU":
      document.querySelector("#vanuatu").style.visibility = "visible";
      break;
    case "VATICAN CITY":
    case "VATICAN":
      document.querySelector("#vatican-city").style.visibility = "visible";
      break;
    case "VENEZUELA":
      document.querySelector("#venezuela").style.visibility = "visible";
      break;
    case "VIETNAM":
      document.querySelector("#vietnam").style.visibility = "visible";
      break;
    case "YEMEN":
      document.querySelector("#yemen").style.visibility = "visible";
      break;
    case "ZAMBIA":
      document.querySelector("#zambia").style.visibility = "visible";
      break;
    case "ZIMBABWE":
      document.querySelector("#zimbabwe").style.visibility = "visible";
      break;
  }
}

// Hit enter
function hitEnter(event) {
  if (event.key === "Enter") {
    showCountryOnTable(getCountryFromInput());
    enterKey.value = "";
  }
}

enterKey.addEventListener("keyup", hitEnter);

// You write a country name and hit enter
//// if it's correct:
////// count++;
////// shows on map
////// shows on table (css td visibility --> visible)
//// if it's incorrect:
////// the text continues on the form

// If you beat the timer
//// A pop up congratulates you
//// Tells you the time spent
//// And gives you the option to play again

// If you don't beat the timer
//// A pop up lets you know you lost
//// When you close it:
////// The remaining countries turn red on the map
////// And show up red on the table
////// A button to play again emerges

// The give-up button
//// The counter stops
//// the event of loosing happens
