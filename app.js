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
  { id: "fruits", mn: "Жимс", en: "Fruits" },
  { id: "animals", mn: "Амьтад", en: "Animals" },
  { id: "cars", mn: "Машин", en: "Vehicles" },
  { id: "countries", mn: "Улс орнууд", en: "Countries" },
  { id: "numbers", mn: "Тоо", en: "Numbers" },
];

const words = {
  fruits: [
    ["Алим", "Apple", "apple fruit"], ["Банана", "Banana", "banana fruit"], ["Жүрж", "Orange", "orange fruit"],
    ["Усан үзэм", "Grape", "grapes fruit"], ["Гүзээлзгэнэ", "Strawberry", "strawberry fruit"], ["Тарвас", "Watermelon", "watermelon fruit"],
    ["Лийр", "Pear", "pear fruit"], ["Тоор", "Peach", "peach fruit"], ["Интоор", "Cherry", "cherry fruit"],
    ["Ананас", "Pineapple", "pineapple fruit"], ["Манго", "Mango", "mango fruit"], ["Киви", "Kiwi", "kiwi fruit"],
    ["Нимбэг", "Lemon", "lemon fruit"], ["Анар", "Pomegranate", "pomegranate fruit"], ["Чавга", "Plum", "plum fruit"],
    ["Гуава", "Guava", "guava fruit"], ["Авокадо", "Avocado", "avocado fruit"], ["Кокос", "Coconut", "coconut fruit"],
    ["Бөөрөлзгөнө", "Raspberry", "raspberry berry"], ["Нэрс", "Blueberry", "blueberry berry"], ["Амтат гуа", "Melon", "melon fruit"],
    ["Аньс", "Lingonberry", "lingonberry berry"], ["Чацаргана", "Sea buckthorn", "sea buckthorn berry"], ["Үхрийн нүд", "Blackcurrant", "blackcurrant berry"],
    ["Улаалзгана", "Redcurrant", "redcurrant berry"], ["Мойл", "Bird cherry", "bird cherry berry"], ["Долоогоно", "Hawthorn", "hawthorn berry"],
    ["Нохойн хошуу", "Rosehip", "rosehip berry"], ["Гүйлс", "Apricot", "apricot fruit"], ["Чихэрлэг алим", "Sweet apple", "red apple fruit"],
  ],
  animals: [
    ["Баавгай", "Bear", "bear animal"], ["Үнэг", "Fox", "fox animal"], ["Буга", "Deer", "deer animal"],
    ["Чоно", "Wolf", "wolf animal"], ["Туулай", "Rabbit", "rabbit animal"], ["Хэрэм", "Squirrel", "squirrel animal"],
    ["Үхэр", "Cow", "cow farm animal"], ["Морь", "Horse", "horse farm animal"], ["Хонь", "Sheep", "sheep farm animal"],
    ["Ямаа", "Goat", "goat farm animal"], ["Гахай", "Pig", "pig farm animal"], ["Тахиа", "Chicken", "chicken farm animal"],
    ["Арслан", "Lion", "lion african animal"], ["Заан", "Elephant", "elephant african animal"], ["Анааш", "Giraffe", "giraffe african animal"],
    ["Тахь", "Zebra", "zebra african animal"], ["Сармагчин", "Monkey", "monkey animal"], ["Матар", "Crocodile", "crocodile animal"],
    ["Бар", "Tiger", "tiger animal"], ["Ирвэс", "Leopard", "leopard animal"], ["Хирс", "Rhino", "rhinoceros animal"],
    ["Хиппо", "Hippo", "hippopotamus animal"], ["Тэмээ", "Camel", "camel animal"], ["Нохой", "Dog", "dog animal"],
    ["Муур", "Cat", "cat animal"], ["Нугас", "Duck", "duck animal"], ["Галуу", "Goose", "goose animal"],
    ["Шар шувуу", "Owl", "owl animal"], ["Бүргэд", "Eagle", "eagle animal"], ["Оцон шувуу", "Penguin", "penguin animal"],
  ],
  cars: [
    ["Суудлын машин", "Car", "car vehicle"], ["Автобус", "Bus", "bus vehicle"], ["Ачааны машин", "Truck", "truck vehicle"],
    ["Галт тэрэг", "Train", "train vehicle"], ["Онгоц", "Airplane", "airplane vehicle"], ["Усан онгоц", "Ship", "ship vehicle"],
    ["Унадаг дугуй", "Bicycle", "bicycle vehicle"], ["Мотоцикл", "Motorcycle", "motorcycle vehicle"], ["Такси", "Taxi", "taxi vehicle"],
    ["Түргэн тусламж", "Ambulance", "ambulance vehicle"], ["Галын машин", "Fire truck", "fire truck vehicle"], ["Цагдаагийн машин", "Police car", "police car vehicle"],
    ["Трактор", "Tractor", "tractor vehicle"], ["Экскаватор", "Excavator", "excavator vehicle"], ["Кран", "Crane", "crane vehicle"],
    ["Сансрын хөлөг", "Rocket", "rocket vehicle"], ["Нисдэг тэрэг", "Helicopter", "helicopter vehicle"], ["Метро", "Metro", "metro train vehicle"],
    ["Трамвай", "Tram", "tram vehicle"], ["Жийп", "Jeep", "jeep vehicle"], ["Спорт машин", "Sports car", "sports car vehicle"],
    ["Цахилгаан машин", "Electric car", "electric car vehicle"], ["Мини автобус", "Minibus", "minibus vehicle"], ["Сургуулийн автобус", "School bus", "school bus vehicle"],
    ["Тэрэг", "Cart", "cart vehicle"], ["Скүүтер", "Scooter", "scooter vehicle"], ["Чиргүүл", "Trailer", "trailer vehicle"],
    ["Цасны машин", "Snowmobile", "snowmobile vehicle"], ["Завь", "Boat", "boat vehicle"], ["Агаарын бөмбөлөг", "Hot air balloon", "hot air balloon vehicle"],
  ],
  countries: [
    ["Монгол", "Mongolia", "mongolia flag"], ["Хятад", "China", "china flag"], ["Япон", "Japan", "japan flag"],
    ["Солонгос", "Korea", "korea flag"], ["Америк", "United States", "united states flag"], ["Канад", "Canada", "canada flag"],
    ["Англи", "United Kingdom", "united kingdom flag"], ["Франц", "France", "france flag"], ["Герман", "Germany", "germany flag"],
    ["Итали", "Italy", "italy flag"], ["Испани", "Spain", "spain flag"], ["Орос", "Russia", "russia flag"],
    ["Казахстан", "Kazakhstan", "kazakhstan flag"], ["Турк", "Turkey", "turkey flag"], ["Энэтхэг", "India", "india flag"],
    ["Австрали", "Australia", "australia flag"], ["Бразил", "Brazil", "brazil flag"], ["Аргентин", "Argentina", "argentina flag"],
    ["Мексик", "Mexico", "mexico flag"], ["Египет", "Egypt", "egypt flag"], ["Өмнөд Африк", "South Africa", "south africa flag"],
    ["Кени", "Kenya", "kenya flag"], ["Тайланд", "Thailand", "thailand flag"], ["Вьетнам", "Vietnam", "vietnam flag"],
    ["Сингапур", "Singapore", "singapore flag"], ["Малайз", "Malaysia", "malaysia flag"], ["Индонез", "Indonesia", "indonesia flag"],
    ["Шинэ Зеланд", "New Zealand", "new zealand flag"], ["Швед", "Sweden", "sweden flag"], ["Норвеги", "Norway", "norway flag"],
  ],
  numbers: [
    ["Нэг", "One", "number 1"], ["Хоёр", "Two", "number 2"], ["Гурав", "Three", "number 3"], ["Дөрөв", "Four", "number 4"],
    ["Тав", "Five", "number 5"], ["Зургаа", "Six", "number 6"], ["Долоо", "Seven", "number 7"], ["Найм", "Eight", "number 8"],
    ["Ес", "Nine", "number 9"], ["Арав", "Ten", "number 10"], ["Арван нэг", "Eleven", "number 11"], ["Арван хоёр", "Twelve", "number 12"],
    ["Арван гурав", "Thirteen", "number 13"], ["Арван дөрөв", "Fourteen", "number 14"], ["Арван тав", "Fifteen", "number 15"],
    ["Арван зургаа", "Sixteen", "number 16"], ["Арван долоо", "Seventeen", "number 17"], ["Арван найм", "Eighteen", "number 18"],
    ["Арван ес", "Nineteen", "number 19"], ["Хорь", "Twenty", "number 20"],
  ],
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

function countryFlagIcon(query) {
  const q = query.toLowerCase();
  const map = [
    ["mongolia", "mn"], ["china", "cn"], ["japan", "jp"], ["korea", "kr"],
    ["united states", "us"], ["canada", "ca"], ["united kingdom", "gb"],
    ["france", "fr"], ["germany", "de"], ["italy", "it"], ["spain", "es"],
    ["russia", "ru"], ["kazakhstan", "kz"], ["turkey", "tr"], ["india", "in"],
    ["australia", "au"], ["brazil", "br"], ["argentina", "ar"], ["mexico", "mx"],
    ["egypt", "eg"], ["south africa", "za"], ["kenya", "ke"], ["thailand", "th"],
    ["vietnam", "vn"], ["singapore", "sg"], ["malaysia", "my"], ["indonesia", "id"],
    ["new zealand", "nz"], ["sweden", "se"], ["norway", "no"],
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

$("#installBtn").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice.catch(() => null);
  deferredInstallPrompt = null;
  $("#installBtn").hidden = true;
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
