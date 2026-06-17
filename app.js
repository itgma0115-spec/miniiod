const state = {
  lang: "mn",
  category: "fruits",
  alphaLang: "mn",
  progress: Number(localStorage.getItem("miniiOdProgress") || 0),
  letterStep: {},
  currentLetterText: "",
  gameAnswer: null,
  role: "",
  parentRole: "",
  voiceProfile: localStorage.getItem("miniiOdVoiceProfile") || "default",
  parentTab: "report",
  recording: null,
  recordTarget: "",
  };

const categories = [
  {
    id: "animals",
    mn: "Амьтад",
    en: "Animals"
  },
  {
    id: "fruits",
    mn: "Жимс",
    en: "Fruits"
  },
  {
    id: "vehicles",
    mn: "Машин",
    en: "Vehicles"
  },
  {
    id: "countries",
    mn: "Улс орнууд",
    en: "Countries"
  },
  {
    id: "numbers",
    mn: "Тоо",
    en: "Numbers"
  },
  {
    id: "colors",
    mn: "Өнгө",
    en: "Colors"
  },
  {
    id: "shapes",
    mn: "Дүрс",
    en: "Shapes"
  },
  {
    id: "body",
    mn: "Биеийн хэсэг",
    en: "Body Parts"
  },
  {
    id: "food",
    mn: "Хоол",
    en: "Food"
  },
  {
    id: "family",
    mn: "Гэр бүл",
    en: "Family"
  }
];

