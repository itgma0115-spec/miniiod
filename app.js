const state = {
  lang: "mn",
  category: "fruits",
  alphaLang: "mn",
  progress: Number(localStorage.getItem("miniiOdProgress") || 0),
  letterStep: {},
  currentLetterText: "",
  gameAnswer: null,
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

const songs = [
  { mn: "Одод анивчина", en: "Twinkle Little Star", type: "public domain", notes: ["C4","C4","G4","G4","A4","A4","G4"] },
  { mn: "Мэригийн хурга", en: "Mary Had a Little Lamb", type: "public domain", notes: ["E4","D4","C4","D4","E4","E4","E4"] },
  { mn: "Фрер Жак", en: "Frere Jacques", type: "traditional", notes: ["C4","D4","E4","C4","C4","D4","E4","C4"] },
  { mn: "Монгол ардын бүүвэй", en: "Mongolian lullaby demo", type: "original demo", notes: ["G4","E4","D4","E4","G4","E4","D4"] },
  { mn: "YouTube хүүхдийн дуу", en: "YouTube kids song", type: "YouTube", youtubeId: "OO1ihUBf2Ac" },
];

const $ = (selector) => document.querySelector(selector);
let deferredInstallPrompt = null;

function imageUrl(query, index = 1) {
  const flag = countryFlagIcon(query);
  if (flag) return flag;

  const icons8 = icons8FruitIcon(query);
  if (icons8) return icons8;

  const number = numberImage(query, index);
  if (number) return number;

  const color = colorImage(query, index);
  if (color) return color;

  const shape = shapeImage(query, index);
  if (shape) return shape;

  const emoji = cartoonEmoji(query);
  const palette = [
    ["#fff3b0", "#ff8fab", "#5aa9e6"],
    ["#d8f3dc", "#52b788", "#ffb703"],
    ["#e0fbfc", "#3d5a80", "#ee6c4d"],
    ["#fde2e4", "#f28482", "#84a59d"],
    ["#fefae0", "#dda15e", "#606c38"],
  ][index % 5];
  const labelText = query.replace(/\bfruit\b|\banimal\b|\bfarm\b|\bafrican\b|\bvegetable\b/gi, "").trim().slice(0, 18);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520">
      <rect width="640" height="520" rx="46" fill="${palette[0]}"/>
      <circle cx="122" cy="118" r="72" fill="${palette[1]}" opacity=".42"/>
      <circle cx="532" cy="94" r="58" fill="${palette[2]}" opacity=".35"/>
      <circle cx="514" cy="404" r="92" fill="#ffffff" opacity=".52"/>
      <ellipse cx="320" cy="404" rx="210" ry="42" fill="#233044" opacity=".10"/>
      <text x="320" y="305" text-anchor="middle" font-size="212" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">${emoji}</text>
      <text x="320" y="458" text-anchor="middle" font-size="34" font-weight="800" fill="#233044" font-family="Arial, sans-serif">${escapeSvg(labelText)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function numberImage(query, index = 1) {
  const match = query.toLowerCase().match(/number\s+(\d+)/);
  if (!match) return "";
  const number = match[1];
  const colors = [
    ["#e0fbfc", "#5aa9e6"],
    ["#fff3b0", "#ff8fab"],
    ["#d8f3dc", "#52b788"],
    ["#fde2e4", "#f28482"],
  ][index % 4];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520">
      <rect width="640" height="520" rx="46" fill="${colors[0]}"/>
      <circle cx="126" cy="112" r="70" fill="#ffffff" opacity=".72"/>
      <circle cx="520" cy="416" r="92" fill="#ffffff" opacity=".58"/>
      <text x="320" y="340" text-anchor="middle" font-size="250" font-weight="900" fill="${colors[1]}" font-family="Arial, sans-serif">${number}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function colorImage(query, index = 1) {
  const match = query.match(/#([0-9a-f]{6})/i);
  if (!query.toLowerCase().includes("color") || !match) return "";
  const hex = `#${match[1]}`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520">
      <rect width="640" height="520" rx="46" fill="#fffaf0"/>
      <circle cx="320" cy="250" r="150" fill="${hex}" stroke="#233044" stroke-width="12"/>
      <circle cx="205" cy="138" r="42" fill="${hex}" opacity=".5"/>
      <circle cx="468" cy="382" r="62" fill="${hex}" opacity=".35"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function shapeImage(query, index = 1) {
  const q = query.toLowerCase();
  if (!q.includes("shape")) return "";
  const fill = ["#5aa9e6", "#ef6f7b", "#5fb47a", "#f8d66d", "#8b5cf6"][index % 5];
  const shape = q.replace("shape", "").trim();
  const shapes = {
    circle: `<circle cx="320" cy="260" r="138" fill="${fill}"/>`,
    square: `<rect x="190" y="130" width="260" height="260" rx="18" fill="${fill}"/>`,
    triangle: `<polygon points="320,112 470,390 170,390" fill="${fill}"/>`,
    rectangle: `<rect x="150" y="165" width="340" height="190" rx="20" fill="${fill}"/>`,
    star: `<polygon points="320,96 365,205 482,215 393,290 420,405 320,344 220,405 247,290 158,215 275,205" fill="${fill}"/>`,
    heart: `<path d="M320 408C220 330 156 276 156 206c0-52 39-91 90-91 31 0 59 15 74 39 15-24 43-39 74-39 51 0 90 39 90 91 0 70-64 124-164 202z" fill="${fill}"/>`,
    oval: `<ellipse cx="320" cy="260" rx="172" ry="116" fill="${fill}"/>`,
    diamond: `<polygon points="320,90 490,260 320,430 150,260" fill="${fill}"/>`,
    semicircle: `<path d="M160 330a160 160 0 0 1 320 0z" fill="${fill}"/>`,
    pentagon: `<polygon points="320,90 486,210 424,410 216,410 154,210" fill="${fill}"/>`,
    hexagon: `<polygon points="220,120 420,120 520,260 420,400 220,400 120,260" fill="${fill}"/>`,
    arrow: `<polygon points="350,120 520,260 350,400 350,310 140,310 140,210 350,210" fill="${fill}"/>`,
    cross: `<path d="M270 110h100v110h110v90H370v110H270V310H160v-90h110z" fill="${fill}"/>`,
    crescent: `<path d="M380 110c-84 32-132 110-112 190 18 72 82 120 154 120-34 27-78 42-126 36-102-13-174-105-161-207 13-101 105-173 207-160 13 2 26 5 38 9z" fill="${fill}"/>`,
    flower: `<g fill="${fill}"><circle cx="320" cy="260" r="58"/><circle cx="320" cy="135" r="70"/><circle cx="438" cy="220" r="70"/><circle cx="392" cy="355" r="70"/><circle cx="248" cy="355" r="70"/><circle cx="202" cy="220" r="70"/></g>`,
    cloud: `<path d="M205 340c-48 0-85-35-85-78 0-41 34-74 77-78 18-58 73-98 138-98 74 0 136 51 149 119 48 9 84 48 84 95 0 55-48 40-108 40z" fill="${fill}"/>`,
    wave: `<path d="M96 292c70-74 140-74 210 0s140 74 238 0v92c-98 74-168 74-238 0s-140-74-210 0z" fill="${fill}"/>`,
    spiral: `<path d="M320 116c98 0 178 74 178 166 0 82-66 148-148 148-72 0-130-52-130-116 0-56 48-100 106-100 50 0 90 36 90 80 0 38-32 68-72 68-34 0-62-24-62-54 0-24 22-44 48-44" fill="none" stroke="${fill}" stroke-width="34" stroke-linecap="round"/>`,
    dot: `<circle cx="320" cy="260" r="76" fill="${fill}"/>`,
    line: `<rect x="120" y="235" width="400" height="50" rx="25" fill="${fill}"/>`,
  };
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520">
      <rect width="640" height="520" rx="46" fill="#fffaf0"/>
      ${shapes[shape] || shapes.circle}
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function countryFlagIcon(query) {
  const q = query.toLowerCase();
  const map = [
    ["united arab emirates", "ae"], ["united kingdom", "gb"], ["united states", "us"], ["south korea", "kr"], ["south africa", "za"],
    ["dominican republic", "do"], ["new zealand", "nz"], ["saudi arabia", "sa"], ["sri lanka", "lk"], ["costa rica", "cr"],
    ["mongolia", "mn"], ["china", "cn"], ["japan", "jp"], ["korea", "kr"], ["canada", "ca"],
    ["france", "fr"], ["germany", "de"], ["italy", "it"], ["spain", "es"], ["russia", "ru"],
    ["kazakhstan", "kz"], ["turkey", "tr"], ["india", "in"], ["australia", "au"], ["brazil", "br"],
    ["argentina", "ar"], ["mexico", "mx"], ["egypt", "eg"], ["kenya", "ke"], ["thailand", "th"],
    ["vietnam", "vn"], ["singapore", "sg"], ["malaysia", "my"], ["indonesia", "id"], ["sweden", "se"],
    ["norway", "no"], ["finland", "fi"], ["denmark", "dk"], ["netherlands", "nl"], ["belgium", "be"],
    ["switzerland", "ch"], ["austria", "at"], ["poland", "pl"], ["czechia", "cz"], ["hungary", "hu"],
    ["romania", "ro"], ["greece", "gr"], ["portugal", "pt"], ["ireland", "ie"], ["iceland", "is"],
    ["ukraine", "ua"], ["belarus", "by"], ["uzbekistan", "uz"], ["kyrgyzstan", "kg"], ["tajikistan", "tj"],
    ["turkmenistan", "tm"], ["pakistan", "pk"], ["bangladesh", "bd"], ["nepal", "np"], ["bhutan", "bt"],
    ["philippines", "ph"], ["cambodia", "kh"], ["laos", "la"], ["myanmar", "mm"], ["brunei", "bn"],
    ["qatar", "qa"], ["kuwait", "kw"], ["israel", "il"], ["iran", "ir"], ["iraq", "iq"],
    ["jordan", "jo"], ["lebanon", "lb"], ["morocco", "ma"], ["algeria", "dz"], ["tunisia", "tn"],
    ["ethiopia", "et"], ["nigeria", "ng"], ["ghana", "gh"], ["tanzania", "tz"], ["uganda", "ug"],
    ["zimbabwe", "zw"], ["chile", "cl"], ["peru", "pe"], ["colombia", "co"], ["venezuela", "ve"],
    ["uruguay", "uy"], ["paraguay", "py"], ["bolivia", "bo"], ["cuba", "cu"], ["jamaica", "jm"],
    ["panama", "pa"], ["georgia", "ge"], ["armenia", "am"], ["azerbaijan", "az"], ["croatia", "hr"],
    ["latvia", "lv"], ["lithuania", "lt"], ["estonia", "ee"], ["serbia", "rs"], ["slovenia", "si"],
  ];
  const found = map.find(([name]) => q.includes(name));
  return found ? `https://flagcdn.com/${found[1]}.svg` : "";
}

function icons8FruitIcon(query) {
  const q = query.toLowerCase();
  const base = "https://img.icons8.com/color/240/";
  const map = [
    ["red apple", "apple.png"],
    ["apple", "apple.png"],
    ["banana", "banana.png"],
    ["orange", "orange.png"],
    ["grapes", "grapes.png"],
    ["grape", "grapes.png"],
    ["strawberry", "strawberry.png"],
    ["watermelon", "watermelon.png"],
    ["pear", "pear.png"],
    ["peach", "peach.png"],
    ["cherry", "cherry.png"],
    ["pineapple", "pineapple.png"],
    ["mango", "mango.png"],
    ["kiwi", "kiwi.png"],
    ["lemon", "lemon.png"],
    ["pomegranate", "pomegranate.png"],
    ["plum", "plum.png"],
    ["guava", "guava.png"],
    ["avocado", "avocado.png"],
    ["coconut", "coconut.png"],
    ["raspberry", "raspberry.png"],
    ["blueberry", "blueberry.png"],
    ["melon", "melon.png"],
    ["apricot", "apricot.png"],
    ["lime", "lime.png"],
    ["grapefruit", "grapefruit.png"],
    ["dragon fruit", "dragon-fruit.png"],
    ["fig", "fig.png"],
    ["date", "date-fruit.png"],
    ["persimmon", "persimmon.png"],
    ["blackcurrant", "currant.png"],
    ["redcurrant", "currant.png"],
    ["lingonberry", "berries.png"],
    ["buckthorn", "berries.png"],
    ["bird cherry", "cherry.png"],
    ["hawthorn", "berries.png"],
    ["rosehip", "berries.png"],
    ["berry", "berries.png"],
    ["fruit", "fruit-bag.png"],
  ];
  const found = map.find(([key]) => q.includes(key));
  return found ? `${base}${found[1]}` : "";
}

function fallbackImage(index = 1) {
  return imageUrl("star", index);
}

function escapeSvg(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function cartoonEmoji(query) {
  const q = query.toLowerCase();
  const map = [
    ["lingonberry", "🫐"], ["buckthorn", "🍊"], ["blackcurrant", "🫐"], ["redcurrant", "🍒"], ["bird cherry", "🍒"],
    ["hawthorn", "🍒"], ["rosehip", "🍒"], ["apricot", "🍑"], ["raspberry", "🍓"],
    ["apple", "🍎"], ["banana", "🍌"], ["orange", "🍊"], ["grape", "🍇"], ["strawberry", "🍓"],
    ["watermelon", "🍉"], ["pear", "🍐"], ["peach", "🍑"], ["cherry", "🍒"], ["pineapple", "🍍"],
    ["mango", "🥭"], ["kiwi", "🥝"], ["lemon", "🍋"], ["pomegranate", "🍎"], ["plum", "🍑"],
    ["coconut", "🥥"], ["blueberry", "🫐"], ["melon", "🍈"], ["carrot", "🥕"], ["cucumber", "🥒"],
    ["corn", "🌽"], ["onion", "🧅"], ["pumpkin", "🎃"], ["tomato", "🍅"], ["vegetable", "🥦"],
    ["bear", "🐻"], ["fox", "🦊"], ["deer", "🦌"], ["wolf", "🐺"], ["rabbit", "🐰"],
    ["squirrel", "🐿️"], ["cow", "🐮"], ["horse", "🐴"], ["sheep", "🐑"], ["goat", "🐐"],
    ["pig", "🐷"], ["chicken", "🐥"], ["lion", "🦁"], ["elephant", "🐘"], ["giraffe", "🦒"],
    ["zebra", "🦓"], ["monkey", "🐵"], ["crocodile", "🐊"], ["tiger", "🐯"], ["leopard", "🐆"],
    ["rhino", "🦏"], ["hippo", "🦛"], ["camel", "🐫"], ["dog", "🐶"], ["cat", "🐱"],
    ["duck", "🦆"], ["goose", "🪿"], ["owl", "🦉"], ["eagle", "🦅"], ["penguin", "🐧"],
    ["fish", "🐟"], ["bird", "🐦"], ["butterfly", "🦋"], ["turtle", "🐢"], ["panda", "🐼"],
    ["fire truck", "🚒"], ["ambulance", "🚑"], ["police car", "🚓"], ["school bus", "🚌"], ["sports car", "🏎️"],
    ["electric car", "🚙"], ["minibus", "🚐"], ["motorcycle", "🏍️"], ["bicycle", "🚲"], ["scooter", "🛵"],
    ["excavator", "🚜"], ["crane", "🏗️"], ["helicopter", "🚁"], ["rocket", "🚀"], ["metro", "🚇"],
    ["tram", "🚋"], ["taxi", "🚕"], ["truck", "🚚"], ["tractor", "🚜"], ["bus", "🚌"],
    ["ship", "🚢"], ["boat", "⛵"], ["balloon", "🎈"], ["snowmobile", "🛷"], ["trailer", "🚚"],
    ["jeep", "🚙"], ["cart", "🛒"], ["vehicle", "🚗"], ["ball", "⚽"], ["car", "🚗"], ["train", "🚂"], ["airplane", "✈️"],
    ["head", "🙂"], ["hair", "💇"], ["eye", "👁️"], ["ear", "👂"], ["nose", "👃"], ["mouth", "👄"], ["tooth", "🦷"], ["tongue", "👅"],
    ["neck", "🙂"], ["shoulder", "💪"], ["arm", "💪"], ["hand", "✋"], ["finger", "☝️"], ["chest", "🧍"], ["belly", "🧍"], ["back", "🧍"],
    ["leg", "🦵"], ["knee", "🦵"], ["foot", "🦶"], ["toe", "🦶"], ["brain", "🧠"], ["lips", "👄"], ["cheek", "🙂"], ["chin", "🙂"],
    ["forehead", "🙂"], ["eyelash", "👁️"], ["eyebrow", "🙂"], ["wrist", "✋"], ["ankle", "🦶"],
    ["bread", "🍞"], ["milk", "🥛"], ["egg", "🥚"], ["cheese", "🧀"], ["rice", "🍚"], ["noodles", "🍜"], ["soup", "🍲"], ["dumpling", "🥟"],
    ["pastry", "🥟"], ["pizza", "🍕"], ["burger", "🍔"], ["salad", "🥗"], ["potato", "🥔"], ["tomato", "🍅"], ["chicken", "🍗"], ["meat", "🥩"],
    ["yogurt", "🥛"], ["ice cream", "🍦"], ["cookie", "🍪"], ["cake", "🍰"], ["chocolate", "🍫"], ["honey", "🍯"], ["tea", "🍵"], ["juice", "🧃"],
    ["father", "👨"], ["mother", "👩"], ["brother", "👦"], ["sister", "👧"], ["sibling", "🧒"], ["grandfather", "👴"], ["grandmother", "👵"],
    ["son", "👦"], ["daughter", "👧"], ["friend", "🧒"], ["teacher", "🧑‍🏫"], ["doctor", "🧑‍⚕️"], ["uncle", "👨"], ["aunt", "👩"], ["cousin", "🧒"],
    ["baby", "👶"], ["twins", "👯"], ["family", "👨‍👩‍👧"],
    ["mongolia", "🇲🇳"], ["china", "🇨🇳"], ["japan", "🇯🇵"], ["korea", "🇰🇷"], ["united states", "🇺🇸"],
    ["canada", "🇨🇦"], ["united kingdom", "🇬🇧"], ["france", "🇫🇷"], ["germany", "🇩🇪"], ["italy", "🇮🇹"],
    ["spain", "🇪🇸"], ["russia", "🇷🇺"], ["kazakhstan", "🇰🇿"], ["turkey", "🇹🇷"], ["india", "🇮🇳"],
    ["australia", "🇦🇺"], ["brazil", "🇧🇷"], ["argentina", "🇦🇷"], ["mexico", "🇲🇽"], ["egypt", "🇪🇬"],
    ["south africa", "🇿🇦"], ["kenya", "🇰🇪"], ["thailand", "🇹🇭"], ["vietnam", "🇻🇳"], ["singapore", "🇸🇬"],
    ["malaysia", "🇲🇾"], ["indonesia", "🇮🇩"], ["new zealand", "🇳🇿"], ["sweden", "🇸🇪"], ["norway", "🇳🇴"],
    ["flag", "🏳️"],
    ["sun", "☀️"], ["moon", "🌙"], ["star", "⭐"], ["flower", "🌸"], ["book", "📘"],
    ["robot", "🤖"], ["rocket", "🚀"], ["house", "🏠"], ["water", "💧"], ["cloud", "☁️"],
    ["yellow", "🟡"], ["pink", "🌸"], ["number", "🔢"], ["letter", "🔤"],
  ];
  const found = map.find(([key]) => q.includes(key));
  return found ? found[1] : "⭐";
}

function label(item) {
  return state.lang === "mn" ? item[0] : item[1];
}

function audioSlug(text) {
  return `mn-${Array.from(text).map((char) => char.codePointAt(0).toString(16)).join("-")}.mp3`;
}

function speak(text, lang = state.lang) {
  if (lang === "mn") {
    const audio = new Audio(`assets/audio/mn/${audioSlug(text)}`);
    audio.play().catch(() => speakWithBrowser(text, lang));
    return;
  }
  speakWithBrowser(text, lang);
}

function speakWithBrowser(text, lang = state.lang) {
  playNotes(["C5"], 0.08);
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const requestedLang = lang === "mn" ? "mn" : "en";
  utterance.rate = 0.78;
  utterance.pitch = 1.08;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((voice, index) => voice.lang.toLowerCase().startsWith(requestedLang) && index % 2 === state.progress % 2);
  const fallback = voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) || voices[0];
  const selectedVoice = preferred || fallback;

  utterance.lang = selectedVoice ? selectedVoice.lang : (lang === "mn" ? "mn-MN" : "en-US");
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.onerror = () => playNotes(["C5", "G5"], 0.12);
  window.speechSynthesis.speak(utterance);
}

function celebrate() {
  speak(state.lang === "mn" ? "Мундаг байна, миний од!" : "Great job, my star!", state.lang);
  playNotes(["C5", "E5", "G5", "C6"], 0.14);
  setTimeout(playApplause, 260);
}

function saveProgress() {
  state.progress += 1;
  localStorage.setItem("miniiOdProgress", String(state.progress));
  $("#progressText").textContent = state.lang === "mn" ? `${state.progress} үг` : `${state.progress} words`;
}

function renderCategories() {
  $("#categoryTabs").innerHTML = categories.map((cat) => (
    `<button class="pill ${cat.id === state.category ? "active" : ""}" data-category="${cat.id}" type="button">${state.lang === "mn" ? cat.mn : cat.en}</button>`
  )).join("");
}

function renderWords() {
  renderCategories();
  $("#wordGrid").innerHTML = words[state.category].map((item, index) => `
    <button class="word-card" data-word-index="${index}" type="button">
      <img alt="${label(item)}" src="${imageUrl(item[2], index + 1)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage(index + 1)}';" />
      <strong>${label(item)}</strong>
      <span>${state.lang === "mn" ? item[1] : item[0]}</span>
    </button>
  `).join("");
}

function renderSongs() {
  $("#songList").innerHTML = songs.map((song, index) => `
    <article class="song-card ${song.youtubeId ? "video-song" : ""}">
      ${song.youtubeId ? `
        <a class="youtube-link" href="https://www.youtube.com/watch?v=${song.youtubeId}" target="_blank" rel="noopener">
          <img src="https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg" alt="${state.lang === "mn" ? song.mn : song.en}" />
          <span>▶</span>
        </a>
      ` : ""}
      <div>
        <strong>${state.lang === "mn" ? song.mn : song.en}</strong>
        <small>${song.type}</small>
      </div>
      ${song.youtubeId ? "" : `<button class="play-dot" data-song="${index}" type="button" aria-label="Play song">▶</button>`}
    </article>
  `).join("");
}

function noteFrequency(note) {
  const notes = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88, C5: 523.25, E5: 659.25, G5: 783.99, C6: 1046.5 };
  return notes[note] || 440;
}

function playNotes(notes, duration = 0.28) {
  const audio = new (window.AudioContext || window.webkitAudioContext)();
  if (audio.state === "suspended") audio.resume();
  notes.forEach((note, index) => {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.frequency.value = noteFrequency(note);
    osc.type = "sine";
    gain.gain.setValueAtTime(0.0001, audio.currentTime + index * duration);
    gain.gain.exponentialRampToValueAtTime(0.18, audio.currentTime + index * duration + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + (index + 0.88) * duration);
    osc.connect(gain).connect(audio.destination);
    osc.start(audio.currentTime + index * duration);
    osc.stop(audio.currentTime + (index + 0.95) * duration);
  });
}

function playApplause() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const audio = new AudioContext();
  if (audio.state === "suspended") audio.resume();

  for (let burst = 0; burst < 12; burst += 1) {
    const start = audio.currentTime + burst * 0.055;
    const buffer = audio.createBuffer(1, audio.sampleRate * 0.08, audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }

    const noise = audio.createBufferSource();
    noise.buffer = buffer;

    const filter = audio.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1200 + Math.random() * 900;
    filter.Q.value = 0.9;

    const gain = audio.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.07);

    noise.connect(filter).connect(gain).connect(audio.destination);
    noise.start(start);
    noise.stop(start + 0.08);
  }
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

  const song = event.target.closest("[data-song]");
  if (song) {
    playNotes(songs[Number(song.dataset.song)].notes);
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
      celebrate();
      saveProgress();
      setTimeout(newGame, 900);
    } else {
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
