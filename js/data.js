const PORTFOLIO = {
  personal: {
    name:       "Minhajur Rahman",
    initials:   "MR",
    photo:      "{css,js,assets}/assets/profile.jpeg",
    role:       "MSc · Mitacs Accelerate Fellow",
    university: "UPEI · Charlottetown, PEI",
    location:   "Charlottetown, PEI, Canada",
    status:     "",
    email:      "minhajurrahman@upei.ca",
    website:    "minhajur.net",
    github:     "github.com/Minhaj9800",
    linkedin:   "linkedin.com/in/minhajur-rahman-06852919a",
    scholar:    "scholar.google.com/citations?user=SD4c3scAAAAJ&hl=en",
    cv:         "assets/cv.pdf",
  },

  about: {
    greeting: "Applied Machine Learning Researcher",
    taglines: [
      "Designing scalable machine learning systems at the intersection of time series analysis, clustering, and knowledge distillation.",
    ],
    paragraphs: [
      `I'm an <strong>Applied Machine Learning researcher</strong> based in Canada, 
      currently pursuing an MSc at UPEI as a <strong>Mitacs Accelerate Fellow</strong>. 
      My research focuses on deep temporal models for sequential data — working across 
      <strong>time series analysis, representation learning, and clustering</strong> — 
      with a practical emphasis on <strong>knowledge distillation</strong> and building 
      systems that stay efficient under real-world constraints.`,
  
      `Building on a <strong>First Class Honours BSc</strong> from UPEI, I have published 
      in <strong>IEEE, Springer, and MDPI</strong>, with conference presentations going 
      back to my undergraduate years. Alongside my research, I work as a 
      <strong>Solutions Analyst</strong> at UPEI, focused on <strong>Data Engineering</strong> and 
      <strong>Enterprise Data Infrastructure</strong> — work that keeps my research grounded in what 
      actually runs in production.`,
    ],
    chips: [
      { icon: "ti-cpu",             label: "Applied Machine Learning" },
      { icon: "ti-brain",           label: "Deep Learning"            },
      { icon: "ti-circles-relation",label: "Clustering"               },
      { icon: "ti-chart-line",      label: "Time Series Analysis"     },
      { icon: "ti-topology-star",   label: "Distributed Computing"    },
    ],
  },

  experience: [
    {
      role:    "Applied Machine Learning Researcher",
      org:     "UPEI · Mitacs Accelerate Fellow",
      date:    "Jan 2026 – Present",
      desc:    "LSTM, GRU, and Transformer benchmarking for auction price prediction. Knowledge distillation for edge deployment on resource-constrained devices.",
      current: true,   // true = solid blue dot, false = lighter dot
    },
    {
      role:    "Solutions Analyst",
      org:     "IT Systems & Services, UPEI",
      date:    "Oct 2023 – Present",
      desc: `Production ETL pipelines, Star Schema data modelling, and enterprise data infrastructure across ERP and CRM systems. Maintains institutional data dictionary and data governance tooling.`,
      current: true,
    },
    {
      role:    "Reporting Analyst",
      org:     "Business Intelligence, Veterans Affairs Canada",
      date:    "Jul – Oct 2023",
      desc:    "IBM Cognos reporting and program data analysis for the Government of Canada.",
      current: false,
    },
    {
      role:    "Software Developer",
      org:     "Maximus Canada, Deltaware Division",
      date:    "Jul 2022 – May 2023",
      desc:    "Node.js, Hapi.js, Angular — shipped features, maintained RESTful APIs, SQL and XML data-loading configs.",
      current: false,
    },
    {
      role:    "Developer (AI/ML Team)",
      org:     "Thinking Big Inc.",
      date:    "Jan – Jun 2022",
      desc:    "Built NLP API in ASP.NET Core 5.0, implemented PostgreSQL with Marten, wireframing and Agile web app development.",
      current: false,
    },
  ],

  publications: [
    {
      year:   "2026",
      title:  "Artificial Intelligence-Based Models for Predicting Disease Course Risk Using Patient Data",
      venue:  "Computers, MDPI · Chowdhury, Bari, Hasan, Hossain, Rahman",
      doi:    "https://doi.org/10.3390/computers15020113",
      doiLabel: "doi.org/10.3390/computers15020113",
    },
    {
      year:   "2024",
      title:  "Implementation of Dew-Inspired Matrix-Mesh Communication Protocol",
      venue:  "Dew Computing, Springer · Rahman, Wang",
      doi:    "https://doi.org/10.1007/978-981-99-4590-0_5",
      doiLabel: "doi.org/10.1007/978-981-99-4590-0_5",
    },
    {
      year:   "2021",
      title:  "Implementation of Dewblock Clients on a Mobile Platform",
      venue:  "IEEE COMPSAC · Rahman, Wang",
      doi:    "https://doi.org/10.1109/COMPSAC51774.2021.00272",
      doiLabel: "doi.org/10.1109/COMPSAC51774.2021.00272",
    },
  ],

  conferences: [
    {
      icon:   "ti-presentation",
      name:   "IEEE 45th Annual Computers, Software & Applications Conference",
      paper:  "\"Implementation of Dewblock Client on Mobile Platform\"",
      type:   "Paper presentation",
      tags:   ["July 2021", "Online", "IEEE COMPSAC"],
    },
    {
      icon:   "ti-school",
      name:   "Science Atlantic Mathematics, Statistics & Computer Science Conference",
      paper:  "\"DewblockApp: A Blockchain System Based on Dew Computing\"",
      type:   "Paper presentation",
      tags:   ["October 2020", "Online", "Undergraduate"],
    },
  ],

  certificates: [
    {
      icon:    "ti-brain",
      name:    "Applied Data Analytics and Machine Learning with Python",
      issuer:  "Acenet Microcredential",
      year:    "2026",
      status:  "Completed",
    },
    {
      icon:    "ti-brain",
      name:    "Machine Learning Specialization",
      issuer:  "DeepLearning.AI | Stanford University",
      year:    "2026",
      status:  "in-progress",
    },
  ],
  teaching: [
    {
      icon:   "ti-pencil",
      role:   "Student Marker",
      course: "Design & Analysis of Algorithms · 50 students",
      meta:   "UPEI · Sep 2021 – Present",
    },
    {
      icon:   "ti-pencil",
      role:   "Student Marker",
      course: "Web Programming & Database Systems · 140 students",
      meta:   "UPEI · Jan – Apr 2021",
    },
    {
      icon:   "ti-device-desktop",
      role:   "Lab Assistant & Teaching Assistant",
      course: "Intro CS — Python & Java · 150 students",
      meta:   "UPEI · Sep – Dec 2020",
    },
    {
      icon:   "ti-terminal",
      role:   "Student Marker",
      course: "System Programming (Unix/Linux) · 80 students",
      meta:   "UPEI · Sep – Dec 2020",
    },
  ],
  awards: [
    { icon: "ti-bulb", name:  "Mitacs Accelerate Fellowship",           meta: "Mitacs ·May 2026" },
    { icon: "ti-medal", name: "Graduate Student Fellowship in Science",  meta: "UPEI · January 2026" },
    { icon: "ti-star",  name: "Academic Excellence Award",               meta: "UPEI · September 2021" },
    { icon: "ti-star",  name: "Academic Excellence Award",               meta: "UPEI · September 2020" },
    { icon: "ti-star",  name: "Academic Excellence Award",               meta: "UPEI · September 2019" },
    { icon: "ti-globe", name: "International Entrance Scholarship",      meta: "UPEI · September 2017" },
  ],

  skills: [
    { group: "Languages",  items: ["Python", "Java", "SQL", "R", "JavaScript", "C#", "PHP"] },
    { group: "ML & data",  items: ["PyTorch", "scikit-learn", "Pentaho", "IBM Cognos", "PostgreSQL", "MSSQL"] },
    { group: "Web & infra",items: ["Node.js", "Vue.js", "Docker", "Git", "Linux", "ASP.NET"] },
    { group: "BI & ERP",   items: ["Ellucian CRM", "Colleague ERP", "OpenMetaData", "SchemaSpy"] },
  ],


};
