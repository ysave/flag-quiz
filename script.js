let json = `{
    "ad": "Andorra",
    "ae": "Vereinigte Arabische Emirate",
    "af": "Afghanistan",
    "ag": "Antigua und Barbuda",
    "ai": "Anguilla",
    "al": "Albanien",
    "am": "Armenien",
    "ao": "Angola",
    "aq": "Antarktis",
    "ar": "Argentinien",
    "as": "Amerikanisch-Samoa",
    "at": "Österreich",
    "au": "Australien",
    "aw": "Aruba",
    "ax": "Åland",
    "az": "Aserbaidschan",
    "ba": "Bosnien und Herzegowina",
    "bb": "Barbados",
    "bd": "Bangladesch",
    "be": "Belgien",
    "bf": "Burkina Faso",
    "bg": "Bulgarien",
    "bh": "Bahrain",
    "bi": "Burundi",
    "bj": "Benin",
    "bl": "Saint-Barthélemy",
    "bm": "Bermuda",
    "bn": "Brunei",
    "bo": "Bolivien",
    "bq": "Karibische Niederlande",
    "br": "Brasilien",
    "bs": "Bahamas",
    "bt": "Bhutan",
    "bv": "Bouvetinsel",
    "bw": "Botswana",
    "by": "Weißrussland",
    "bz": "Belize",
    "ca": "Kanada",
    "cc": "Kokosinseln",
    "cd": "Kongo (Dem. Rep.)",
    "cf": "Zentralafrikanische Republik",
    "cg": "Kongo",
    "ch": "Schweiz",
    "ci": "Elfenbeinküste",
    "ck": "Cookinseln",
    "cl": "Chile",
    "cm": "Kamerun",
    "cn": "China",
    "co": "Kolumbien",
    "cr": "Costa Rica",
    "cu": "Kuba",
    "cv": "Kap Verde",
    "cw": "Curaçao",
    "cx": "Weihnachtsinsel",
    "cy": "Zypern",
    "cz": "Tschechien",
    "de": "Deutschland",
    "dj": "Dschibuti",
    "dk": "Dänemark",
    "dm": "Dominica",
    "do": "Dominikanische Republik",
    "dz": "Algerien",
    "ec": "Ecuador",
    "ee": "Estland",
    "eg": "Ägypten",
    "eh": "Westsahara",
    "er": "Eritrea",
    "es": "Spanien",
    "et": "Äthiopien",
    "eu": "Europäische Union",
    "fi": "Finnland",
    "fj": "Fidschi",
    "fk": "Falklandinseln",
    "fm": "Mikronesien",
    "fo": "Färöer-Inseln",
    "fr": "Frankreich",
    "ga": "Gabun",
    "gb": "Vereinigtes Königreich",
    "gb-eng": "England",
    "gb-nir": "Nordirland",
    "gb-sct": "Schottland",
    "gb-wls": "Wales",
    "gd": "Grenada",
    "ge": "Georgien",
    "gf": "Französisch-Guayana",
    "gg": "Guernsey",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gl": "Grönland",
    "gm": "Gambia",
    "gn": "Guinea",
    "gp": "Guadeloupe",
    "gq": "Äquatorialguinea",
    "gr": "Griechenland",
    "gs": "Südgeorgien und die Südlichen Sandwichinseln",
    "gt": "Guatemala",
    "gu": "Guam",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "hk": "Hongkong",
    "hm": "Heard und die McDonaldinseln",
    "hn": "Honduras",
    "hr": "Kroatien",
    "ht": "Haiti",
    "hu": "Ungarn",
    "id": "Indonesien",
    "ie": "Irland",
    "il": "Israel",
    "im": "Insel Man",
    "in": "Indien",
    "io": "Britisches Territorium im Indischen Ozean",
    "iq": "Irak",
    "ir": "Iran",
    "is": "Island",
    "it": "Italien",
    "je": "Jersey",
    "jm": "Jamaika",
    "jo": "Jordanien",
    "jp": "Japan",
    "ke": "Kenia",
    "kg": "Kirgisistan",
    "kh": "Kambodscha",
    "ki": "Kiribati",
    "km": "Komoren",
    "kn": "St. Kitts und Nevis",
    "kp": "Nordkorea",
    "kr": "Südkorea",
    "kw": "Kuwait",
    "ky": "Kaimaninseln",
    "kz": "Kasachstan",
    "la": "Laos",
    "lb": "Libanon",
    "lc": "St. Lucia",
    "li": "Liechtenstein",
    "lk": "Sri Lanka",
    "lr": "Liberia",
    "ls": "Lesotho",
    "lt": "Litauen",
    "lu": "Luxemburg",
    "lv": "Lettland",
    "ly": "Libyen",
    "ma": "Marokko",
    "mc": "Monaco",
    "md": "Moldawien",
    "me": "Montenegro",
    "mf": "Saint-Martin",
    "mg": "Madagaskar",
    "mh": "Marshallinseln",
    "mk": "Nordmazedonien",
    "ml": "Mali",
    "mm": "Myanmar",
    "mn": "Mongolei",
    "mo": "Macao",
    "mp": "Nördliche Marianen",
    "mq": "Martinique",
    "mr": "Mauretanien",
    "ms": "Montserrat",
    "mt": "Malta",
    "mu": "Mauritius",
    "mv": "Malediven",
    "mw": "Malawi",
    "mx": "Mexiko",
    "my": "Malaysia",
    "mz": "Mosambik",
    "na": "Namibia",
    "nc": "Neukaledonien",
    "ne": "Niger",
    "nf": "Norfolkinsel",
    "ng": "Nigeria",
    "ni": "Nicaragua",
    "nl": "Niederlande",
    "no": "Norwegen",
    "np": "Nepal",
    "nr": "Nauru",
    "nu": "Niue",
    "nz": "Neuseeland",
    "om": "Oman",
    "pa": "Panama",
    "pe": "Peru",
    "pf": "Französisch-Polynesien",
    "pg": "Papua-Neuguinea",
    "ph": "Philippinen",
    "pk": "Pakistan",
    "pl": "Polen",
    "pm": "St. Pierre und Miquelon",
    "pn": "Pitcairninseln",
    "pr": "Puerto Rico",
    "ps": "Palästina",
    "pt": "Portugal",
    "pw": "Palau",
    "py": "Paraguay",
    "qa": "Katar",
    "re": "Réunion",
    "ro": "Rumänien",
    "rs": "Serbien",
    "ru": "Russland",
    "rw": "Ruanda",
    "sa": "Saudi-Arabien",
    "sb": "Salomonen",
    "sc": "Seychellen",
    "sd": "Sudan",
    "se": "Schweden",
    "sg": "Singapur",
    "sh": "St. Helena, Ascension und Tristan da Cunha",
    "si": "Slowenien",
    "sj": "Spitzbergen und Jan Mayen",
    "sk": "Slowakei",
    "sl": "Sierra Leone",
    "sm": "San Marino",
    "sn": "Senegal",
    "so": "Somalia",
    "sr": "Suriname",
    "ss": "Südsudan",
    "st": "São Tomé und Príncipe",
    "sv": "El Salvador",
    "sx": "Sint Maarten",
    "sy": "Syrien",
    "sz": "Swasiland",
    "tc": "Turks-und Caicosinseln",
    "td": "Tschad",
    "tf": "Französische Süd- und Antarktisgebiete",
    "tg": "Togo",
    "th": "Thailand",
    "tj": "Tadschikistan",
    "tk": "Tokelau",
    "tl": "Osttimor",
    "tm": "Turkmenistan",
    "tn": "Tunesien",
    "to": "Tonga",
    "tr": "Türkei",
    "tt": "Trinidad und Tobago",
    "tv": "Tuvalu",
    "tw": "Taiwan",
    "tz": "Tansania",
    "ua": "Ukraine",
    "ug": "Uganda",
    "um": "Kleinere Inselbesitzungen der Vereinigten Staaten",
    "un": "Vereinte Nationen",
    "us": "Vereinigte Staaten",
    "us-ak": "Alaska",
    "us-al": "Alabama",
    "us-ar": "Arkansas",
    "us-az": "Arizona",
    "us-ca": "Kalifornien",
    "us-co": "Colorado",
    "us-ct": "Connecticut",
    "us-de": "Delaware",
    "us-fl": "Florida",
    "us-ga": "Georgia",
    "us-hi": "Hawaii",
    "us-ia": "Iowa",
    "us-id": "Idaho",
    "us-il": "Illinois",
    "us-in": "Indiana",
    "us-ks": "Kansas",
    "us-ky": "Kentucky",
    "us-la": "Louisiana",
    "us-ma": "Massachusetts",
    "us-md": "Maryland",
    "us-me": "Maine",
    "us-mi": "Michigan",
    "us-mn": "Minnesota",
    "us-mo": "Missouri",
    "us-ms": "Mississippi",
    "us-mt": "Montana",
    "us-nc": "North Carolina",
    "us-nd": "North Dakota",
    "us-ne": "Nebraska",
    "us-nh": "New Hampshire",
    "us-nj": "New Jersey",
    "us-nm": "New Mexico",
    "us-nv": "Nevada",
    "us-ny": "New York",
    "us-oh": "Ohio",
    "us-ok": "Oklahoma",
    "us-or": "Oregon",
    "us-pa": "Pennsylvania",
    "us-ri": "Rhode Island",
    "us-sc": "South Carolina",
    "us-sd": "South Dakota",
    "us-tn": "Tennessee",
    "us-tx": "Texas",
    "us-ut": "Utah",
    "us-va": "Virginia",
    "us-vt": "Vermont",
    "us-wa": "Washington",
    "us-wi": "Wisconsin",
    "us-wv": "West Virginia",
    "us-wy": "Wyoming",
    "uy": "Uruguay",
    "uz": "Usbekistan",
    "va": "Vatikanstadt",
    "vc": "St. Vincent und die Grenadinen",
    "ve": "Venezuela",
    "vg": "Britische Jungferninseln",
    "vi": "Amerikanische Jungferninseln",
    "vn": "Vietnam",
    "vu": "Vanuatu",
    "wf": "Wallis und Futuna",
    "ws": "Samoa",
    "xk": "Kosovo",
    "ye": "Jemen",
    "yt": "Mayotte",
    "za": "Südafrika",
    "zm": "Sambia",
    "zw": "Simbabwe"
}`
let short = ["as",
    "at",
    "au",
    "aw",
    "ax",
    "az",
    "ba",
    "bb",
    "bd",
    "be",
    "bf",
    "bg",
    "bh",
    "bi",
    "bj",
    "bl",
    "bm",
    "bn",
    "bo",
    "bq",
    "br",
    "bs",
    "bt",
    "bv",
    "bw",
    "by",
    "bz",
    "ca",
    "cc",
    "cd",
    "cf",
    "cg",
    "ch",
    "ci",
    "ck",
    "cl",
    "cm",
    "cn",
    "co",
    "cr",
    "cu",
    "cv",
    "cw",
    "cx",
    "cy",
    "cz",
    "de",
    "dj",
    "dk",
    "dm",
    "do",
    "dz",
    "ec",
    "ee",
    "eg",
    "eh",
    "er",
    "es",
    "et",
    "eu",
    "fi",
    "fj",
    "fk",
    "fm",
    "fo",
    "fr",
    "ga",
    "gb",
    "gb-eng",
    "gb-nir",
    "gb-sct",
    "gb-wls",
    "gd",
    "ge",
    "gf",
    "gg",
    "gh",
    "gi",
    "gl",
    "gm",
    "gn",
    "gp",
    "gq",
    "gr",
    "gs",
    "gt",
    "gu",
    "gw",
    "gy",
    "hk",
    "hm",
    "hn",
    "hr",
    "ht",
    "hu",
    "id",
    "ie",
    "il",
    "im",
    "in",
    "io",
    "iq",
    "ir",
    "is",
    "it",
    "je",
    "jm",
    "jo",
    "jp",
    "ke",
    "kg",
    "kh",
    "ki",
    "km",
    "kn",
    "kp",
    "kr",
    "kw",
    "ky",
    "kz",
    "la",
    "lb",
    "lc",
    "li",
    "lk",
    "lr",
    "ls",
    "lt",
    "lu",
    "lv",
    "ly",
    "ma",
    "mc",
    "md",
    "me",
    "mf",
    "mg",
    "mh",
    "mk",
    "ml",
    "mm",
    "mn",
    "mo",
    "mp",
    "mq",
    "mr",
    "ms",
    "mt",
    "mu",
    "mv",
    "mw",
    "mx",
    "my",
    "mz",
    "na",
    "nc",
    "ne",
    "nf",
    "ng",
    "ni",
    "nl",
    "no",
    "np",
    "nr",
    "nu",
    "nz",
    "om",
    "pa",
    "pe",
    "pf",
    "pg",
    "ph",
    "pk",
    "pl",
    "pm",
    "pn",
    "pr",
    "ps",
    "pt",
    "pw",
    "py",
    "qa",
    "re",
    "ro",
    "rs",
    "ru",
    "rw",
    "sa",
    "sb",
    "sc",
    "sd",
    "se",
    "sg",
    "sh",
    "si",
    "sj",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sr",
    "ss",
    "st",
    "sv",
    "sx",
    "sy",
    "sz",
    "tc",
    "td",
    "tf",
    "tg",
    "th",
    "tj",
    "tk",
    "tl",
    "tm",
    "tn",
    "to",
    "tr",
    "tt",
    "tv",
    "tw",
    "tz",
    "ua",
    "ug",
    "um",
    "un",
    "us",
    "uy",
    "uz",
    "va",
    "vc",
    "ve",
    "vg",
    "vi",
    "vn",
    "vu",
    "wf",
    "ws",
    "xk",
    "ye",
    "yt",
    "za",
    "zm",
    "zw"]
