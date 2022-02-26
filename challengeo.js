// Timer
const initialMm = 15; // To quickly test, change it to 0.1
let time = 0;

let mm = 0;
let ss = 0;

const timeDisplay = document.getElementById("timer-display");

function timer() {
  mm = Math.floor(time / 60);
  ss = time % 60;

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  timeDisplay.innerHTML = `${mm}:${ss}`;
  time--;

  if (time <= -1) {
    clearInterval(clock);
    document.getElementById("start-button").disabled = false;
    lose();
  }
}

// Guessed countries counter
let count = 0;

function guessedCountriesCounter() {
  count++;
  document.getElementById("counter").innerHTML = `${count}/196`;
  if (count === 196) {
    // To easily test it, change to 2
    win();
  }
}

// Start the game
const startButton = document.getElementById("start-button");
let clock = false;

function start() {
  count = 0;
  time = initialMm * 60;
  clock = setInterval(timer, 1000);
  document.getElementById("input").disabled = false;
  document.getElementById("start-button").disabled = true;
}

startButton.addEventListener("click", start);

// Get country name from input
const inputValue = document.getElementById("input");

function getCountryFromInput() {
  return inputValue.value.toUpperCase();
}

// Compare country from input to country table
let success = false;

function showCountry(countryFromPlayer) {
  switch (countryFromPlayer) {
    case "AFGHANISTAN":
      document.querySelector("#afghanistan").style.visibility = "visible";
      success = document.querySelector("#afghanistan-svg").style.fill =
        "#E4FDE1";
      break;
    case "ALBANIA":
      document.querySelector("#albania").style.visibility = "visible";
      success = document.querySelector("#albania-svg").style.fill = "#E4FDE1";
      break;
    case "ALGERIA":
      document.querySelector("#algeria").style.visibility = "visible";
      success = document.querySelector("#algeria-svg").style.fill = "#E4FDE1";
      break;
    case "ANDORRA":
      document.querySelector("#andorra").style.visibility = "visible";
      success = document.querySelector(".andorra-svg").style.fill = "#E4FDE1";
      break;
    case "ANGOLA":
      document.querySelector("#angola").style.visibility = "visible";
      success = document.querySelector(".angola-svg").style.fill = "#E4FDE1";
      break;
    case "ANTIGUA AND BARBUDA":
      document.querySelector("#antigua-and-barbuda").style.visibility =
        "visible";
      success = document.querySelector(".antigua-and-barbuda-svg").style.fill =
        "#E4FDE1";
      break;
    case "ARGENTINA":
      document.querySelector("#argentina").style.visibility = "visible";
      success = document.querySelector(".argentina-svg").style.fill = "#E4FDE1";
      break;
    case "ARMENIA":
      document.querySelector("#armenia").style.visibility = "visible";
      success = document.querySelector("#armenia-svg").style.fill = "#E4FDE1";
      break;
    case "AUSTRALIA":
      document.querySelector("#australia").style.visibility = "visible";
      success = document.querySelector(".australia-svg").style.fill = "#E4FDE1";
      break;
    case "AUSTRIA":
      document.querySelector("#austria").style.visibility = "visible";
      success = document.querySelector("#austria-svg").style.fill = "#E4FDE1";
      break;
    case "AZERBAIJAN":
      document.querySelector("#azerbaijan").style.visibility = "visible";
      success = document.querySelector(".azerbaijan-svg").style.fill =
        "#E4FDE1";
      break;
    case "BAHAMAS":
      document.querySelector("#bahamas").style.visibility = "visible";
      success = document.querySelector(".bahamas-svg").style.fill = "#E4FDE1";
      break;
    case "BAHRAIN":
      document.querySelector("#bahrain").style.visibility = "visible";
      success = document.querySelector(".bahrain-svg").style.fill = "#E4FDE1";
      break;
    case "BANGLADESH":
      document.querySelector("#bangladesh").style.visibility = "visible";
      success = document.querySelector(".bangladesh-svg").style.fill =
        "#E4FDE1";
      break;
    case "BARBADOS":
      document.querySelector("#barbados").style.visibility = "visible";
      success = document.querySelector(".barbados-svg").style.fill = "#E4FDE1";
      break;
    case "BELARUS":
      document.querySelector("#belarus").style.visibility = "visible";
      success = document.querySelector("#belarus-svg").style.fill = "#E4FDE1";
      break;
    case "BELGIUM":
      document.querySelector("#belgium").style.visibility = "visible";
      success = document.querySelector("#belgium-svg").style.fill = "#E4FDE1";
      break;
    case "BELIZE":
      document.querySelector("#belize").style.visibility = "visible";
      success = document.querySelector(".belize-svg").style.fill = "#E4FDE1";
      break;
    case "BENIN":
      document.querySelector("#benin").style.visibility = "visible";
      success = document.querySelector("#benin-svg").style.fill = "#E4FDE1";
      break;
    case "BHUTAN":
      document.querySelector("#bhutan").style.visibility = "visible";
      success = document.querySelector("#bhutan-svg").style.fill = "#E4FDE1";
      break;
    case "BOLIVIA":
      document.querySelector("#bolivia").style.visibility = "visible";
      success = document.querySelector(".bolivia-svg").style.fill = "#E4FDE1";
      break;
    case "BOSNIA AND HERZEGOVINA":
      document.querySelector("#bosnia-and-herzegovina").style.visibility =
        "visible";
      success = document.querySelector(
        "#bosnia-and-herzegovina-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "BOTSWANA":
      document.querySelector("#botswana").style.visibility = "visible";
      success = document.querySelector("#botswana-svg").style.fill = "#E4FDE1";
      break;
    case "BRAZIL":
      document.querySelector("#brazil").style.visibility = "visible";
      success = document.querySelector(".brazil-svg").style.fill = "#E4FDE1";
      break;
    case "BRUNEI":
      document.querySelector("#brunei").style.visibility = "visible";
      success = document.querySelector(".brunei-svg").style.fill = "#E4FDE1";
      break;
    case "BULGARIA":
      document.querySelector("#bulgaria").style.visibility = "visible";
      success = document.querySelector("#bulgaria-svg").style.fill = "#E4FDE1";
      break;
    case "BURKINA FASO":
      document.querySelector("#burkina-faso").style.visibility = "visible";
      success = document.querySelector("#burkina-faso-svg").style.fill =
        "#E4FDE1";
      break;
    case "BURUNDI":
      document.querySelector("#burundi").style.visibility = "visible";
      success = document.querySelector("#burundi-svg").style.fill = "#E4FDE1";
      break;
    case "CAMBODIA":
      document.querySelector("#cambodia").style.visibility = "visible";
      success = document.querySelector(".cambodia-svg").style.fill = "#E4FDE1";
      break;
    case "CAMEROON":
      document.querySelector("#cameroon").style.visibility = "visible";
      success = document.querySelector("#cameroon-svg").style.fill = "#E4FDE1";
      break;
    case "CANADA":
      document.querySelector("#canada").style.visibility = "visible";
      success = document.querySelector(".canada-svg").style.fill = "#E4FDE1";
      break;
    case "CAPE VERDE":
      document.querySelector("#cape-verde").style.visibility = "visible";
      success = document.querySelector(".cape-verde-svg").style.fill =
        "#E4FDE1";
      break;
    case "CENTRAL AFRICAN REPUBLIC":
    case "CAR":
      document.querySelector("#central-african-republic").style.visibility =
        "visible";
      success = document.querySelector(
        "#central-african-republic-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "CHAD":
      document.querySelector("#chad").style.visibility = "visible";
      success = document.querySelector("#chad-svg").style.fill = "#E4FDE1";
      break;
    case "CHILE":
      document.querySelector("#chile").style.visibility = "visible";
      success = document.querySelector(".chile-svg").style.fill = "#E4FDE1";
      break;
    case "CHINA":
      document.querySelector("#china").style.visibility = "visible";
      success = document.querySelector(".china-svg").style.fill = "#E4FDE1";
      break;
    case "COLOMBIA":
      document.querySelector("#colombia").style.visibility = "visible";
      success = document.querySelector("#colombia-svg").style.fill = "#E4FDE1";
      break;
    case "COMOROS":
      document.querySelector("#comoros").style.visibility = "visible";
      success = document.querySelector(".comoros-svg").style.fill = "#E4FDE1";
      break;
    case "COSTA RICA":
      document.querySelector("#costa-rica").style.visibility = "visible";
      success = document.querySelector("#costa-rica-svg").style.fill =
        "#E4FDE1";
      break;
    case "CÔTE D'IVOIRE":
    case "CÔTE DIVOIRE":
    case "COTE D'IVOIRE":
    case "COTE DIVOIRE":
      document.querySelector("#cote-divoire").style.visibility = "visible";
      success = document.querySelector("#cote-divoire-svg").style.fill =
        "#E4FDE1";
      break;
    case "CROATIA":
      document.querySelector("#croatia").style.visibility = "visible";
      success = document.querySelector(".croatia-svg").style.fill = "#E4FDE1";
      break;
    case "CUBA":
      document.querySelector("#cuba").style.visibility = "visible";
      success = document.querySelector(".cuba-svg").style.fill = "#E4FDE1";
      break;
    case "CYPRUS":
      document.querySelector("#cyprus").style.visibility = "visible";
      success = document.querySelector(".cyprus-svg").style.fill = "#E4FDE1";
      break;
    case "CZECH REPUBLIC":
      document.querySelector("#czech-republic").style.visibility = "visible";
      success = document.querySelector("#czech-republic-svg").style.fill =
        "#E4FDE1";
      break;
    case "DEMOCRATIC REPUBLIC OF THE CONGO":
    case "DRC":
      document.querySelector(
        "#democratic-republic-of-the-congo"
      ).style.visibility = "visible";
      document.querySelector(
        "#democratic-republic-of-the-congo-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "DENMARK":
      document.querySelector("#denmark").style.visibility = "visible";
      success = document.querySelector(".denmark-svg").style.fill = "#E4FDE1";
      break;
    case "DJIBOUTI":
      document.querySelector("#djibouti").style.visibility = "visible";
      success = document.querySelector("#djibouti-svg").style.fill = "#E4FDE1";
      break;
    case "DOMINICA":
      document.querySelector("#dominica").style.visibility = "visible";
      success = document.querySelector(".dominica-svg").style.fill = "#E4FDE1";
      break;
    case "DOMINICAN REPUBLIC":
      document.querySelector("#dominican-republic").style.visibility =
        "visible";
      success = document.querySelector(".dominican-republic-svg").style.fill =
        "#E4FDE1";
      break;
    case "EAST TIMOR":
      document.querySelector("#east-timor").style.visibility = "visible";
      success = document.querySelector(".east-timor-svg").style.fill =
        "#E4FDE1";
      break;
    case "ECUADOR":
      document.querySelector("#ecuador").style.visibility = "visible";
      success = document.querySelector(".ecuador-svg").style.fill = "#E4FDE1";
      break;
    case "EGYPT":
      document.querySelector("#egypt").style.visibility = "visible";
      success = document.querySelector("#egypt-svg").style.fill = "#E4FDE1";
      break;
    case "EL SALVADOR":
      document.querySelector("#el-salvador").style.visibility = "visible";
      success = document.querySelector("#el-salvador-svg").style.fill =
        "#E4FDE1";
      break;
    case "EQUATORIAL GUINEA":
      document.querySelector("#equatorial-guinea").style.visibility = "visible";
      success = document.querySelector(".equatorial-guinea-svg").style.fill =
        "#E4FDE1";
      break;
    case "ERITREA":
      document.querySelector("#eritrea").style.visibility = "visible";
      success = document.querySelector(".eritrea-svg").style.fill = "#E4FDE1";
      break;
    case "ESTONIA":
      document.querySelector("#estonia").style.visibility = "visible";
      success = document.querySelector(".estonia-svg").style.fill = "#E4FDE1";
      break;
    case "ESWATINI":
      document.querySelector("#eswatini").style.visibility = "visible";
      success = document.querySelector(".eswatini-svg").style.fill = "#E4FDE1";
      break;
    case "ETHIOPIA":
      document.querySelector("#ethiopia").style.visibility = "visible";
      success = document.querySelector("#ethiopia-svg").style.fill = "#E4FDE1";
      break;
    case "FEDERATED STATES OF MICRONESIA":
    case "MICRONESIA":
      document.querySelector(
        "#federated-states-of-micronesia"
      ).style.visibility = "visible";
      success = document.querySelector(
        ".federated-states-of-micronesia-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "FIJI":
      document.querySelector("#fiji").style.visibility = "visible";
      success = document.querySelector(".fiji-svg").style.fill = "#E4FDE1";
      break;
    case "FINLAND":
      document.querySelector("#finland").style.visibility = "visible";
      success = document.querySelector(".finland-svg").style.fill = "#E4FDE1";
      break;
    case "FRANCE":
      document.querySelector("#france").style.visibility = "visible";
      success = document.querySelector(".france-svg").style.fill = "#E4FDE1";
      break;
    case "GABON":
      document.querySelector("#gabon").style.visibility = "visible";
      success = document.querySelector(".gabon-svg").style.fill = "#E4FDE1";
      break;
    case "GAMBIA":
      document.querySelector("#gambia").style.visibility = "visible";
      success = document.querySelector(".gambia-svg").style.fill = "#E4FDE1";
      break;
    case "GEORGIA":
      document.querySelector("#georgia").style.visibility = "visible";
      success = document.querySelector(".georgia-svg").style.fill = "#E4FDE1";
      break;
    case "GERMANY":
      document.querySelector("#germany").style.visibility = "visible";
      success = document.querySelector(".germany-svg").style.fill = "#E4FDE1";
      break;
    case "GHANA":
      document.querySelector("#ghana").style.visibility = "visible";
      success = document.querySelector("#ghana-svg").style.fill = "#E4FDE1";
      break;
    case "GREECE":
      document.querySelector("#greece").style.visibility = "visible";
      success = document.querySelector(".greece-svg").style.fill = "#E4FDE1";
      break;
    case "GRENADA":
      document.querySelector("#grenada").style.visibility = "visible";
      success = document.querySelector(".grenada-svg").style.fill = "#E4FDE1";
      break;
    case "GUATEMALA":
      document.querySelector("#guatemala").style.visibility = "visible";
      success = document.querySelector("#guatemala-svg").style.fill = "#E4FDE1";
      break;
    case "GUINEA":
      document.querySelector("#guinea").style.visibility = "visible";
      success = document.querySelector(".guinea-svg").style.fill = "#E4FDE1";
      break;
    case "GUINEA BISSAU":
      document.querySelector("#guinea-bissau").style.visibility = "visible";
      success = document.querySelector(".guinea-bissau-svg").style.fill =
        "#E4FDE1";
      break;
    case "GUYANA":
      document.querySelector("#guyana").style.visibility = "visible";
      success = document.querySelector("#guyana-svg").style.fill = "#E4FDE1";
      break;
    case "HAITI":
      document.querySelector("#haiti").style.visibility = "visible";
      success = document.querySelector(".haiti-svg").style.fill = "#E4FDE1";
      break;
    case "HONDURAS":
      document.querySelector("#honduras").style.visibility = "visible";
      success = document.querySelector(".honduras-svg").style.fill = "#E4FDE1";
      break;
    case "HUNGARY":
      document.querySelector("#hungary").style.visibility = "visible";
      success = document.querySelector("#hungary-svg").style.fill = "#E4FDE1";
      break;
    case "ICELAND":
      document.querySelector("#iceland").style.visibility = "visible";
      success = document.querySelector("#iceland-svg").style.fill = "#E4FDE1";
      break;
    case "INDIA":
      document.querySelector("#india").style.visibility = "visible";
      success = document.querySelector(".india-svg").style.fill = "#E4FDE1";
      break;
    case "INDONESIA":
      document.querySelector("#indonesia").style.visibility = "visible";
      success = document.querySelector(".indonesia-svg").style.fill = "#E4FDE1";
      break;
    case "IRAN":
      document.querySelector("#iran").style.visibility = "visible";
      success = document.querySelector(".iran-svg").style.fill = "#E4FDE1";
      break;
    case "IRAQ":
      document.querySelector("#iraq").style.visibility = "visible";
      success = document.querySelector("#iraq-svg").style.fill = "#E4FDE1";
      break;
    case "IRELAND":
      document.querySelector("#ireland").style.visibility = "visible";
      success = document.querySelector(".ireland-svg").style.fill = "#E4FDE1";
      break;
    case "ISRAEL":
      document.querySelector("#israel").style.visibility = "visible";
      success = document.querySelector(".israel-svg").style.fill = "#E4FDE1";
      break;
    case "ITALY":
      document.querySelector("#italy").style.visibility = "visible";
      success = document.querySelector(".italy-svg").style.fill = "#E4FDE1";
      break;
    case "JAMAICA":
      document.querySelector("#jamaica").style.visibility = "visible";
      success = document.querySelector(".jamaica-svg").style.fill = "#E4FDE1";
      break;
    case "JAPAN":
      document.querySelector("#japan").style.visibility = "visible";
      success = document.querySelector(".japan-svg").style.fill = "#E4FDE1";
      break;
    case "JORDAN":
      document.querySelector("#jordan").style.visibility = "visible";
      success = document.querySelector("#jordan-svg").style.fill = "#E4FDE1";
      break;
    case "KAZAKHSTAN":
      document.querySelector("#kazakhstan").style.visibility = "visible";
      success = document.querySelector(".kazakhstan-svg").style.fill =
        "#E4FDE1";
      break;
    case "KENYA":
      document.querySelector("#kenya").style.visibility = "visible";
      success = document.querySelector("#kenya-svg").style.fill = "#E4FDE1";
      break;
    case "KIRIBATI":
      document.querySelector("#kiribati").style.visibility = "visible";
      success = document.querySelector(".kiribati-svg").style.fill = "#E4FDE1";
      break;
    case "KOSOVO":
      document.querySelector("#kosovo").style.visibility = "visible";
      success = document.querySelector(".kosovo-svg").style.fill = "#E4FDE1";
      break;
    case "KUWAIT":
      document.querySelector("#kuwait").style.visibility = "visible";
      success = document.querySelector(".kuwait-svg").style.fill = "#E4FDE1";
      break;
    case "KYRGYZSTAN":
      document.querySelector("#kyrgyzstan").style.visibility = "visible";
      success = document.querySelector("#kyrgyzstan-svg").style.fill =
        "#E4FDE1";
      break;
    case "LAOS":
      document.querySelector("#laos").style.visibility = "visible";
      success = document.querySelector("#laos-svg").style.fill = "#E4FDE1";
      break;
    case "LATVIA":
      document.querySelector("#latvia").style.visibility = "visible";
      success = document.querySelector("#latvia-svg").style.fill = "#E4FDE1";
      break;
    case "LEBANON":
      document.querySelector("#lebanon").style.visibility = "visible";
      success = document.querySelector(".lebanon-svg").style.fill = "#E4FDE1";
      break;
    case "LESOTHO":
      document.querySelector("#lesotho").style.visibility = "visible";
      success = document.querySelector("#lesotho-svg").style.fill = "#E4FDE1";
      break;
    case "LIBERIA":
      document.querySelector("#liberia").style.visibility = "visible";
      success = document.querySelector("#liberia-svg").style.fill = "#E4FDE1";
      break;
    case "LIBYA":
      document.querySelector("#libya").style.visibility = "visible";
      success = document.querySelector("#libya-svg").style.fill = "#E4FDE1";
      break;
    case "LIECHTENSTEIN":
      document.querySelector("#liechtenstein").style.visibility = "visible";
      success = document.querySelector(".liechtenstein-svg").style.fill =
        "#E4FDE1";
      break;
    case "LITHUANIA":
      document.querySelector("#lithuania").style.visibility = "visible";
      success = document.querySelector("#lithuania-svg").style.fill = "#E4FDE1";
      break;
    case "LUXEMBOURG":
      document.querySelector("#luxembourg").style.visibility = "visible";
      success = document.querySelector(".luxembourg-svg").style.fill =
        "#E4FDE1";
      break;
    case "MADAGASCAR":
      document.querySelector("#madagascar").style.visibility = "visible";
      success = document.querySelector(".madagascar-svg").style.fill =
        "#E4FDE1";
      break;
    case "MALAWI":
      document.querySelector("#malawi").style.visibility = "visible";
      success = document.querySelector("#malawi-svg").style.fill = "#E4FDE1";
      break;
    case "MALAYSIA":
      document.querySelector("#malaysia").style.visibility = "visible";
      success = document.querySelector(".malaysia-svg").style.fill = "#E4FDE1";
      break;
    case "MALDIVES":
      document.querySelector("#maldives").style.visibility = "visible";
      success = document.querySelector(".maldives-svg").style.fill = "#E4FDE1";
      break;
    case "MALI":
      document.querySelector("#mali").style.visibility = "visible";
      success = document.querySelector("#mali-svg").style.fill = "#E4FDE1";
      break;
    case "MALTA":
      document.querySelector("#malta").style.visibility = "visible";
      success = document.querySelector(".malta-svg").style.fill = "#E4FDE1";
      break;
    case "MARSHALL ISLANDS":
      document.querySelector("#marshall-islands").style.visibility = "visible";
      success = document.querySelector(".marshall-islands-svg").style.fill =
        "#E4FDE1";
      break;
    case "MAURITANIA":
      document.querySelector("#mauritania").style.visibility = "visible";
      success = document.querySelector(".mauritania-svg").style.fill =
        "#E4FDE1";
      break;
    case "MAURITIUS":
      document.querySelector("#mauritius").style.visibility = "visible";
      success = document.querySelector(".mauritius-svg").style.fill = "#E4FDE1";
      break;
    case "MEXICO":
      document.querySelector("#mexico").style.visibility = "visible";
      success = document.querySelector(".mexico-svg").style.fill = "#E4FDE1";
      break;
    case "MOLDOVA":
      document.querySelector("#moldova").style.visibility = "visible";
      success = document.querySelector(".moldova-svg").style.fill = "#E4FDE1";
      break;
    case "MONACO":
      document.querySelector("#monaco").style.visibility = "visible";
      success = document.querySelector(".monaco-svg").style.fill = "#E4FDE1";
      break;
    case "MONGOLIA":
      document.querySelector("#mongolia").style.visibility = "visible";
      success = document.querySelector("#mongolia-svg").style.fill = "#E4FDE1";
      break;
    case "MONTENEGRO":
      document.querySelector("#montenegro").style.visibility = "visible";
      success = document.querySelector(".montenegro-svg").style.fill =
        "#E4FDE1";
      break;
    case "MOROCCO":
      document.querySelector("#morocco").style.visibility = "visible";
      success = document.querySelector(".morocco-svg").style.fill = "#E4FDE1";
      break;
    case "MOZAMBIQUE":
      document.querySelector("#mozambique").style.visibility = "visible";
      success = document.querySelector(".mozambique-svg").style.fill =
        "#E4FDE1";
      break;
    case "MYANMAR":
      document.querySelector("#myanmar").style.visibility = "visible";
      success = document.querySelector(".myanmar-svg").style.fill = "#E4FDE1";
      break;
    case "NAMIBIA":
      document.querySelector("#namibia").style.visibility = "visible";
      success = document.querySelector("#namibia-svg").style.fill = "#E4FDE1";
      break;
    case "NAURU":
      document.querySelector("#nauru").style.visibility = "visible";
      success = document.querySelector(".nauru-svg").style.fill = "#E4FDE1";
      break;
    case "NEPAL":
      document.querySelector("#nepal").style.visibility = "visible";
      success = document.querySelector("#nepal-svg").style.fill = "#E4FDE1";
      break;
    case "NETHERLANDS":
      document.querySelector("#netherlands").style.visibility = "visible";
      success = document.querySelector(".netherlands-svg").style.fill =
        "#E4FDE1";
      break;
    case "NEW ZEALAND":
      document.querySelector("#new-zealand").style.visibility = "visible";
      success = document.querySelector(".new-zealand-svg").style.fill =
        "#E4FDE1";
      break;
    case "NICARAGUA":
      document.querySelector("#nicaragua").style.visibility = "visible";
      success = document.querySelector("#nicaragua-svg").style.fill = "#E4FDE1";
      break;
    case "NIGER":
      document.querySelector("#niger").style.visibility = "visible";
      success = document.querySelector("#niger-svg").style.fill = "#E4FDE1";
      break;
    case "NIGERIA":
      document.querySelector("#nigeria").style.visibility = "visible";
      success = document.querySelector(".nigeria-svg").style.fill = "#E4FDE1";
      break;
    case "NORTH KOREA":
      document.querySelector("#north-korea").style.visibility = "visible";
      success = document.querySelector("#north-korea-svg").style.fill =
        "#E4FDE1";
      break;
    case "NORTH MACEDONIA":
      document.querySelector("#north-macedonia").style.visibility = "visible";
      success = document.querySelector("#north-macedonia-svg").style.fill =
        "#E4FDE1";
      break;
    case "NORWAY":
      document.querySelector("#norway").style.visibility = "visible";
      success = document.querySelector(".norway-svg").style.fill = "#E4FDE1";
      break;
    case "OMAN":
      document.querySelector("#oman").style.visibility = "visible";
      success = document.querySelector(".oman-svg").style.fill = "#E4FDE1";
      break;
    case "PAKISTAN":
      document.querySelector("#pakistan").style.visibility = "visible";
      success = document.querySelector(".pakistan-svg").style.fill = "#E4FDE1";
      break;
    case "PALAU":
      document.querySelector("#palau").style.visibility = "visible";
      success = document.querySelector(".palau-svg").style.fill = "#E4FDE1";
      break;
    case "PANAMA":
      document.querySelector("#panama").style.visibility = "visible";
      success = document.querySelector(".panama-svg").style.fill = "#E4FDE1";
      break;
    case "PAPUA NEW GUINEA":
      document.querySelector("#papua-new-guinea").style.visibility = "visible";
      success = document.querySelector(".papua-new-guinea-svg").style.fill =
        "#E4FDE1";
      break;
    case "PARAGUAY":
      document.querySelector("#paraguay").style.visibility = "visible";
      success = document.querySelector("#paraguay-svg").style.fill = "#E4FDE1";
      break;
    case "PERU":
      document.querySelector("#peru").style.visibility = "visible";
      success = document.querySelector("#peru-svg").style.fill = "#E4FDE1";
      break;
    case "PHILIPPINES":
      document.querySelector("#philippines").style.visibility = "visible";
      success = document.querySelector(".philippines-svg").style.fill =
        "#E4FDE1";
      break;
    case "POLAND":
      document.querySelector("#poland").style.visibility = "visible";
      success = document.querySelector("#poland-svg").style.fill = "#E4FDE1";
      break;
    case "PORTUGAL":
      document.querySelector("#portugal").style.visibility = "visible";
      success = document.querySelector(".portugal-svg").style.fill = "#E4FDE1";
      break;
    case "QATAR":
      document.querySelector("#qatar").style.visibility = "visible";
      success = document.querySelector(".qatar-svg").style.fill = "#E4FDE1";
      break;
    case "REPUBLIC OF THE CONGO":
      document.querySelector("#republic-of-the-congo").style.visibility =
        "visible";
      success = document.querySelector(
        "#republic-of-the-congo-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "ROMANIA":
      document.querySelector("#romania").style.visibility = "visible";
      success = document.querySelector("#romania-svg").style.fill = "#E4FDE1";
      break;
    case "RUSSIA":
      document.querySelector("#russia").style.visibility = "visible";
      success = document.querySelector(".russia-svg").style.fill = "#E4FDE1";
      break;
    case "RWANDA":
      document.querySelector("#rwanda").style.visibility = "visible";
      success = document.querySelector("#rwanda-svg").style.fill = "#E4FDE1";
      break;
    case "SAMOA":
      document.querySelector("#samoa").style.visibility = "visible";
      success = document.querySelector(".samoa-svg").style.fill = "#E4FDE1";
      break;
    case "SAN MARINO":
      document.querySelector("#san-marino").style.visibility = "visible";
      success = document.querySelector(".san-marino-svg").style.fill =
        "#E4FDE1";
      break;
    case "SAUDI ARABIA":
      document.querySelector("#saudi-arabia").style.visibility = "visible";
      success = document.querySelector(".saudi-arabia-svg").style.fill =
        "#E4FDE1";
      break;
    case "SENEGAL":
      document.querySelector("#senegal").style.visibility = "visible";
      success = document.querySelector("#senegal-svg").style.fill = "#E4FDE1";
      break;
    case "SERBIA":
      document.querySelector("#serbia").style.visibility = "visible";
      success = document.querySelector("#serbia-svg").style.fill = "#E4FDE1";
      break;
    case "SEYCHELLES":
      document.querySelector("#seychelles").style.visibility = "visible";
      success = document.querySelector(".seychelles-svg").style.fill =
        "#E4FDE1";
      break;
    case "SIERRA LEONE":
      document.querySelector("#sierra-leone").style.visibility = "visible";
      success = document.querySelector(".sierra-leone-svg").style.fill =
        "#E4FDE1";
      break;
    case "SINGAPORE":
      document.querySelector("#singapore").style.visibility = "visible";
      success = document.querySelector(".singapore-svg").style.fill = "#E4FDE1";
      break;
    case "SLOVAKIA":
      document.querySelector("#slovakia").style.visibility = "visible";
      success = document.querySelector("#slovakia-svg").style.fill = "#E4FDE1";
      break;
    case "SLOVENIA":
      document.querySelector("#slovenia").style.visibility = "visible";
      success = document.querySelector("#slovenia-svg").style.fill = "#E4FDE1";
      break;
    case "SOLOMON ISLANDS":
      document.querySelector("#solomon-islands").style.visibility = "visible";
      success = document.querySelector(".solomon-islands-svg").style.fill =
        "#E4FDE1";
      break;
    case "SOMALIA":
      document.querySelector("#somalia").style.visibility = "visible";
      success = document.querySelector(".somalia-svg").style.fill = "#E4FDE1";
      break;
    case "SOUTH AFRICA":
      document.querySelector("#south-africa").style.visibility = "visible";
      success = document.querySelector("#south-africa-svg").style.fill =
        "#E4FDE1";
      break;
    case "SOUTH KOREA":
      document.querySelector("#south-korea").style.visibility = "visible";
      success = document.querySelector(".south-korea-svg").style.fill =
        "#E4FDE1";
      break;
    case "SOUTH SUDAN":
      document.querySelector("#south-sudan").style.visibility = "visible";
      success = document.querySelector("#south-sudan-svg").style.fill =
        "#E4FDE1";
      break;
    case "SPAIN":
      document.querySelector("#spain").style.visibility = "visible";
      success = document.querySelector(".spain-svg").style.fill = "#E4FDE1";
      break;
    case "SRI LANKA":
      document.querySelector("#sri-lanka").style.visibility = "visible";
      success = document.querySelector(".sri-lanka-svg").style.fill = "#E4FDE1";
      break;
    case "SAINT KITTS AND NEVIS":
      document.querySelector("#saint-kitts-and-nevis").style.visibility =
        "visible";
      success = document.querySelector(
        ".saint-kitts-and-nevis-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "SAINT LUCIA":
      document.querySelector("#saint-lucia").style.visibility = "visible";
      success = document.querySelector(".saint-lucia-svg").style.fill =
        "#E4FDE1";
      break;
    case "SAINT VINCENT AND GRENADINES":
      document.querySelector("#saint-vincent-and-grenadines").style.visibility =
        "visible";
      success = document.querySelector(
        ".saint-vincent-and-grenadines-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "SUDAN":
      document.querySelector("#sudan").style.visibility = "visible";
      success = document.querySelector("#sudan-svg").style.fill = "#E4FDE1";
      break;
    case "SURINAME":
      document.querySelector("#suriname").style.visibility = "visible";
      success = document.querySelector("#suriname-svg").style.fill = "#E4FDE1";
      break;
    case "SWEDEN":
      document.querySelector("#sweden").style.visibility = "visible";
      success = document.querySelector(".sweden-svg").style.fill = "#E4FDE1";
      break;
    case "SWITZERLAND":
      document.querySelector("#switzerland").style.visibility = "visible";
      success = document.querySelector("#switzerland-svg").style.fill =
        "#E4FDE1";
      break;
    case "SYRIA":
      document.querySelector("#syria").style.visibility = "visible";
      success = document.querySelector("#syria-svg").style.fill = "#E4FDE1";
      break;
    case "SÃO TOMÉ AND PRÍNCIPE":
    case "SAO TOME AND PRINCIPE":
    case "SÃO TOMÉ E PRÍNCIPE":
    case "SAO TOME E PRINCIPE":
      document.querySelector("#sao-tome-and-principe").style.visibility =
        "visible";
      success = document.querySelector(
        ".sao-tome-and-principe-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "TAIWAN":
      document.querySelector("#taiwan").style.visibility = "visible";
      success = document.querySelector(".taiwan-svg").style.fill = "#E4FDE1";
      break;
    case "TAJIKISTAN":
      document.querySelector("#tajikistan").style.visibility = "visible";
      success = document.querySelector("#tajikistan-svg").style.fill =
        "#E4FDE1";
      break;
    case "TANZANIA":
      document.querySelector("#tanzania").style.visibility = "visible";
      success = document.querySelector(".tanzania-svg").style.fill = "#E4FDE1";
      break;
    case "THAILAND":
      document.querySelector("#thailand").style.visibility = "visible";
      success = document.querySelector(".thailand-svg").style.fill = "#E4FDE1";
      break;
    case "TOGO":
      document.querySelector("#togo").style.visibility = "visible";
      success = document.querySelector("#togo-svg").style.fill = "#E4FDE1";
      break;
    case "TONGA":
      document.querySelector("#tonga").style.visibility = "visible";
      success = document.querySelector(".tonga-svg").style.fill = "#E4FDE1";
      break;
    case "TRINIDAD AND TOBAGO":
      document.querySelector("#trinidad-and-tobago").style.visibility =
        "visible";
      success = document.querySelector(".trinidad-and-tobago-svg").style.fill =
        "#E4FDE1";
      break;
    case "TUNISIA":
      document.querySelector("#tunisia").style.visibility = "visible";
      success = document.querySelector(".tunisia-svg").style.fill = "#E4FDE1";
      break;
    case "TURKEY":
      document.querySelector("#turkey").style.visibility = "visible";
      success = document.querySelector(".turkey-svg").style.fill = "#E4FDE1";
      break;
    case "TURKMENISTAN":
      document.querySelector("#turkmenistan").style.visibility = "visible";
      success = document.querySelector("#turkmenistan-svg").style.fill =
        "#E4FDE1";
      break;
    case "TUVALU":
      document.querySelector("#tuvalu").style.visibility = "visible";
      success = document.querySelector(".tuvalu-svg").style.fill = "#E4FDE1";
      break;
    case "UGANDA":
      document.querySelector("#uganda").style.visibility = "visible";
      success = document.querySelector("#uganda-svg").style.fill = "#E4FDE1";
      break;
    case "UKRAINE":
      document.querySelector("#ukraine").style.visibility = "visible";
      success = document.querySelector(".ukraine-svg").style.fill = "#E4FDE1";
      break;
    case "UNITED ARAB EMIRATES":
    case "UAE":
      document.querySelector("#united-arab-emirates").style.visibility =
        "visible";
      success = document.querySelector(".united-arab-emirates-svg").style.fill =
        "#E4FDE1";
      break;
    case "UNITED KINGDOM":
    case "UK":
      document.querySelector("#united-kingdom").style.visibility = "visible";
      success = document.querySelector(".united-kingdom-svg").style.fill =
        "#E4FDE1";
      break;
    case "UNITED STATES OF AMERICA":
    case "UNITED STATES":
    case "USA":
      document.querySelector("#united-states").style.visibility = "visible";
      success = document.querySelector(
        ".united-states-of-america-svg"
      ).style.fill = "#E4FDE1";
      break;
    case "URUGUAY":
      document.querySelector("#uruguay").style.visibility = "visible";
      success = document.querySelector("#uruguay-svg").style.fill = "#E4FDE1";
      break;
    case "UZBEKISTAN":
      document.querySelector("#uzbekistan").style.visibility = "visible";
      success = document.querySelector("#uzbekistan-svg").style.fill =
        "#E4FDE1";
      break;
    case "VANUATU":
      document.querySelector("#vanuatu").style.visibility = "visible";
      success = document.querySelector(".vanuatu-svg").style.fill = "#E4FDE1";
      break;
    case "VATICAN CITY":
    case "VATICAN":
      document.querySelector("#vatican-city").style.visibility = "visible";
      success = document.querySelector(".vatican-city-svg").style.fill =
        "#E4FDE1";
      break;
    case "VENEZUELA":
      document.querySelector("#venezuela").style.visibility = "visible";
      success = document.querySelector(".venezuela-svg").style.fill = "#E4FDE1";
      break;
    case "VIETNAM":
      document.querySelector("#vietnam").style.visibility = "visible";
      success = document.querySelector(".vietnam-svg").style.fill = "#E4FDE1";
      break;
    case "YEMEN":
      document.querySelector("#yemen").style.visibility = "visible";
      success = document.querySelector(".yemen-svg").style.fill = "#E4FDE1";
      break;
    case "ZAMBIA":
      document.querySelector("#zambia").style.visibility = "visible";
      success = document.querySelector("#zambia-svg").style.fill = "#E4FDE1";
      break;
    case "ZIMBABWE":
      document.querySelector("#zimbabwe").style.visibility = "visible";
      success = document.querySelector("#zimbabwe-svg").style.fill = "#E4FDE1";
      break;
  }
}

// Hit enter
function hitEnter(event) {
  if (event.key === "Enter") {
    showCountry(getCountryFromInput());
    // Solve this
    if (success !== false) {
      inputValue.value = "";
      guessedCountriesCounter();
      success = false;
    }
  }
}

inputValue.addEventListener("keyup", hitEnter);

// If you beat the timer
function win() {
  clearInterval(clock);
  document.getElementById("input").disabled = true;
  if (
    confirm(
      `Congratulations! You won!\nYou finished at ${mm}:${ss}\nDo you want to play again?`
    )
  ) {
    // document.getElementById("start-button").disabled = false;
    document.location.reload();
  }
}

// If you don't beat the timer
function lose() {
  alert(`You lost!`);
  document.getElementById("input").disabled = true;
  document.location.reload();
}
