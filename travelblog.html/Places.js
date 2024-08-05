const data = [
    {
      name: "Bandaje Falls",
      description:
        "Bandaje falls, also known as Bandaje Arbi falls is a waterfall located in the Kudremukha section of the Western Ghats in the Belthangady taluk of Dakshina Kannada district, Karnataka. The waterfalls can be reached only by undertaking trekking in thick forests and grass lands with the help of local guides and in summer the waterfalls goes dry. The height of waterfalls is about 200 feet.",
  
      facts: [
        "The Bandaje falls trek is moderately challenging. The trek distance is 6-6.5 kms from the start point, and it takes around 7-8 hours to reach Bandaje falls & return to the start point. ",
        "Ballalarayana Durga fort is the first part of this trek; on your way to Bandaje Falls. This fort is not only known for its breathtaking view and greenery charms, but it’s also an ideal spot for amazing sunsets. Earlier, people used only to cover the fort & return as not many were aware of the waterfall.",
        "The most suitable time to visit the waterfall is the post-monsoon season. It is not advisable to visit the waterfall during the rainy season as not only do the rocky surface gets slippery but one can also face a lot of leeches and other insects as well.",
        
      ],
    },
    {
      name: "Apsarakonda",
      description:
        "Apsarkonda is an emerging tourist village near Honnavar, in the district of Uttara Kannada, Karnataka, India. It is situated 8 km from the Honnavar bus stand. Apsarkonda means Pond of Angels. This is named after a pond facing the beach. The legend associated with the name of the waterfall is that it was the chosen place of the angels to take a bath and relax.",
  
      facts: [
        "There is the Maha Ganapati and Ugra Narasimha temple, behind which the Apsarkonda waterfalls are found.  ",
        "There is a Pandava cave that is of historical significance. According to mythology, the Pandavas stayed here during their Vanavasa.",
        "The Kelginoor lagoon near the beach is also a tourist attraction. Apsarkonda is known for its unexplored beaches.",
        
      ],
    },
    {
      name: "St Mary's Island",
      description:
        "St. Mary's Islands, also known as Coconut Island and Thonsepar, are a set of four small islands in the Arabian Sea off the coast of Malpe in Udipi, Karnataka, India. They are known for their distinctive geological formation of columnar rhyolitic lava.The monument is considered an important site for Geo Tourism.",
  
      facts: [
        "Four small islands together form the St.Mary's Islands. Each of these islands is interconnected and have their speciality. Coconut Island, North Island, Darya Bahadurgarh Island and South Island are the four islands that comprise St.Mary's Islands. ",
        "All we know is that Vasco da Gama first landed in Kozhikode (Calicut) in Kerala. However, the folklore of Malpe says he made a pitstop at St.Mary's Islands (Bahadurgarh Island) before he took off to Calicut. It is him who put a cross and named it as O Padrao de Santa Maria for Mother Mary. Therefore, indicating the origination of the name St.Mary's Islands.",
        "The hexagonal shaped pillar-like rocks perched on the Northern Island of St.Mary's is a unique attraction. These basaltic rock formations make it a photogenic destination for sure! In fact, it is because of these 'columnar joints' or 'laminar lava' that it is listed as one of National Geological Monuments.",
        
      ],
    },
    {
      name: "Netrani Island",
      description:
        "Netrani (historically known as Bajrangi Island, Pigeon Island and also Heart Shaped Island) is a small island of India located in the Arabian Sea. It is off the coast of Karnataka situated approximately 10 nautical miles (19 km) from the temple town of Murudeshwara in Bhatkal Taluka. The island can be seen from the mainland over 15 km (9.3 miles) away. Views above give this island the appearance of being heart-shaped. Its animal inhabitants include wild goats and pigeons.",
  
      facts: [
        "Netrani is a coral island whose reefs teem with many varieties of butterfly fish, trigger fish, parrot fish, eel and shrimp. Divers have also reported seeing orcas and whale sharks around the island. Fish eagles thrive on sea snakes and fish. ",
        "A species of mongoose was also spotted here, confirming mammalian inhabitants apart from bats. Whale sharks were also spotted by snorkelers. Eighty nine varieties of coral fish were found in one study.",
        "Netrani Island has several dive sites with visibility ranging from 15 to 20 meters (49.2 to 65.6 feet). Diving is popular between June and September and is done from a boat anchored close to the island; steep cliffs and sharp rocks discourage climbing to the island proper.",
        
      ],
    },
    {
      name: "Honnemardu",
      description:
        "Honnemaradu is a tourist place situated on the back waters of River Sharavathi in India. Honnemardu derived its name from the Honne tree. However, the literal meaning of Honnemardu is Golden Lake. This is perhaps a reference to the fact that Honnemardu is located on the backwaters of the Sharavathi river. It is in Sagara taluk, Karnataka about 35 km from Sagara on the way to Jog Falls, 12 km from Talaguppa and 392 km from Bangalore.",
  
      facts: [
        "Honnemaradu is tucked away in the lush greenery of the Western Ghats along the Sharavati backwaters near Sagara. Encompassing an area of 50 km by 80 km, the reservoir at Honnemaradu (or Golden Lake) is known for its views of the sunrise and sunset. ",
        "In addition to the adventure activities, Honnemaradu is popular with birdwatchers, who can spend hours watching and identifying the variety of birds and butterflies.",
        "Trekking is only permitted along roads in a designated area. Some of the water sports activities here include boating and kayaking, but it is only permitted with a guide. Swimming is not allowed. There is no longer equipment for wind rafting.",
        
      ],
    },
    {
      name: "Kudremukh Trek",
      description:
        "The Kudremukh Peak of Chikmagalur is the third highest peak of Karnataka and has dense forest covering an area of over 600 square kilometers. The Kudremukh Trek Chikmagalur is one of the best trekking experiences of Karnataka at a height of 6,207 feet above sea level.It is a 22km(two-way) trek where you can get to witness the surreal beauty of the surroundings while making your way through the rugged trails.",
  
      facts: [
        "Kudremukh literally means horse face in Kannada. This name is because of the distinctive shape of the peak. This is also called as Samseparvath historically as it used to access from Samse village.Kudremukh is a home for many flora and fauna. You can even spot deer and peacocks on the way amongst other wildlife while trekking!   ",
        "Rolling green hills, clouds kissing the mountains, forest trails, bamboo shrubs, and a dozen waterfalls, the Kudremukha Peak trek has it all- No wonder it is called the Himalayas of the south. The scenery keeps changing on the trek and will surely amaze anyone.",
        "The ride is adventurous as one crosses coffee plantations and muddy roads with waterfalls and streams as well on the way.",
        
      ],
    }

];


