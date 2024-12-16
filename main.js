let currentArticleIndex = 0;

// Embedded JSON data
const articles = [
  {
    id: 1,
    title: "Global Warming-A threat to our planet",
    subtitle: "",
    by: "Mujtaba Alam",
    introduction:
      "Global warming refers to the long-term rise in Earth's average surface temperature due to the accumulation of greenhouse gases (GHGs) like carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O) in the atmosphere. This phenomenon, primarily driven by human activities such as burning fossil fuels, deforestation, and industrial processes, poses a severe threat to the planet's ecosystems and human societies.",
    cause:
      "1. Burning Fossil Fuels: The combustion of coal, oil, and natural gas for energy releases vast amounts of CO₂. Deforestation: Cutting down forests reduces the Earth's capacity to absorb CO₂. Industrial Emissions: Factories and manufacturing units emit significant GHGs. Agricultural Practices: Livestock farming produces methane, a potent greenhouse gas.",
    effects:
      "1. Climate Change: Rising temperatures lead to more frequent heatwaves, droughts, and storms. 2. Melting Ice Caps: The polar ice caps and glaciers are melting, causing sea levels to rise. 3. Ecosystem Disruption: Many species are struggling to adapt to changing habitats. 4. Human Health Risks: Increased heat can lead to heat-related illnesses and exacerbate air pollution.",
    control:
      "1. Transition to Renewable Energy: Solar, wind, and hydropower can reduce dependence on fossil fuels. 2. Afforestation and Reforestation: Planting trees can help absorb CO₂ from the atmosphere. 3. Energy Efficiency: Using energy-efficient appliances and reducing waste can lower emissions. 4. Policy Interventions: Governments must enforce stricter environmental regulations and promote sustainable practices.",
    conclusion:
      "Global warming is a pressing challenge requiring collective action at local, national, and global levels. While the effects are daunting, adopting sustainable practices, innovative technologies, and proactive policies can mitigate its impact, ensuring a healthier planet for future generations.",
    image: "global.png",
  },
  {
    "id": 2,
    "title": "Dowry System-A Social Evil",
    "subtitle": "",
    "by": "Mujtaba alam",
    "introduction": "What is the Dowry System?           The dowry system refers to the practice where the bride’s family gives money, gifts, or property to the groom’s family during marriage. While considered a tradition in some societies, it often leads to negative consequences.",
    "cause": "Cultural traditions, gender inequality.",
    "effects": "Impact of the Dowry System. Financial Burden: Families face severe economic hardships to meet dowry demands.               Gender Inequality: Promotes the view of women as a financial burden.            Domestic Violence: Unfulfilled demands often lead to harassment or abuse. Why Does It Continue?      Deep-rooted cultural norms. Lack of strict enforcement of anti-dowry laws. Social pressure and fear of stigma.",
    "control": "Solutions to Eradicate the Dowry System.                                Raise awareness about its negative impact.             Educate and empower women to stand against it.           Enforce strict penalties for demanding or giving dowry.",
    "conclusion": "The dowry system is a barrier to gender equality and societal progress. Collective efforts from individuals and authorities are essential to eliminate this practice and promote a fair society.",
    "image": "dowry.png"
  },
  { "id": 3, "title": "Drug Addiction: A Critical Concern",
    "subtitle": "", 
    "by": "Mujtaba alam", 
    "introduction": "Drug addiction is a chronic disorder characterized by the compulsive use of substances despite harmful consequences. It affects an individual’s brain and behavior, often leading to physical, emotional, and social damage. Substances like alcohol, nicotine, opioids, and illegal drugs such as heroin, cocaine, and methamphetamines are commonly abused.", 
    "cause": "1. Biological Factors: Genetics and brain chemistry play a significant role in susceptibility to addiction.  2. Environmental Influences: Peer pressure, exposure to drugs at an early age, and unstable family environments increase risk.                3. Psychological Issues: Stress, trauma, anxiety, and depression often push individuals toward substance use as a coping mechanism.                                  4. Accessibility and Curiosity: Easy availability of drugs and the curiosity to experiment often lead to addiction.", 
    "effects": "1. Physical Health: Prolonged drug use damages organs, weakens the immune system, and can lead to overdoses.                    2. Mental Health: Addiction exacerbates mental illnesses like depression, anxiety, and psychosis.                    3. Social Consequences: Relationships, careers, and reputations are often destroyed due to addictive behavior.                     4. Economic Burden: Addicts often face unemployment and financial instability, which burdens families and society.", 
    "control": "Overcoming Drug Addiction                     1. Rehabilitation Programs: Therapy, counseling, and support groups like Narcotics Anonymous help addicts recover.                             2. Medication: Certain drugs can help manage withdrawal symptoms and reduce cravings.                               3. Family Support: A stable and understanding family environment plays a crucial role in recovery.              4. Awareness and Education: Preventative programs in schools and communities can reduce the initiation of drug use.", 
    "conclusion": "Drug addiction is a complex issue that demands a comprehensive approach, including medical treatment, social support, and strong preventative measures. While recovery is challenging, with determination, proper resources, and societal support, individuals can regain control of their lives and break free from addiction’s grasp.",
    "image": "drug.jpg"
  },
  {
  "id": 4,
  "title": "Pollution in Delhi: A Growing Crisis",
  "subtitle": "",
  "by": "Mujtaba Alam",
  "introduction": "Delhi, the capital of India, faces an alarming pollution crisis that threatens the health and well-being of its citizens. The city frequently records some of the highest air pollution levels globally, especially during winter months, when smog blankets the city. Water pollution and waste mismanagement further exacerbate the environmental degradation. These issues result from a combination of human activities and climatic conditions, making Delhi a focal point for environmental concerns in India.",
  "cause": "Several factors contribute to the pollution in Delhi. Vehicular emissions from over 10 million vehicles are a major source of air pollution. Industrial discharges and construction activities add to the high levels of particulate matter in the air. Seasonal stubble burning in neighboring states such as Punjab and Haryana contributes significantly to the city's pollution, especially during winter. Inefficient waste disposal systems lead to water and soil contamination, while rapid urbanization and population growth strain existing infrastructure. The geographical location of Delhi, which traps pollutants due to low wind speeds during winter, further aggravates the problem.",
  "effects": "The effects of pollution in Delhi are severe and widespread. Air pollution causes respiratory issues, asthma, and other chronic illnesses. Prolonged exposure leads to cardiovascular diseases and reduced life expectancy. Children and the elderly are particularly vulnerable. Water pollution affects drinking water supplies, leading to gastrointestinal diseases and other health problems. The environment suffers as well, with damaged vegetation, loss of biodiversity, and changes in local climate patterns. Economic productivity also takes a hit due to health-related absences and increased healthcare costs.",
  "control": "Addressing Delhi's pollution requires a multi-pronged approach. Promoting public transport, cycling, and electric vehicles can significantly reduce vehicular emissions. Strict industrial regulations and dust control measures at construction sites are essential. To tackle stubble burning, alternative farming methods and technologies should be encouraged. Afforestation and green cover expansion can act as natural air purifiers. Awareness campaigns can educate citizens about reducing pollution through sustainable practices, like waste segregation and energy conservation. Government policies like the Odd-Even scheme for vehicles and bans on firecrackers during festivals are steps in the right direction, but more sustained efforts are needed.",
  "conclusion": "The pollution crisis in Delhi is a wake-up call for immediate action. It is imperative for individuals, communities, industries, and governments to collaborate in mitigating this environmental emergency. A cleaner, healthier Delhi is achievable through collective effort, innovative solutions, and strict adherence to environmental norms. The future of the city and its residents depends on the decisions made today.",
  "image": "delhi.jpg"
},
{ "id": 5, "title": "Ajmer Sharif Dargah:", "subtitle": "Current Situation and Rising Tensions", "by": "Mujtaba alam", "introduction": "The Ajmer Sharif Dargah, a prominent Sufi shrine in Rajasthan, is currently facing controversy following a petition filed by the Hindu Sena, claiming that the site contains remnants of a Shiv temple. The Rajasthan court has accepted the petition and scheduled a hearing for December 20, 2024. This development has sparked significant concern among the Muslim community, who regard the Dargah as a sacred site and have strongly opposed the claim. Leaders from the Sufi community, including Syed Nasruddin Chishti, have denounced the petition and called for preserving the Dargah's sanctity as a symbol of unity and spirituality.                                                     The case has intensified debates over religious sites in India, with many fearing that such disputes could disrupt communal harmony. Historically, the Ajmer Dargah has been a place of peace, attracting devotees from all faiths, and is a symbol of Sufi teachings on religious coexistence.                              Amid these developments, prominent voices from both communities have urged restraint and legal resolution without escalating tensions. The government and judiciary face mounting pressure to ensure peace while addressing the broader implications of such disputes.                               This controversy highlights the challenges of maintaining religious harmony in a diverse and multi-religious society.", 
"cause": "", 
"effects": "", 
"control": "", 
"conclusion": "", 
"image": "dargah.jpg" }
];