let flags = JSON.parse(json)

let rightAnswer

let rightCnt = 0;
let wrongCnt = 0;

function randomFlag(){
    let flag = []
    for (let i = 0; i < 5; i++) {
        flag[i] = short[Math.floor(Math.random() * short.length)]
    }
    let src = 'https://flagcdn.com/' + flag[0] + '.svg'

    document.getElementById("flag").src = src.toString()
    rightAnswer = flag[0]
    answer(flag)
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    return array
}

function answer(flag){
    let answer = shuffle(flag)
    document.getElementById("b0").setAttribute("value", flags[answer[0]])
    document.getElementById("b1").setAttribute("value", flags[answer[1]])
    document.getElementById("b2").setAttribute("value", flags[answer[2]])
    document.getElementById("b3").setAttribute("value", flags[answer[3]])
    document.getElementById("b4").setAttribute("value", flags[answer[4]])

}
function correction(id, value){
    if(value == flags[rightAnswer]){
        rightCnt ++
        document.getElementById("right").innerHTML = rightCnt
        document.getElementById(id).style.backgroundColor = "#616F39"
    } else {
        wrongCnt ++
        document.getElementById("wrong").innerHTML = wrongCnt
        document.getElementById(id).style.backgroundColor = "#834C69"
        for (let i = 0; i < 5; i++) {
            if(document.getElementById("b" + i).getAttribute("value", ) === flags[rightAnswer]){
                document.getElementById("b"+ i).style.backgroundColor = "#616F39"
            }
        }
    }
    setTimeout(function () {
        randomFlag()
        const buttons = document.getElementsByClassName("btns")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = null
        }
    }, 1269)

}