const words = {
  "animals": [
    [
      "Баавгай",
      "Bear",
      "bear animal"
    ],
    [
      "Үнэг",
      "Fox",
      "fox animal"
    ],
    [
      "Буга",
      "Deer",
      "deer animal"
    ],
    [
      "Чоно",
      "Wolf",
      "wolf animal"
    ],
    [
      "Туулай",
      "Rabbit",
      "rabbit animal"
    ],
    [
      "Хэрэм",
      "Squirrel",
      "squirrel animal"
    ],
    [
      "Үхэр",
      "Cow",
      "cow farm animal"
    ],
    [
      "Морь",
      "Horse",
      "horse farm animal"
    ],
    [
      "Хонь",
      "Sheep",
      "sheep farm animal"
    ],
    [
      "Ямаа",
      "Goat",
      "goat farm animal"
    ],
    [
      "Гахай",
      "Pig",
      "pig farm animal"
    ],
    [
      "Тахиа",
      "Chicken",
      "chicken farm animal"
    ],
    [
      "Арслан",
      "Lion",
      "lion african animal"
    ],
    [
      "Заан",
      "Elephant",
      "elephant african animal"
    ],
    [
      "Анааш",
      "Giraffe",
      "giraffe african animal"
    ],
    [
      "Тахь",
      "Zebra",
      "zebra african animal"
    ],
    [
      "Сармагчин",
      "Monkey",
      "monkey animal"
    ],
    [
      "Матар",
      "Crocodile",
      "crocodile animal"
    ],
    [
      "Бар",
      "Tiger",
      "tiger animal"
    ],
    [
      "Ирвэс",
      "Leopard",
      "leopard animal"
    ],
    [
      "Хирс",
      "Rhino",
      "rhinoceros animal"
    ],
    [
      "Хиппо",
      "Hippo",
      "hippopotamus animal"
    ],
    [
      "Тэмээ",
      "Camel",
      "camel animal"
    ],
    [
      "Нохой",
      "Dog",
      "dog animal"
    ],
    [
      "Муур",
      "Cat",
      "cat animal"
    ],
    [
      "Нугас",
      "Duck",
      "duck animal"
    ],
    [
      "Галуу",
      "Goose",
      "goose animal"
    ],
    [
      "Шар шувуу",
      "Owl",
      "owl animal"
    ],
    [
      "Бүргэд",
      "Eagle",
      "eagle animal"
    ],
    [
      "Оцон шувуу",
      "Penguin",
      "penguin animal"
    ],
    [
      "Загас",
      "Fish",
      "fish animal"
    ],
    [
      "Мэлхий",
      "Frog",
      "frog animal"
    ],
    [
      "Яст мэлхий",
      "Turtle",
      "turtle animal"
    ],
    [
      "Далайн гахай",
      "Dolphin",
      "dolphin animal"
    ],
    [
      "Халим",
      "Whale",
      "whale animal"
    ],
    [
      "Акул",
      "Shark",
      "shark animal"
    ],
    [
      "Наймаалж",
      "Octopus",
      "octopus animal"
    ],
    [
      "Эрвээхэй",
      "Butterfly",
      "butterfly insect"
    ],
    [
      "Зөгий",
      "Bee",
      "bee insect"
    ],
    [
      "Шоргоолж",
      "Ant",
      "ant insect"
    ],
    [
      "Хулгана",
      "Mouse",
      "mouse animal"
    ],
    [
      "Оцон шувуу",
      "Penguin",
      "penguin animal"
    ],
    [
      "Панда",
      "Panda",
      "panda animal"
    ],
    [
      "Коала",
      "Koala",
      "koala animal"
    ],
    [
      "Кенгуру",
      "Kangaroo",
      "kangaroo animal"
    ],
    [
      "Илжиг",
      "Donkey",
      "donkey animal"
    ],
    [
      "Лама",
      "Llama",
      "llama animal"
    ],
    [
      "Бух",
      "Bull",
      "bull animal"
    ],
    [
      "Минж",
      "Beaver",
      "beaver animal"
    ],
    [
      "Сарьсан багваахай",
      "Bat",
      "bat animal"
    ]
  ],
  "fruits": [
    [
      "Алим",
      "Apple",
      "apple fruit"
    ],
    [
      "Банана",
      "Banana",
      "banana fruit"
    ],
    [
      "Жүрж",
      "Orange",
      "orange fruit"
    ],
    [
      "Усан үзэм",
      "Grape",
      "grapes fruit"
    ],
    [
      "Гүзээлзгэнэ",
      "Strawberry",
      "strawberry fruit"
    ],
    [
      "Тарвас",
      "Watermelon",
      "watermelon fruit"
    ],
    [
      "Лийр",
      "Pear",
      "pear fruit"
    ],
    [
      "Тоор",
      "Peach",
      "peach fruit"
    ],
    [
      "Интоор",
      "Cherry",
      "cherry fruit"
    ],
    [
      "Ананас",
      "Pineapple",
      "pineapple fruit"
    ],
    [
      "Манго",
      "Mango",
      "mango fruit"
    ],
    [
      "Киви",
      "Kiwi",
      "kiwi fruit"
    ],
    [
      "Нимбэг",
      "Lemon",
      "lemon fruit"
    ],
    [
      "Анар",
      "Pomegranate",
      "pomegranate fruit"
    ],
    [
      "Чавга",
      "Plum",
      "plum fruit"
    ],
    [
      "Гуава",
      "Guava",
      "guava fruit"
    ],
    [
      "Авокадо",
      "Avocado",
      "avocado fruit"
    ],
    [
      "Кокос",
      "Coconut",
      "coconut fruit"
    ],
    [
      "Бөөрөлзгөнө",
      "Raspberry",
      "raspberry berry"
    ],
    [
      "Нэрс",
      "Blueberry",
      "blueberry berry"
    ],
    [
      "Амтат гуа",
      "Melon",
      "melon fruit"
    ],
    [
      "Аньс",
      "Lingonberry",
      "lingonberry berry"
    ],
    [
      "Чацаргана",
      "Sea buckthorn",
      "sea buckthorn berry"
    ],
    [
      "Үхрийн нүд",
      "Blackcurrant",
      "blackcurrant berry"
    ],
    [
      "Улаалзгана",
      "Redcurrant",
      "redcurrant berry"
    ],
    [
      "Мойл",
      "Bird cherry",
      "bird cherry berry"
    ],
    [
      "Долоогоно",
      "Hawthorn",
      "hawthorn berry"
    ],
    [
      "Нохойн хошуу",
      "Rosehip",
      "rosehip berry"
    ],
    [
      "Гүйлс",
      "Apricot",
      "apricot fruit"
    ],
    [
      "Чихэрлэг алим",
      "Sweet apple",
      "red apple fruit"
    ]
  ],
  "vehicles": [
    [
      "Суудлын машин",
      "Car",
      "car vehicle"
    ],
    [
      "Автобус",
      "Bus",
      "bus vehicle"
    ],
    [
      "Ачааны машин",
      "Truck",
      "truck vehicle"
    ],
    [
      "Галт тэрэг",
      "Train",
      "train vehicle"
    ],
    [
      "Онгоц",
      "Airplane",
      "airplane vehicle"
    ],
    [
      "Усан онгоц",
      "Ship",
      "ship vehicle"
    ],
    [
      "Унадаг дугуй",
      "Bicycle",
      "bicycle vehicle"
    ],
    [
      "Мотоцикл",
      "Motorcycle",
      "motorcycle vehicle"
    ],
    [
      "Такси",
      "Taxi",
      "taxi vehicle"
    ],
    [
      "Түргэн тусламж",
      "Ambulance",
      "ambulance vehicle"
    ],
    [
      "Галын машин",
      "Fire truck",
      "fire truck vehicle"
    ],
    [
      "Цагдаагийн машин",
      "Police car",
      "police car vehicle"
    ],
    [
      "Трактор",
      "Tractor",
      "tractor vehicle"
    ],
    [
      "Экскаватор",
      "Excavator",
      "excavator vehicle"
    ],
    [
      "Кран",
      "Crane",
      "crane vehicle"
    ],
    [
      "Сансрын хөлөг",
      "Rocket",
      "rocket vehicle"
    ],
    [
      "Нисдэг тэрэг",
      "Helicopter",
      "helicopter vehicle"
    ],
    [
      "Метро",
      "Metro",
      "metro train vehicle"
    ],
    [
      "Трамвай",
      "Tram",
      "tram vehicle"
    ],
    [
      "Жийп",
      "Jeep",
      "jeep vehicle"
    ],
    [
      "Спорт машин",
      "Sports car",
      "sports car vehicle"
    ],
    [
      "Цахилгаан машин",
      "Electric car",
      "electric car vehicle"
    ],
    [
      "Мини автобус",
      "Minibus",
      "minibus vehicle"
    ],
    [
      "Сургуулийн автобус",
      "School bus",
      "school bus vehicle"
    ],
    [
      "Тэрэг",
      "Cart",
      "cart vehicle"
    ],
    [
      "Скүүтер",
      "Scooter",
      "scooter vehicle"
    ],
    [
      "Чиргүүл",
      "Trailer",
      "trailer vehicle"
    ],
    [
      "Цасны машин",
      "Snowmobile",
      "snowmobile vehicle"
    ],
    [
      "Завь",
      "Boat",
      "boat vehicle"
    ],
    [
      "Агаарын бөмбөлөг",
      "Hot air balloon",
      "hot air balloon vehicle"
    ]
  ],
  "countries": [
    [
      "Монгол",
      "Mongolia",
      "mongolia flag"
    ],
    [
      "Хятад",
      "China",
      "china flag"
    ],
    [
      "Япон",
      "Japan",
      "japan flag"
    ],
    [
      "Өмнөд Солонгос",
      "South Korea",
      "south korea flag"
    ],
    [
      "Америк",
      "United States",
      "united states flag"
    ],
    [
      "Канад",
      "Canada",
      "canada flag"
    ],
    [
      "Англи",
      "United Kingdom",
      "united kingdom flag"
    ],
    [
      "Франц",
      "France",
      "france flag"
    ],
    [
      "Герман",
      "Germany",
      "germany flag"
    ],
    [
      "Итали",
      "Italy",
      "italy flag"
    ],
    [
      "Испани",
      "Spain",
      "spain flag"
    ],
    [
      "Орос",
      "Russia",
      "russia flag"
    ],
    [
      "Казахстан",
      "Kazakhstan",
      "kazakhstan flag"
    ],
    [
      "Турк",
      "Turkey",
      "turkey flag"
    ],
    [
      "Энэтхэг",
      "India",
      "india flag"
    ],
    [
      "Австрали",
      "Australia",
      "australia flag"
    ],
    [
      "Бразил",
      "Brazil",
      "brazil flag"
    ],
    [
      "Аргентин",
      "Argentina",
      "argentina flag"
    ],
    [
      "Мексик",
      "Mexico",
      "mexico flag"
    ],
    [
      "Египет",
      "Egypt",
      "egypt flag"
    ],
    [
      "Өмнөд Африк",
      "South Africa",
      "south africa flag"
    ],
    [
      "Кени",
      "Kenya",
      "kenya flag"
    ],
    [
      "Тайланд",
      "Thailand",
      "thailand flag"
    ],
    [
      "Вьетнам",
      "Vietnam",
      "vietnam flag"
    ],
    [
      "Сингапур",
      "Singapore",
      "singapore flag"
    ],
    [
      "Малайз",
      "Malaysia",
      "malaysia flag"
    ],
    [
      "Индонез",
      "Indonesia",
      "indonesia flag"
    ],
    [
      "Шинэ Зеланд",
      "New Zealand",
      "new zealand flag"
    ],
    [
      "Швед",
      "Sweden",
      "sweden flag"
    ],
    [
      "Норвеги",
      "Norway",
      "norway flag"
    ],
    [
      "Финланд",
      "Finland",
      "finland flag"
    ],
    [
      "Дани",
      "Denmark",
      "denmark flag"
    ],
    [
      "Нидерланд",
      "Netherlands",
      "netherlands flag"
    ],
    [
      "Бельги",
      "Belgium",
      "belgium flag"
    ],
    [
      "Швейцар",
      "Switzerland",
      "switzerland flag"
    ],
    [
      "Австри",
      "Austria",
      "austria flag"
    ],
    [
      "Польш",
      "Poland",
      "poland flag"
    ],
    [
      "Чех",
      "Czechia",
      "czechia flag"
    ],
    [
      "Унгар",
      "Hungary",
      "hungary flag"
    ],
    [
      "Румын",
      "Romania",
      "romania flag"
    ],
    [
      "Грек",
      "Greece",
      "greece flag"
    ],
    [
      "Португал",
      "Portugal",
      "portugal flag"
    ],
    [
      "Ирланд",
      "Ireland",
      "ireland flag"
    ],
    [
      "Исланд",
      "Iceland",
      "iceland flag"
    ],
    [
      "Украин",
      "Ukraine",
      "ukraine flag"
    ],
    [
      "Беларусь",
      "Belarus",
      "belarus flag"
    ],
    [
      "Узбекистан",
      "Uzbekistan",
      "uzbekistan flag"
    ],
    [
      "Киргизстан",
      "Kyrgyzstan",
      "kyrgyzstan flag"
    ],
    [
      "Тажикистан",
      "Tajikistan",
      "tajikistan flag"
    ],
    [
      "Туркменистан",
      "Turkmenistan",
      "turkmenistan flag"
    ],
    [
      "Пакистан",
      "Pakistan",
      "pakistan flag"
    ],
    [
      "Бангладеш",
      "Bangladesh",
      "bangladesh flag"
    ],
    [
      "Шри Ланка",
      "Sri Lanka",
      "sri lanka flag"
    ],
    [
      "Балба",
      "Nepal",
      "nepal flag"
    ],
    [
      "Бутан",
      "Bhutan",
      "bhutan flag"
    ],
    [
      "Филиппин",
      "Philippines",
      "philippines flag"
    ],
    [
      "Камбож",
      "Cambodia",
      "cambodia flag"
    ],
    [
      "Лаос",
      "Laos",
      "laos flag"
    ],
    [
      "Мьянмар",
      "Myanmar",
      "myanmar flag"
    ],
    [
      "Бруней",
      "Brunei",
      "brunei flag"
    ],
    [
      "Саудын Араб",
      "Saudi Arabia",
      "saudi arabia flag"
    ],
    [
      "Арабын Нэгдсэн Эмират",
      "United Arab Emirates",
      "united arab emirates flag"
    ],
    [
      "Катар",
      "Qatar",
      "qatar flag"
    ],
    [
      "Кувейт",
      "Kuwait",
      "kuwait flag"
    ],
    [
      "Израил",
      "Israel",
      "israel flag"
    ],
    [
      "Иран",
      "Iran",
      "iran flag"
    ],
    [
      "Ирак",
      "Iraq",
      "iraq flag"
    ],
    [
      "Йордан",
      "Jordan",
      "jordan flag"
    ],
    [
      "Ливан",
      "Lebanon",
      "lebanon flag"
    ],
    [
      "Марокко",
      "Morocco",
      "morocco flag"
    ],
    [
      "Алжир",
      "Algeria",
      "algeria flag"
    ],
    [
      "Тунис",
      "Tunisia",
      "tunisia flag"
    ],
    [
      "Этиоп",
      "Ethiopia",
      "ethiopia flag"
    ],
    [
      "Нигери",
      "Nigeria",
      "nigeria flag"
    ],
    [
      "Гана",
      "Ghana",
      "ghana flag"
    ],
    [
      "Танзани",
      "Tanzania",
      "tanzania flag"
    ],
    [
      "Уганда",
      "Uganda",
      "uganda flag"
    ],
    [
      "Зимбабве",
      "Zimbabwe",
      "zimbabwe flag"
    ],
    [
      "Чили",
      "Chile",
      "chile flag"
    ],
    [
      "Перу",
      "Peru",
      "peru flag"
    ],
    [
      "Колумб",
      "Colombia",
      "colombia flag"
    ],
    [
      "Венесуэл",
      "Venezuela",
      "venezuela flag"
    ],
    [
      "Уругвай",
      "Uruguay",
      "uruguay flag"
    ],
    [
      "Парагвай",
      "Paraguay",
      "paraguay flag"
    ],
    [
      "Боливи",
      "Bolivia",
      "bolivia flag"
    ],
    [
      "Куба",
      "Cuba",
      "cuba flag"
    ],
    [
      "Доминикан",
      "Dominican Republic",
      "dominican republic flag"
    ],
    [
      "Ямайка",
      "Jamaica",
      "jamaica flag"
    ],
    [
      "Панам",
      "Panama",
      "panama flag"
    ],
    [
      "Коста Рика",
      "Costa Rica",
      "costa rica flag"
    ],
    [
      "Израил",
      "Israel",
      "israel flag"
    ],
    [
      "Гүрж",
      "Georgia",
      "georgia flag"
    ],
    [
      "Армен",
      "Armenia",
      "armenia flag"
    ],
    [
      "Азербайжан",
      "Azerbaijan",
      "azerbaijan flag"
    ],
    [
      "Хорват",
      "Croatia",
      "croatia flag"
    ],
    [
      "Латви",
      "Latvia",
      "latvia flag"
    ],
    [
      "Литва",
      "Lithuania",
      "lithuania flag"
    ],
    [
      "Эстони",
      "Estonia",
      "estonia flag"
    ],
    [
      "Серби",
      "Serbia",
      "serbia flag"
    ],
    [
      "Словени",
      "Slovenia",
      "slovenia flag"
    ]
  ],
  "numbers": [
    [
      "Нэг",
      "One",
      "number 1"
    ],
    [
      "Хоёр",
      "Two",
      "number 2"
    ],
    [
      "Гурав",
      "Three",
      "number 3"
    ],
    [
      "Дөрөв",
      "Four",
      "number 4"
    ],
    [
      "Тав",
      "Five",
      "number 5"
    ],
    [
      "Зургаа",
      "Six",
      "number 6"
    ],
    [
      "Долоо",
      "Seven",
      "number 7"
    ],
    [
      "Найм",
      "Eight",
      "number 8"
    ],
    [
      "Ес",
      "Nine",
      "number 9"
    ],
    [
      "Арав",
      "Ten",
      "number 10"
    ],
    [
      "Арван нэг",
      "Eleven",
      "number 11"
    ],
    [
      "Арван хоёр",
      "Twelve",
      "number 12"
    ],
    [
      "Арван гурав",
      "Thirteen",
      "number 13"
    ],
    [
      "Арван дөрөв",
      "Fourteen",
      "number 14"
    ],
    [
      "Арван тав",
      "Fifteen",
      "number 15"
    ],
    [
      "Арван зургаа",
      "Sixteen",
      "number 16"
    ],
    [
      "Арван долоо",
      "Seventeen",
      "number 17"
    ],
    [
      "Арван найм",
      "Eighteen",
      "number 18"
    ],
    [
      "Арван ес",
      "Nineteen",
      "number 19"
    ],
    [
      "Хорь",
      "Twenty",
      "number 20"
    ],
    [
      "Хорин нэг",
      "Twenty-one",
      "number 21"
    ],
    [
      "Хорин хоёр",
      "Twenty-two",
      "number 22"
    ],
    [
      "Хорин гурав",
      "Twenty-three",
      "number 23"
    ],
    [
      "Хорин дөрөв",
      "Twenty-four",
      "number 24"
    ],
    [
      "Хорин тав",
      "Twenty-five",
      "number 25"
    ],
    [
      "Хорин зургаа",
      "Twenty-six",
      "number 26"
    ],
    [
      "Хорин долоо",
      "Twenty-seven",
      "number 27"
    ],
    [
      "Хорин найм",
      "Twenty-eight",
      "number 28"
    ],
    [
      "Хорин ес",
      "Twenty-nine",
      "number 29"
    ],
    [
      "Гуч",
      "Thirty",
      "number 30"
    ]
  ],
  "colors": [
    [
      "Улаан",
      "Red",
      "color red #e63946"
    ],
    [
      "Хөх",
      "Blue",
      "color blue #1d4ed8"
    ],
    [
      "Шар",
      "Yellow",
      "color yellow #facc15"
    ],
    [
      "Ногоон",
      "Green",
      "color green #22c55e"
    ],
    [
      "Ягаан",
      "Pink",
      "color pink #f472b6"
    ],
    [
      "Улбар шар",
      "Orange",
      "color orange #f97316"
    ],
    [
      "Нил ягаан",
      "Purple",
      "color purple #8b5cf6"
    ],
    [
      "Хар",
      "Black",
      "color black #111827"
    ],
    [
      "Цагаан",
      "White",
      "color white #ffffff"
    ],
    [
      "Бор",
      "Brown",
      "color brown #92400e"
    ],
    [
      "Саарал",
      "Gray",
      "color gray #9ca3af"
    ],
    [
      "Алтан",
      "Gold",
      "color gold #f59e0b"
    ],
    [
      "Мөнгөн",
      "Silver",
      "color silver #cbd5e1"
    ],
    [
      "Тэнгэрийн цэнхэр",
      "Sky blue",
      "color sky blue #38bdf8"
    ],
    [
      "Оюу",
      "Turquoise",
      "color turquoise #14b8a6"
    ],
    [
      "Номин",
      "Navy",
      "color navy #1e3a8a"
    ],
    [
      "Шүрэн",
      "Coral",
      "color coral #fb7185"
    ],
    [
      "Гаа",
      "Mint",
      "color mint #86efac"
    ],
    [
      "Тоорын ягаан",
      "Peach",
      "color peach #fdba74"
    ],
    [
      "Цөцгий",
      "Cream",
      "color cream #fef3c7"
    ]
  ],
  "shapes": [
    [
      "Дугуй",
      "Circle",
      "shape circle"
    ],
    [
      "Дөрвөлжин",
      "Square",
      "shape square"
    ],
    [
      "Гурвалжин",
      "Triangle",
      "shape triangle"
    ],
    [
      "Тэгш өнцөгт",
      "Rectangle",
      "shape rectangle"
    ],
    [
      "Од",
      "Star",
      "shape star"
    ],
    [
      "Зүрх",
      "Heart",
      "shape heart"
    ],
    [
      "Зууван",
      "Oval",
      "shape oval"
    ],
    [
      "Ромб",
      "Diamond",
      "shape diamond"
    ],
    [
      "Хагас дугуй",
      "Semicircle",
      "shape semicircle"
    ],
    [
      "Таван өнцөгт",
      "Pentagon",
      "shape pentagon"
    ],
    [
      "Зургаан өнцөгт",
      "Hexagon",
      "shape hexagon"
    ],
    [
      "Сум",
      "Arrow",
      "shape arrow"
    ],
    [
      "Загалмай",
      "Cross",
      "shape cross"
    ],
    [
      "Сар",
      "Crescent",
      "shape crescent"
    ],
    [
      "Цэцэг",
      "Flower",
      "shape flower"
    ],
    [
      "Үүл",
      "Cloud",
      "shape cloud"
    ],
    [
      "Долгион",
      "Wave",
      "shape wave"
    ],
    [
      "Спираль",
      "Spiral",
      "shape spiral"
    ],
    [
      "Цэг",
      "Dot",
      "shape dot"
    ],
    [
      "Шугам",
      "Line",
      "shape line"
    ]
  ],
  "body": [
    [
      "Толгой",
      "Head",
      "body head"
    ],
    [
      "Үс",
      "Hair",
      "body hair"
    ],
    [
      "Нүд",
      "Eye",
      "body eye"
    ],
    [
      "Чих",
      "Ear",
      "body ear"
    ],
    [
      "Хамар",
      "Nose",
      "body nose"
    ],
    [
      "Ам",
      "Mouth",
      "body mouth"
    ],
    [
      "Шүд",
      "Tooth",
      "body tooth"
    ],
    [
      "Хэл",
      "Tongue",
      "body tongue"
    ],
    [
      "Хүзүү",
      "Neck",
      "body neck"
    ],
    [
      "Мөр",
      "Shoulder",
      "body shoulder"
    ],
    [
      "Гар",
      "Arm",
      "body arm"
    ],
    [
      "Алга",
      "Hand",
      "body hand"
    ],
    [
      "Хуруу",
      "Finger",
      "body finger"
    ],
    [
      "Цээж",
      "Chest",
      "body chest"
    ],
    [
      "Гэдэс",
      "Belly",
      "body belly"
    ],
    [
      "Нуруу",
      "Back",
      "body back"
    ],
    [
      "Хөл",
      "Leg",
      "body leg"
    ],
    [
      "Өвдөг",
      "Knee",
      "body knee"
    ],
    [
      "Тавхай",
      "Foot",
      "body foot"
    ],
    [
      "Хөлийн хуруу",
      "Toe",
      "body toe"
    ],
    [
      "Зүрх",
      "Heart",
      "body heart"
    ],
    [
      "Тархи",
      "Brain",
      "body brain"
    ],
    [
      "Уруул",
      "Lips",
      "body lips"
    ],
    [
      "Хацар",
      "Cheek",
      "body cheek"
    ],
    [
      "Эрүү",
      "Chin",
      "body chin"
    ],
    [
      "Дух",
      "Forehead",
      "body forehead"
    ],
    [
      "Сормуус",
      "Eyelash",
      "body eyelash"
    ],
    [
      "Хөмсөг",
      "Eyebrow",
      "body eyebrow"
    ],
    [
      "Бугуй",
      "Wrist",
      "body wrist"
    ],
    [
      "Шагай",
      "Ankle",
      "body ankle"
    ]
  ],
  "food": [
    [
      "Талх",
      "Bread",
      "food bread"
    ],
    [
      "Сүү",
      "Milk",
      "food milk"
    ],
    [
      "Өндөг",
      "Egg",
      "food egg"
    ],
    [
      "Бяслаг",
      "Cheese",
      "food cheese"
    ],
    [
      "Будаа",
      "Rice",
      "food rice"
    ],
    [
      "Гоймон",
      "Noodles",
      "food noodles"
    ],
    [
      "Шөл",
      "Soup",
      "food soup"
    ],
    [
      "Банш",
      "Dumpling",
      "food dumpling"
    ],
    [
      "Бууз",
      "Buuz",
      "food dumpling"
    ],
    [
      "Хуушуур",
      "Khuushuur",
      "food pastry"
    ],
    [
      "Пицца",
      "Pizza",
      "food pizza"
    ],
    [
      "Бургер",
      "Burger",
      "food burger"
    ],
    [
      "Салат",
      "Salad",
      "food salad"
    ],
    [
      "Төмс",
      "Potato",
      "food potato"
    ],
    [
      "Лууван",
      "Carrot",
      "food carrot"
    ],
    [
      "Улаан лооль",
      "Tomato",
      "food tomato"
    ],
    [
      "Өргөст хэмх",
      "Cucumber",
      "food cucumber"
    ],
    [
      "Эрдэнэ шиш",
      "Corn",
      "food corn"
    ],
    [
      "Тахианы мах",
      "Chicken",
      "food chicken"
    ],
    [
      "Загас",
      "Fish",
      "food fish"
    ],
    [
      "Мах",
      "Meat",
      "food meat"
    ],
    [
      "Тараг",
      "Yogurt",
      "food yogurt"
    ],
    [
      "Зайрмаг",
      "Ice cream",
      "food ice cream"
    ],
    [
      "Жигнэмэг",
      "Cookie",
      "food cookie"
    ],
    [
      "Бялуу",
      "Cake",
      "food cake"
    ],
    [
      "Шоколад",
      "Chocolate",
      "food chocolate"
    ],
    [
      "Зөгийн бал",
      "Honey",
      "food honey"
    ],
    [
      "Цай",
      "Tea",
      "food tea"
    ],
    [
      "Ус",
      "Water",
      "food water"
    ],
    [
      "Шүүс",
      "Juice",
      "food juice"
    ]
  ],
  "family": [
    [
      "Аав",
      "Father",
      "family father"
    ],
    [
      "Ээж",
      "Mother",
      "family mother"
    ],
    [
      "Ах",
      "Older brother",
      "family brother"
    ],
    [
      "Эгч",
      "Older sister",
      "family sister"
    ],
    [
      "Дүү",
      "Younger sibling",
      "family child"
    ],
    [
      "Өвөө",
      "Grandfather",
      "family grandfather"
    ],
    [
      "Эмээ",
      "Grandmother",
      "family grandmother"
    ],
    [
      "Хүү",
      "Son",
      "family son"
    ],
    [
      "Охин",
      "Daughter",
      "family daughter"
    ],
    [
      "Найз",
      "Friend",
      "family friend"
    ],
    [
      "Багш",
      "Teacher",
      "family teacher"
    ],
    [
      "Эмч",
      "Doctor",
      "family doctor"
    ],
    [
      "Авга ах",
      "Uncle",
      "family uncle"
    ],
    [
      "Авга эгч",
      "Aunt",
      "family aunt"
    ],
    [
      "Үеэл",
      "Cousin",
      "family cousin"
    ],
    [
      "Хүүхэд",
      "Child",
      "family child"
    ],
    [
      "Нярай",
      "Baby",
      "family baby"
    ],
    [
      "Ихэр",
      "Twins",
      "family twins"
    ],
    [
      "Гэр бүл",
      "Family",
      "family group"
    ],
    [
      "Бид",
      "Us",
      "family group"
    ]
  ]
};

