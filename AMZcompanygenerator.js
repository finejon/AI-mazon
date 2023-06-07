// List of 100 brand name pharmaceutical products
const pharmaceuticalProducts = [
    "Advil", "Benadryl", "Crestor", "Lipitor", "Prozac", "Viagra", "Zyrtec", "Ambien", "Xanax", "Tylenol",
    "Nexium", "Celebrex", "Singulair", "Prilosec", "Zoloft", "Claritin", "Plavix", "Lexapro", "Effexor", "Abilify",
    "Wellbutrin", "Ritalin", "Adderall", "Lyrica", "Paxil", "Seroquel", "Valium", "OxyContin", "Cialis", "Levitra",
    "Cymbalta", "Vicodin", "Klonopin", "Lamictal", "Tramadol", "Ambien CR", "Zolpidem", "Lorazepam", "Ativan", "Flomax",
    "Flovent", "Fosamax", "Depakote", "Effexor XR", "Eliquis", "Estrace", "Hydrocodone", "Advair Diskus", "Albuterol",
    "Metformin", "Prednisone", "Symbicort", "Tamsulosin", "Warfarin", "Ciprofloxacin", "Doxycycline", "Escitalopram",
    "Fluoxetine", "Gabapentin", "Losartan", "Metoprolol", "Montelukast", "Omeprazole", "Pantoprazole", "Quetiapine",
    "Rosuvastatin", "Sertraline", "Simvastatin", "Trazodone", "Vitamin D", "Zolpidem", "Acetaminophen", "Aspirin",
    "Codeine", "Diazepam", "Fentanyl", "Guaifenesin", "Hydroxyzine", "Ibuprofen", "Lisinopril", "Naproxen", "Oxycodone",
    "Pseudoephedrine", "Ranitidine", "Tramadol", "Venlafaxine", "Zopiclone", "Amlodipine", "Azithromycin", "Clonazepam",
    "Duloxetine", "Esomeprazole", "Folic Acid", "Glipizide", "Hydrochlorothiazide", "Itraconazole", "Ketoprofen"
    // ... (add more pharmaceutical products here)
  ];
  
  // List of 100 random cities in China
  const chinaCities = [
    "Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Xi'an", "Chongqing", "Wuhan", "Nanjing",
    "Tianjin", "Suzhou", "Qingdao", "Dalian", "Xiamen", "Jinan", "Harbin", "Fuzhou", "Changsha", "Zhengzhou",
    "Shijiazhuang", "Nanning", "Wuxi", "Kunming", "Hefei", "Changchun", "Urumqi", "Lanzhou", "Guiyang", "Nanchang",
    "Xuzhou", "Taiyuan", "Haikou", "Shenyang", "Xining", "Foshan", "Ningbo", "Wenzhou", "Ürümqi", "Tangshan",
    "Datong", "Weifang", "Wuhu", "Huainan", "Jilin", "Shantou", "Luoyang", "Yichang", "Hohhot", "Jiangmen",
    "Zhuhai", "Baotou", "Jinhua", "Huaian", "Yinchuan", "Jiangyin", "Yangzhou", "Zhanjiang", "Nantong", "Jiaxing",
    "Xiangtan", "Hegang", "Handan", "Zibo", "Changzhou", "Huizhou", "Zhangjiagang", "Yantai", "Anshan", "Zhenjiang",
    "Linfen", "Anyang", "Zhangzhou", "Jining", "Pingdingshan", "Xinyang", "Taizhou", "Dongguan", "Maoming", "Wuhai",
    "Nanchong", "Zigong", "Baoding", "Hengyang", "Nanyang", "Jiangmen", "Jiujiang", "Baicheng", "Shaoxing", "Jiaozuo",
  ];
// List of 100 random small towns in Illinois
const illinoisTowns = [
    "Abingdon", "Aledo", "Amboy", "Arcola", "Arthur", "Astoria", "Atwood", "Aviston", "Bannockburn", "Barrington",
    "Bartonville", "Beach Park", "Beardstown", "Beecher", "Belgium", "Belleville", "Bellwood", "Belvidere", "Bement", "Benld",
    "Bensenville", "Benson", "Benton", "Berkeley", "Berwyn", "Bethalto", "Bethany", "Biggsville", "Bishop Hill", "Bismarck",
    "Bloomingdale", "Bloomington", "Blue Island", "Blue Mound", "Bluffs", "Bluford", "Bolingbrook", "Bonfield", "Bonnie", "Boody",
    "Bourbonnais", "Bowen", "Braceville", "Bradford", "Bradley", "Braidwood", "Breese", "Bridgeport", "Bridgeview", "Brighton",
    "Brimfield", "Broadlands", "Broadview", "Brocton", "Brookfield", "Brooklyn", "Brookport", "Broughton", "Browning", "Browns",
  ];
  
// Function to generate a random word with a length between 2 and 6
function generateRandomWord(minLength, maxLength) {
    const randomPharmaceutical = getRandomCharacters(getRandomItem(pharmaceuticalProducts), minLength, maxLength);
    const randomChinaCity = getRandomCharacters(getRandomItem(chinaCities), minLength, maxLength);
    const randomIllinoisTown = getRandomCharacters(getRandomItem(illinoisTowns), minLength, maxLength);
  
    const wordParts = [randomPharmaceutical, randomChinaCity, randomIllinoisTown];
    const shuffledParts = getRandomOrder(wordParts);
    const word = shuffledParts.join('');
  
    const wordLength = getRandomNumber(6, 16);
    return word.slice(0, wordLength);
  }
  
  // Function to randomly select an item from a list
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
  // Function to generate random characters from a word with a length between min and max
  function getRandomCharacters(word, minLength, maxLength) {
    const length = getRandomNumber(minLength, maxLength);
    const start = Math.floor(Math.random() * (word.length - length + 1));
    return word.slice(start, start + length);
  }
  
  // Function to randomly order an array
  function getRandomOrder(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate and log a random word with a length between 6 and 16
  const randomWord = generateRandomWord(2, 6).toUpperCase();
  console.log(randomWord);
  