// Display articles on Home Page
if (window.location.pathname.includes("index.html")) {
  displayArticles(articles);
} else if (window.location.pathname.includes("view.html")) {
  displayArticleDetails(articles);
}

function displayArticles(articles) {
  const container = document.getElementById("articles-container");
  articles.forEach((article, index) => {
    const card = document.createElement("div");
    card.classList.add("article-card");
    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <h2>${article.title}</h2>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("currentArticleIndex", index);
      window.location.href = "view.html";
    });
    container.appendChild(card);
  });
}

// Display article details on View Page
function displayArticleDetails(articles) {
  const articleIndex = parseInt(localStorage.getItem("currentArticleIndex"), 10);
  currentArticleIndex = articleIndex;
  const article = articles[articleIndex];
  const details = document.getElementById("article-details");

  details.innerHTML = `
    <img src="${article.image}" alt="${article.title}">
    <h2>${article.title}</h2>
    <h4>${article.subtitle}</h4>
    <p1><strong>Written By:</strong> ${article.by}</p1>
    <p><strong>Introduction:</strong> ${article.introduction}</p>
    <p><strong>Cause:</strong> ${article.cause}</p>
    <p><strong>Effects:</strong> ${article.effects}</p>
    <p><strong>Control:</strong> ${article.control}</p>
    <p><strong>Conclusion:</strong> ${article.conclusion}</p>
  `;

  document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("prev-button").addEventListener("click", () => {
    if (currentArticleIndex > 0) {
      localStorage.setItem("currentArticleIndex", currentArticleIndex - 1);
      window.location.reload();
    }
  });

  document.getElementById("next-button").addEventListener("click", () => {
    if (currentArticleIndex < articles.length - 1) {
      localStorage.setItem("currentArticleIndex", currentArticleIndex + 1);
      window.location.reload();
    }
  });
}