const mnLetters = "А Б В Г Д Е Ё Ж З И Й К Л М Н О Ө П Р С Т У Ү Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я".split(" ");
const enLetters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");

const mnExamples = {
  А: [["Алим", "apple fruit"], ["Ах", "older brother portrait"], ["Аав", "father smiling"]],
  Б: [["Бөмбөг", "ball"], ["Баавгай", "bear animal"], ["Банана", "banana fruit"]],
  В: [["Ваар", "flower vase"], ["Вагон", "train wagon"], ["Витамин", "vitamin fruit"]],
  Г: [["Гүзээлзгэнэ", "strawberry fruit"], ["Галуу", "goose animal"], ["Гэр", "mongolian ger"]],
  Д: [["Дэгдээхэй", "chick animal"], ["Дэвтэр", "notebook"], ["Дугуй", "bicycle"]],
  Е: [["Есөн", "number nine"], ["Ерөөл", "smiling child"], ["Европ", "europe map"]],
  Ё: [["Ёотон", "sugar cubes"], ["Ёл", "bearded vulture"], ["Ёроол", "river bottom"]],
  Ж: [["Жүрж", "orange fruit"], ["Жимс", "fruit basket"], ["Жаал", "toddler"]],
  З: [["Заан", "elephant animal"], ["Загас", "fish animal"], ["Зам", "road"]],
  И: [["Интоор", "cherry fruit"], ["Ирвэс", "leopard animal"], ["Илжиг", "donkey animal"]],
  Й: [["Йогурт", "yogurt"], ["Йод", "iodine"], ["Йога", "yoga mat"]],
  К: [["Киви", "kiwi fruit"], ["Карт", "card"], ["Кофе", "coffee cup"]],
  Л: [["Лийр", "pear fruit"], ["Лууван", "carrot vegetable"], ["Лаа", "candle"]],
  М: [["Морь", "horse animal"], ["Муур", "cat animal"], ["Машин", "car vehicle"]],
  Н: [["Нохой", "dog animal"], ["Нар", "sun"], ["Ном", "book"]],
  О: [["Оцон шувуу", "penguin animal"], ["Од", "star"], ["Ой", "forest"]],
  Ө: [["Өндөг", "egg"], ["Өвс", "grass"], ["Өргөст хэмх", "cucumber vegetable"]],
  П: [["Панда", "panda animal"], ["Пүүз", "sneakers"], ["Пицца", "pizza"]],
  Р: [["Робот", "toy robot"], ["Радио", "radio"], ["Ракет", "rocket"]],
  С: [["Сармагчин", "monkey animal"], ["Сүү", "milk"], ["Сонгино", "onion vegetable"]],
  Т: [["Туулай", "rabbit animal"], ["Тарвас", "watermelon fruit"], ["Трактор", "tractor"]],
  У: [["Усан үзэм", "grapes fruit"], ["Ус", "water glass"], ["Уул", "mountain"]],
  Ү: [["Үхэр", "cow animal"], ["Үүл", "cloud"], ["Үзэг", "pen"]],
  Ф: [["Ферм", "farm"], ["Фламинго", "flamingo bird"], ["Фото", "camera"]],
  Х: [["Хонь", "sheep animal"], ["Хан боргоцой", "pineapple fruit"], ["Хулуу", "pumpkin vegetable"]],
  Ц: [["Цэцэг", "flower"], ["Цүнх", "bag"], ["Цана", "ski"]],
  Ч: [["Чоно", "wolf animal"], ["Чавга", "plum fruit"], ["Чихэр", "candy"]],
  Ш: [["Шар", "yellow color"], ["Шувуу", "bird animal"], ["Шөл", "soup"]],
  Щ: [["Щетка", "brush"], ["Щи", "cabbage soup"], ["Щит", "shield"]],
  Ъ: [["Хатуу тэмдэг", "letter block"], ["Объект", "object"], ["Субъект", "alphabet book"]],
  Ы: [["Ы үсэг", "letter block"], ["Барилгын", "building"], ["Номын", "book"]],
  Ь: [["Зөөлний тэмдэг", "letter block"], ["Морь", "horse animal"], ["Хонь", "sheep animal"]],
  Э: [["Ээж", "mother smiling"], ["Эрдэнэ шиш", "corn vegetable"], ["Эрвээхэй", "butterfly"]],
  Ю: [["Юбка", "skirt"], ["Юүлүүр", "funnel"], ["Юм", "toy blocks"]],
  Я: [["Ямаа", "goat animal"], ["Яст мэлхий", "turtle animal"], ["Ягаан", "pink color"]],
};