const button = document.querySelectorAll(".moreInfo");
const model = document.querySelector(".model");
const modelContent = document.querySelector(".modelContent");
const closeModel = document.querySelector(".closeButton");
const title = document.querySelector(".modelContent h1");
const factTitle = document.querySelector(".factTitle");
const details = document.querySelector(".details");
const factContainer = document.querySelector(".factContainer");
let place;

const renderPlace = (item) => {
  factTitle.innerHTML += " " + place;
  console.log(factTitle);
  // Render the details in the container
  let placeName = document.createElement("h1");
  let placeDescription = document.createElement("p");
  

  for (let i = 0; i < 3; i++) {
    let fact = document.createElement("li");
    fact.textContent = item.facts[i];
    factContainer.appendChild(fact);
  }

  placeName.setAttribute("class", "placeTitle");
  placeDescription.setAttribute("class", "placeDescription");
  placeName.innerText = item.name;
  placeDescription.innerText = item.description;

  details.appendChild(placeName);
  details.appendChild(placeDescription);
  
};

button.forEach((link) => {
  link.addEventListener("click", function () {
    modelContent.classList.add("active");
    model.classList.add("active");

    place = link.getAttribute("data");

    data.filter(function (item) {
      if (item.name === place) {
        renderPlace(item);
      }
    });
  });
});


model.addEventListener("click", function () {
  model.classList.remove("active");
  modelContent.classList.remove("active");

  details.innerHTML = "";

  factContainer.innerHTML = "";
  factTitle.innerHTML =
    'Here are some <span class="factHighlight">fun facts</span> about';
});

closeModel.addEventListener("click", function () {
  model.classList.remove("active");
  modelContent.classList.remove("active");
  details.innerHTML = "";

  factContainer.innerHTML = "";
  factTitle.innerHTML =
    'Here are some <span class="factHighlight">fun facts</span> about';
});