const enExamples = Object.fromEntries(enLetters.map((letter) => {
  const map = {
    A: [["Apple", "apple fruit"], ["Ant", "ant insect"], ["Airplane", "airplane"]],
    B: [["Banana", "banana fruit"], ["Bear", "bear animal"], ["Ball", "ball"]],
    C: [["Cat", "cat animal"], ["Car", "car vehicle"], ["Cow", "cow animal"]],
    D: [["Dog", "dog animal"], ["Duck", "duck animal"], ["Drum", "toy drum"]],
    E: [["Elephant", "elephant animal"], ["Egg", "egg"], ["Engine", "train engine"]],
    F: [["Fox", "fox animal"], ["Fish", "fish animal"], ["Flower", "flower"]],
    G: [["Grape", "grapes fruit"], ["Goat", "goat animal"], ["Giraffe", "giraffe animal"]],
    H: [["Horse", "horse animal"], ["Hat", "hat"], ["House", "house"]],
    I: [["Ice", "ice cube"], ["Iguana", "iguana animal"], ["Island", "island"]],
    J: [["Juice", "juice"], ["Jam", "jam jar"], ["Jacket", "jacket"]],
    K: [["Kiwi", "kiwi fruit"], ["Kite", "kite"], ["Koala", "koala animal"]],
    L: [["Lion", "lion animal"], ["Lemon", "lemon fruit"], ["Leaf", "leaf"]],
    M: [["Monkey", "monkey animal"], ["Mango", "mango fruit"], ["Moon", "moon"]],
    N: [["Nest", "bird nest"], ["Nut", "nuts"], ["Nose", "baby nose"]],
    O: [["Orange", "orange fruit"], ["Owl", "owl animal"], ["Octopus", "octopus animal"]],
    P: [["Pear", "pear fruit"], ["Pig", "pig animal"], ["Penguin", "penguin animal"]],
    Q: [["Queen", "queen crown"], ["Quail", "quail bird"], ["Quilt", "quilt blanket"]],
    R: [["Rabbit", "rabbit animal"], ["Robot", "toy robot"], ["Rainbow", "rainbow"]],
    S: [["Strawberry", "strawberry fruit"], ["Sheep", "sheep animal"], ["Sun", "sun"]],
    T: [["Tiger", "tiger animal"], ["Tomato", "tomato vegetable"], ["Train", "train"]],
    U: [["Umbrella", "umbrella"], ["Unicorn", "toy unicorn"], ["Up", "up arrow"]],
    V: [["Van", "van vehicle"], ["Violin", "violin"], ["Vegetable", "vegetable basket"]],
    W: [["Watermelon", "watermelon fruit"], ["Wolf", "wolf animal"], ["Window", "window"]],
    X: [["X-ray", "xray"], ["Xylophone", "xylophone"], ["X mark", "letter x"]],
    Y: [["Yak", "yak animal"], ["Yogurt", "yogurt"], ["Yellow", "yellow color"]],
    Z: [["Zebra", "zebra animal"], ["Zoo", "zoo animals"], ["Zero", "number zero"]],
  };
  return [letter, map[letter]];
}));

const characterGreetings = [
  { name: "Duggee", role: "Friendly leader", icon: "D", colors: ["#f8d66d", "#8fd4ff"], pitch: 0.95, rate: 0.78 },
  { name: "Happy", role: "Tiny crocodile", icon: "H", colors: ["#8ee6a8", "#f8d66d"], pitch: 1.18, rate: 0.9 },
  { name: "Tag", role: "Kind rhino", icon: "T", colors: ["#c7d2fe", "#ffffff"], pitch: 0.86, rate: 0.76 },
  { name: "Betty", role: "Bright octopus", icon: "B", colors: ["#f0abfc", "#bae6fd"], pitch: 1.22, rate: 0.86 },
  { name: "Roly", role: "Loud hippo", icon: "R", colors: ["#93c5fd", "#fecaca"], pitch: 0.82, rate: 0.98 },
  { name: "Norrie", role: "Cheerful mouse", icon: "N", colors: ["#fca5a5", "#fde68a"], pitch: 1.3, rate: 0.88 },
  { name: "Enid", role: "Calm cat", icon: "E", colors: ["#e5e7eb", "#fef3c7"], pitch: 1.05, rate: 0.72 },
];

const $ = (selector) => document.querySelector(selector);
let deferredInstallPrompt = null;
const DAY_MS = 86400000;
const appStartedAt = Date.now();

function todayKey(offset = 0) {
  const date = new Date(Date.now() + offset * DAY_MS);
  return date.toISOString().slice(0, 10);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function defaultStats() {
  return {
    days: {},
    startedAt: todayKey(),
  };
}

function getStats() {
  const stats = readJson("miniiOdStats", defaultStats());
  if (!stats.days) stats.days = {};
  return stats;
}

function getTodayStats(stats = getStats()) {
  const key = todayKey();
  stats.days[key] = stats.days[key] || { words: 0, songs: 0, minutes: 0, correct: 0, wrong: 0 };
  return stats.days[key];
}

function trackStat(name, amount = 1) {
  const stats = getStats();
  const today = getTodayStats(stats);
  today[name] = (today[name] || 0) + amount;
  writeJson("miniiOdStats", stats);
  renderParentCenter();
}

function syncUsageMinutes() {
  const minutes = Math.max(1, Math.floor((Date.now() - appStartedAt) / 60000));
  const stats = getStats();
  const today = getTodayStats(stats);
  today.minutes = Math.max(today.minutes || 0, minutes);
  writeJson("miniiOdStats", stats);
}

function audioStoreKey(profile = state.voiceProfile) {
  return `miniiOdAudio_${profile}`;
}

function getAudioStore(profile = state.voiceProfile) {
  return readJson(audioStoreKey(profile), {});
}

function saveAudioClip(profile, text, dataUrl) {
  const store = getAudioStore(profile);
  store[text] = { dataUrl, savedAt: Date.now() };
  writeJson(audioStoreKey(profile), store);
}

function deleteAudioClip(profile, text) {
  const store = getAudioStore(profile);
  delete store[text];
  writeJson(audioStoreKey(profile), store);
}

function getCustomAudio(text, profile = state.voiceProfile) {
  if (profile === "default") return "";
  const clip = getAudioStore(profile)[text];
  return clip ? clip.dataUrl : "";
}

function playCustomAudio(text) {
  const dataUrl = getCustomAudio(text);
  if (!dataUrl) return false;
  const audio = new Audio(dataUrl);
  audio.play().catch(() => speakWithBrowser(text, state.lang));
  return true;
}

function allVoiceItems() {
  const wordItems = Object.values(words).flat().map((item) => ({ text: item[0], hint: item[1], group: "Үг" }));
  const letterItems = Object.entries(mnExamples).flatMap(([letter, examples]) => (
    examples.map((item) => ({ text: item[0], hint: `${letter} үсэг`, group: "Үсэг" }))
  ));
  const unique = new Map();
  [...wordItems, ...letterItems].forEach((item) => {
    if (!unique.has(item.text)) unique.set(item.text, item);
  });
  return [...unique.values()];
}

function setVoiceProfile(profile) {
  state.voiceProfile = profile;
  localStorage.setItem("miniiOdVoiceProfile", profile);
  document.querySelectorAll("[data-voice-profile]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.voiceProfile === profile);
  });
}

function installParentModeUi() {
  if (!$("#roleGate")) {
    document.body.insertAdjacentHTML("beforeend", `
      <section id="roleGate" class="mode-gate" aria-modal="true" role="dialog">
        <div class="mode-card">
          <p class="eyebrow">Minii Od</p>
          <h2>??? ??????? ???</h2>
          <div class="role-grid">
            <button data-role-choice="mom" type="button"><span>??</span>???</button>
            <button data-role-choice="dad" type="button"><span>??</span>???</button>
            <button data-role-choice="child" type="button"><span>?</span>??????</button>
          </div>
          <div id="pinBox" class="pin-box" hidden>
            <strong id="pinTitle">PIN</strong>
            <input id="pinInput" inputmode="numeric" maxlength="4" pattern="[0-9]*" type="password" placeholder="0000" />
            <button id="pinSubmit" class="primary-btn" type="button">????</button>
            <p id="pinMessage"></p>
          </div>
        </div>
      </section>`);
  }

  if (!$("#parentCenter")) {
    document.body.insertAdjacentHTML("beforeend", `
      <section id="parentCenter" class="parent-center" hidden>
        <div class="parent-sheet">
          <header>
            <div>
              <p class="eyebrow">Parent Center</p>
              <h2 id="parentCenterTitle">???? ????? ???</h2>
            </div>
            <button id="closeParentCenter" class="mini-icon" type="button" aria-label="Close">?</button>
          </header>
          <div class="parent-tabs">
            <button class="parent-tab active" data-parent-tab="report" type="button">?? ??????</button>
            <button class="parent-tab" data-parent-tab="voice" type="button">??? ??? ??????</button>
            <button class="parent-tab" data-parent-tab="settings" type="button">?? ????????</button>
          </div>
          <div id="parentPanel"></div>
        </div>
      </section>`);
  }

  if (!$("#parentToolbar")) {
    document.querySelector(".hero-card").insertAdjacentHTML("afterend", `
      <section class="voice-choice child-safe">
        <p>??? ??????</p>
        <div>
          <button data-voice-profile="mom" type="button">???</button>
          <button data-voice-profile="dad" type="button">???</button>
          <button data-voice-profile="default" type="button">Default</button>
        </div>
      </section>
      <section id="parentToolbar" class="parent-toolbar" hidden>
        <button id="openParentCenter" class="primary-btn" type="button">Parent Center</button>
        <button id="switchMode" class="install-btn" type="button">????? ?????</button>
      </section>
    `);
  }
  setVoiceProfile(state.voiceProfile);
  renderParentCenter();
}

function parentPinKey(role) {
  return `miniiOdPin_${role}`;
}

function showPin(role) {
  state.parentRole = role;
  const pin = localStorage.getItem(parentPinKey(role));
  const lockUntil = Number(localStorage.getItem(`miniiOdPinLock_${role}`) || 0);
  const pinBox = $("#pinBox");
  pinBox.hidden = false;
  $("#pinInput").value = "";
  $("#pinTitle").textContent = pin ? "4 оронтой PIN оруулна уу" : "Шинэ 4 оронтой PIN үүсгэнэ үү";
  if (Date.now() < lockUntil) {
    const seconds = Math.ceil((lockUntil - Date.now()) / 1000);
    $("#pinMessage").textContent = `${seconds} секунд хүлээнэ үү.`;
    $("#pinSubmit").disabled = true;
    setTimeout(() => showPin(role), Math.min(seconds * 1000, 30000));
  } else {
    $("#pinMessage").textContent = "";
    $("#pinSubmit").disabled = false;
  }
}

function submitPin() {
  const role = state.parentRole;
  const value = $("#pinInput").value.trim();
  if (!/^\d{4}$/.test(value)) {
    $("#pinMessage").textContent = "4 тоо оруулна уу.";
    return;
  }
  const key = parentPinKey(role);
  const existing = localStorage.getItem(key);
  if (!existing) {
    localStorage.setItem(key, value);
    localStorage.removeItem(`miniiOdPinFails_${role}`);
    enterApp(role);
    return;
  }
  if (existing === value) {
    localStorage.removeItem(`miniiOdPinFails_${role}`);
    enterApp(role);
    return;
  }
  const failKey = `miniiOdPinFails_${role}`;
  const fails = Number(localStorage.getItem(failKey) || 0) + 1;
  localStorage.setItem(failKey, String(fails));
  if (fails >= 3) {
    localStorage.setItem(`miniiOdPinLock_${role}`, String(Date.now() + 30000));
    localStorage.setItem(failKey, "0");
    showPin(role);
  } else {
    $("#pinMessage").textContent = `PIN буруу. Үлдсэн оролдлого: ${3 - fails}`;
  }
}

function enterApp(role) {
  state.role = role;
  $("#roleGate").hidden = true;
  const isParent = role === "mom" || role === "dad";
  $("#parentToolbar").hidden = !isParent;
  document.body.classList.toggle("parent-mode", isParent);
  document.body.classList.toggle("child-mode", !isParent);
  setVoiceProfile(state.voiceProfile);
  if (isParent) {
    state.parentTab = "report";
    syncUsageMinutes();
    $("#parentCenter").hidden = false;
    renderParentCenter();
  } else {
    $("#parentCenter").hidden = true;
  }
}

function renderParentCenter() {
  const panel = $("#parentPanel");
  if (!panel) return;
  document.querySelectorAll(".parent-tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.parentTab === state.parentTab));
  if (state.parentTab === "report") {
    const stats = getStats();
    const today = getTodayStats(stats);
    const week = Array.from({ length: 7 }, (_, index) => {
      const key = todayKey(-6 + index);
      const day = stats.days[key] || { words: 0, songs: 0, minutes: 0, correct: 0, wrong: 0 };
      const short = key.slice(5);
      return `<div class="week-bar"><span>${short}</span><strong style="height:${Math.max(12, Math.min(100, (day.words + day.songs + day.correct) * 8))}%"></strong></div>`;
    }).join("");
    panel.innerHTML = `
      <p class="parent-help">Parent Center: тайлан, дуу хоолой, тохиргоо энд харагдана.</p>
      <div class="report-grid">
        <article><span>Өнөөдөр сурсан үг</span><strong>${today.words || 0}</strong></article>
        <article><span>Сонссон дуу</span><strong>${today.songs || 0}</strong></article>
        <article><span>Ашигласан минут</span><strong>${today.minutes || 0}</strong></article>
        <article><span>Зөв / Буруу</span><strong>${today.correct || 0}/${today.wrong || 0}</strong></article>
      </div>
      <div class="week-chart">${week}</div>
    `;
    return;
  }
  if (state.parentTab === "voice") {
    const profile = state.parentRole || "mom";
    const audio = getAudioStore(profile);
    panel.innerHTML = `
      <p class="parent-help">Бүх үг, үсэг, амьтан, жимс энд байна. Мөр бүр дээр бичих, сонсох, устгах товч харагдана.</p>
      <p id="voiceStatus" class="voice-status">🎤 Бичих товч дарж 6 секунд хүртэл бичнэ. ▶️ Сонсох нь custom audio байхгүй үед default хоолой тоглуулна.</p>
      <div class="voice-owner">
        <button class="${profile === "mom" ? "active" : ""}" data-parent-owner="mom" type="button">👩 Ээжийн хоолой</button>
        <button class="${profile === "dad" ? "active" : ""}" data-parent-owner="dad" type="button">👨 Аавын хоолой</button>
      </div>
      <div class="voice-list">
        ${allVoiceItems().map((item) => `
          <article class="voice-row">
            <div><strong>${item.text}</strong><span>${item.group} • ${item.hint}</span></div>
            <button data-record-text="${item.text}" type="button">🎤 Бичих</button>
            <button data-play-text="${item.text}" type="button">▶️ Сонсох</button>
            <button data-delete-text="${item.text}" type="button" ${audio[item.text] ? "" : "disabled"}>🗑️ Устгах</button>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }
  panel.innerHTML = `
    <div class="settings-panel">
      <p class="parent-help">Хүүхдийн горимд ашиглах хоолойг сонгоно.</p>
      <label>Хүүхдийн сонсох хоолой</label>
      <div class="settings-voices">
        <button data-voice-profile="mom" type="button">Ээжийн хоолой</button>
        <button data-voice-profile="dad" type="button">Аавын хоолой</button>
        <button data-voice-profile="default" type="button">Default хоолой</button>
      </div>
      <p>PIN, аудио, статистик бүгд энэ төхөөрөмж дээр хадгалагдана.</p>
    </div>
  `;
  setVoiceProfile(state.voiceProfile);
}

async function startRecording(text) {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    setVoiceStatus("Recording is not supported here. Open the live HTTPS link and try again.");
    return;
  }
  if (state.recording) {
    state.recording.stop();
    return;
  }
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (error) {
    setVoiceStatus("Microphone permission is needed. Tap Allow in the browser, then try again.");
    return;
  }
  const recorder = new MediaRecorder(stream);
  const chunks = [];
  state.recording = recorder;
  state.recordTarget = text;
  setVoiceStatus(`Recording "${text}" now... tap record again to stop.`);
  recorder.ondataavailable = (event) => chunks.push(event.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
    const reader = new FileReader();
    reader.onloadend = () => {
      saveAudioClip(state.parentRole || "mom", text, reader.result);
      state.recording = null;
      state.recordTarget = "";
      stream.getTracks().forEach((track) => track.stop());
      setVoiceStatus(`Saved "${text}". Use Listen to test it.`);
      renderParentCenter();
    };
    reader.readAsDataURL(blob);
  };
  recorder.start();
  setTimeout(() => {
    if (state.recording === recorder && recorder.state === "recording") recorder.stop();
  }, 6000);
}

function renderAlphabet() {
  const letters = state.alphaLang === "mn" ? mnLetters : enLetters;
  $("#alphabetGrid").innerHTML = letters.map((letter) => (
    `<button class="letter-btn" data-letter="${letter}" type="button">${letter}</button>`
  )).join("");
}

function showLetter(letter, shouldSpeak = true) {
  const examples = state.alphaLang === "mn" ? mnExamples[letter] : enExamples[letter];
  const key = `${state.alphaLang}-${letter}`;
  const step = state.letterStep[key] || 0;
  const current = examples[step % examples.length];
  state.letterStep[key] = step + 1;
  $("#bigLetter").textContent = letter;
  $("#letterWord").textContent = current[0];
  state.currentLetterText = current[0];
  $("#letterHint").textContent = state.alphaLang === "mn" ? `${letter} үсгээр эхэлдэг үг` : `A word that starts with ${letter}`;
  $("#letterImage").src = imageUrl(current[1], step + letter.charCodeAt(0));
  $("#letterImage").onerror = () => {
    $("#letterImage").onerror = null;
    $("#letterImage").src = fallbackImage(step + letter.charCodeAt(0));
  };
  $("#letterImage").alt = current[0];
  document.querySelectorAll(".letter-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.letter === letter));
  if (shouldSpeak) {
    speak(current[0], state.alphaLang);
    saveProgress();
  }
}

function newGame() {
  const pool = [...words.fruits.slice(0, 10), ...words.animals.slice(0, 10)];
  const shuffled = pool.sort(() => Math.random() - 0.5);
  const choices = shuffled.slice(0, 4);
  state.gameAnswer = choices[Math.floor(Math.random() * choices.length)];
  $("#gamePrompt").textContent = state.lang === "mn" ? "Дууг сонсоод зөв зургийг дар." : "Listen and tap the right picture.";
  $("#gameChoices").innerHTML = choices.map((item, index) => `
    <button class="choice" data-choice="${item[1]}" type="button">
      <img alt="${label(item)}" src="${imageUrl(item[2], index + 50)}" onerror="this.onerror=null;this.src='${fallbackImage(index + 50)}';" />
      <span>${label(item)}</span>
    </button>
  `).join("");
}

function refreshLanguage() {
  document.documentElement.lang = state.lang;
  $("#heroKicker").textContent = state.lang === "mn" ? "Өнөөдөр сурсан" : "Learned today";
  $("#progressText").textContent = state.lang === "mn" ? `${state.progress} үг` : `${state.progress} words`;
  renderWords();
  renderSongs();
  newGame();
}

document.addEventListener("click", (event) => {
  const roleChoice = event.target.closest("[data-role-choice]");
  if (roleChoice) {
    const role = roleChoice.dataset.roleChoice;
    if (role === "child") {
      enterApp("child");
    } else {
      showPin(role);
    }
    return;
  }

  if (event.target.closest("#pinSubmit")) {
    submitPin();
    return;
  }

  if (event.target.closest("#openParentCenter")) {
    syncUsageMinutes();
    $("#parentCenter").hidden = false;
    renderParentCenter();
    return;
  }

  if (event.target.closest("#closeParentCenter")) {
    $("#parentCenter").hidden = true;
    return;
  }

  if (event.target.closest("#switchMode")) {
    $("#roleGate").hidden = false;
    $("#pinBox").hidden = true;
    return;
  }

  const parentTab = event.target.closest("[data-parent-tab]");
  if (parentTab) {
    state.parentTab = parentTab.dataset.parentTab;
    renderParentCenter();
    return;
  }

  const parentOwner = event.target.closest("[data-parent-owner]");
  if (parentOwner) {
    state.parentRole = parentOwner.dataset.parentOwner;
    renderParentCenter();
    return;
  }

  const voiceProfile = event.target.closest("[data-voice-profile]");
  if (voiceProfile) {
    setVoiceProfile(voiceProfile.dataset.voiceProfile);
    return;
  }

  const recordText = event.target.closest("[data-record-text]");
  if (recordText) {
    startRecording(recordText.dataset.recordText);
    return;
  }

  const playText = event.target.closest("[data-play-text]");
  if (playText) {
    const text = playText.dataset.playText;
    const clip = getAudioStore(state.parentRole || "mom")[text];
    if (clip) {
      new Audio(clip.dataUrl).play().catch(() => speak(text, "mn"));
    } else {
      setVoiceStatus(`▶️ "${text}" custom audio байхгүй тул default хоолой тоглуулж байна.`);
      speak(text, "mn");
    }
    return;
  }

  const deleteText = event.target.closest("[data-delete-text]");
  if (deleteText) {
    deleteAudioClip(state.parentRole || "mom", deleteText.dataset.deleteText);
    renderParentCenter();
    return;
  }

  const nav = event.target.closest(".nav-btn");
  if (nav) {
    document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.toggle("active", btn === nav));
    document.querySelectorAll(".screen").forEach((screen) => screen.classList.toggle("active", screen.dataset.screen === nav.dataset.target));
  }

  const lang = event.target.closest(".lang-btn");
  if (lang) {
    state.lang = lang.dataset.lang;
    document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn === lang));
    refreshLanguage();
  }

  const category = event.target.closest(".pill");
  if (category) {
    state.category = category.dataset.category;
    renderWords();
  }

  const wordCard = event.target.closest(".word-card");
  if (wordCard) {
    const item = words[state.category][Number(wordCard.dataset.wordIndex)];
    speak(label(item), state.lang);
    saveProgress();
  }

  const characterCard = event.target.closest("[data-character]");
  if (characterCard) {
    playCharacterGreeting(characterGreetings[Number(characterCard.dataset.character)]);
    trackStat("songs", 1);
  }

  const alphaMode = event.target.closest(".alpha-mode");
  if (alphaMode) {
    state.alphaLang = alphaMode.dataset.alpha;
    document.querySelectorAll(".alpha-mode").forEach((btn) => btn.classList.toggle("active", btn === alphaMode));
    renderAlphabet();
  }

  const letter = event.target.closest(".letter-btn");
  if (letter) showLetter(letter.dataset.letter);

  const choice = event.target.closest(".choice");
  if (choice && state.gameAnswer) {
    const correct = choice.dataset.choice === state.gameAnswer[1];
    choice.classList.add(correct ? "correct" : "wrong");
    if (correct) {
      trackStat("correct", 1);
      celebrate();
      saveProgress();
      setTimeout(newGame, 900);
    } else {
      trackStat("wrong", 1);
      speak(state.lang === "mn" ? "Дахиад оролдоорой" : "Try again", state.lang);
    }
  }
});

$("#celebrateBtn").addEventListener("click", celebrate);
$("#playPrompt").addEventListener("click", () => {
  if (!state.gameAnswer) newGame();
  speak(label(state.gameAnswer), state.lang);
});

$("#letterDetail").addEventListener("click", () => {
  if (state.currentLetterText) speak(state.currentLetterText, state.alphaLang);
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("#installBtn").hidden = false;
});

async function requestAndroidInstall() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice.catch(() => null);
  deferredInstallPrompt = null;
  $("#installBtn").hidden = true;
}

$("#installBtn").addEventListener("click", requestAndroidInstall);

$("#androidInstallBtn").addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    await requestAndroidInstall();
    return;
  }
  $("#iosInstallTip").hidden = false;
  $("#iosInstallTip strong").textContent = "Android дээр суулгах";
  $("#iosInstallTip p").textContent = "Chrome дээр энэ link-ийг нээгээд browser menu-ээс Install app эсвэл Add to Home screen сонгоорой.";
});

$("#iosInstallBtn").addEventListener("click", () => {
  $("#iosInstallTip").hidden = false;
  $("#iosInstallTip strong").textContent = "iPhone/iPad дээр суулгах";
  $("#iosInstallTip p").textContent = "Safari дээр энэ link-ийг нээгээд Share товч дарж, Add to Home Screen сонгоорой.";
});

function updateIosInstallTip() {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isStandalone = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  $("#iosInstallTip").hidden = !(isIos && !isStandalone);
}

window.speechSynthesis.onvoiceschanged = () => {};
updateIosInstallTip();
refreshLanguage();
renderAlphabet();
showLetter("А", false);
