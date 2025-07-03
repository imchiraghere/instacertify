export const HEADER_SLUG = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about-us",
  },
  {
    label: "Certification",
    href: "/certification",
    children: [
      {
        label: "America",
        href: "/certification/america",
        children: [
          { label: "Brazil", href: "/certification/america/brazil" },
          { label: "Mexico", href: "/certification/america/mexico" },
          {
            label: "United States & Canada",
            href: "/certification/america/us-canada",
          },
        ],
      },
      {
        label: "Asia Pacific",
        href: "/certification/asia-pacific",
        children: [
          { label: "Asean", href: "/certification/asia-pacific/asean" },
          {
            label: "Australia/New Zealand",
            href: "/certification/asia-pacific/anz",
          },
          { label: "China", href: "/certification/asia-pacific/china" },
          {
            label: "India",
            href: "/certification/asia-pacific/india",
            children: [
              {
                label: "ATEX/PESO",
                href: "/certification/asia-pacific/india/atex",
              },
              {
                label: "Automotive Industry Standards (AIS)",
                href: "/certification/asia-pacific/india/ais",
              },
              {
                label: "Bureau of Indian Standards (BIS)",
                href: "/certification/asia-pacific/india/bis",
                children: [
                  {
                    label: "BIS CRS",
                    href: "/certification/asia-pacific/india/bis/crs",
                  },
                  {
                    label: "ISI Mark",
                    href: "/certification/asia-pacific/india/bis/isi",
                  },
                  {
                    label: "Scheme X",
                    href: "/certification/asia-pacific/india/bis/scheme-x",
                  },
                ],
              },
              {
                label: "EPR",
                href: "/certification/asia-pacific/india/epr",
                children: [
                  {
                    label: "Battery Waste Management",
                    href: "/certification/asia-pacific/india/epr/battery",
                  },
                  {
                    label: "E-waste Management",
                    href: "/certification/asia-pacific/india/epr/e-waste",
                  },
                  {
                    label: "EPR Tyre",
                    href: "/certification/asia-pacific/india/epr/tyre",
                  },
                  {
                    label: "Plastic Waste Management",
                    href: "/certification/asia-pacific/india/epr/plastic",
                  },
                ],
              },
              {
                label: "Food & D",
                href: "/certification/asia-pacific/india/food-d",
                children: [
                  {
                    label: "CDSCO Cosmetics",
                    href: "/certification/asia-pacific/india/food-d/cdsco-cosmetics",
                  },
                  {
                    label: "CDSCO Medical Care",
                    href: "/certification/asia-pacific/india/food-d/cdsco-medical",
                  },
                  {
                    label: "FSSAI",
                    href: "/certification/asia-pacific/india/food-d/fssai",
                  },
                  {
                    label: "FSSC 22000",
                    href: "/certification/asia-pacific/india/food-d/fssc",
                  },
                ],
              },
              {
                label: "Legal Metrology",
                href: "/certification/asia-pacific/india/legal-metrology",
                children: [
                  {
                    label: "LMPC",
                    href: "/certification/asia-pacific/india/legal-metrology/lmpc",
                  },
                  {
                    label: "Type Approve",
                    href: "/certification/asia-pacific/india/legal-metrology/type-approve",
                  },
                ],
              },
              {
                label: "Telecom",
                href: "/certification/asia-pacific/india/telecom",
              },
            ],
          },
          { label: "Japan", href: "/certification/asia-pacific/japan" },
          {
            label: "South Korea",
            href: "/certification/asia-pacific/south-korea",
          },
          { label: "Taiwan", href: "/certification/asia-pacific/taiwan" },
        ],
      },
      {
        label: "EMEA",
        href: "/certification/emea",
        children: [
          {
            label: "Africa",
            href: "/certification/emea/africa",
            children: [
              { label: "Egypt", href: "/certification/emea/africa/egypt" },
              { label: "Kenya/KEBS", href: "/certification/emea/africa/kenya" },
              {
                label: "South Africa/CASSA",
                href: "/certification/emea/africa/south-africa/cassa",
              },
              {
                label: "South Africa/NRCS",
                href: "/certification/emea/africa/south-africa/nrcs",
              },
              {
                label: "South Africa/SABS",
                href: "/certification/emea/africa/south-africa/sabs",
              },
            ],
          },
          {
            label: "Eurasia",
            href: "/certification/emea/eurasia",
          },
          {
            label: "Europe",
            href: "/certification/emea/europe",
          },
          {
            label: "Middle East",
            href: "/certification/emea/middle-east",
            children: [
              {
                label: "GMARK",
                href: "/certification/emea/middle-east/gmark",
                children: [
                  {
                    label: "GMAR LVD",
                    href: "/certification/emea/middle-east/gmark/gmar-lvd",
                  },
                  {
                    label: "GMAR Toy",
                    href: "/certification/emea/middle-east/gmark/gmar-toy",
                  },
                ],
              },
              {
                label: "SASO SABER",
                href: "/certification/emea/middle-east/saso-saber",
              },
              {
                label: "SASO/IECEE Registration",
                href: "/certification/emea/middle-east/saso-ieee",
              },
              {
                label: "SFDA",
                href: "/certification/emea/middle-east/sfda",
                children: [
                  {
                    label: "Cosmetic",
                    href: "/certification/emea/middle-east/sfda/cosmetic",
                  },
                  {
                    label: "Food",
                    href: "/certification/emea/middle-east/sfda/food",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Global",
        href: "/certification/global",
        children: [
          {
            label: "IMEI Registration",
            href: "/certification/global/imei-registration",
          },
        ],
      },
    ],
  },

  {
    label: "Product Testing",
    href: "/",
    children: [
      { label: "Chemicals", href: "/blog-1.html" },
      {
        label: "Electronics & Electricals",
        href: "/blog-1.html",
        children: [
          { label: "EMC Testing", href: "/emc" },
          { label: "Environmental Testing", href: "/blog-1.html" },
          { label: "Product Safety Testing", href: "/blog-1.html" },
          { label: "Radio Testing", href: "/blog-1.html" },
        ],
      },
      { label: "Food & Water", href: "/blog-1.html" },
      { label: "Lightning", href: "/blog-1.html" },
      { label: "MSDS", href: "/blog-1.html" },
      { label: "REACH", href: "/blog-1.html" },
      { label: "ROHS", href: "/blog-1.html" },
    ],
  },
  {
    label: "Resources",
    href: "/",
    children: [
      {
        label: "Industry Events",
        href: "/about-1.html",
      },
      {
        label: "News",
        href: "/about-2.html",
      },
      {
        label: "Standards",
        href: "/about-2.html",
      },
    ],
  },
];

export const PAGE_SLUG = {
  HOME: "/",
  ABOUT_US: "/about-us",
  CONTACT_US: "/contact-us",
  SITE_MAP: "/site-map",
  INSTA: "https://www.instagram.com/",
  FACEBOOK: "https://www.facebook.com/",
  YOUTUBE: "https://www.youtube.com/",
  TWITTER: "https://twitter.com/",
};

export const LOGO_ITEMS = [
  { src: "/assets/images/partner-logo/p1.png", alt: "partner logo 1" },
  { src: "/assets/images/partner-logo/p2.png", alt: "partner logo 2" },
  { src: "/assets/images/partner-logo/p3.png", alt: "partner logo 3" },
  { src: "/assets/images/partner-logo/p4.png", alt: "partner logo 4" },
  {
    src: "/assets/images/partner-logo/p5.png",
    alt: "partner logo 5",
    extraClass: "md:col-start-2 lg:col-start-auto",
  },
  {
    src: "/assets/images/partner-logo/p6.png",
    alt: "partner logo 6",
    extraClass: "md:col-start-3 lg:col-start-auto",
  },
];

export const TABDATA = [
  {
    id: "toys",
    label: "Toys",
    image: "/assets/images/thumbnail-1.png",
    bgClass: "bg-bg-2",
    heading: "Optimize and scale, easy to start",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: "software",
    label: "Software",
    image: "/assets/images/thumbnail-3.png",
    bgClass: "bg-bg-3",
    heading: "Design Studios That Everyone Should Know",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: "polymers-platics",
    label: "Polymers & Platics",
    image: "/assets/images/thumbnail-4.png",
    bgClass: "bg-bg-4",
    heading: "We can blend colors multiple ways",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: "metal-alloy",
    label: "Metal & Alloys",
    image: "/assets/images/thumbnail-5.png",
    bgClass: "bg-bg-5",
    heading: "Choose The Best Plan That's For You",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: "electronic",
    label: "Electronic",
    image: "/assets/images/thumbnail-19.png",
    bgClass: "bg-bg-6",
    heading: "Subscribe our newsletter to get gift",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: "cosmetic",
    label: "Cosmetics",
    image: "/assets/images/thumbnail-22.png",
    bgClass: "bg-bg-7",
    heading: "Ready to get started? Create and Account",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

export const STRATEGY_DATA = [
  {
    icon: "/assets/images/icons/icon-flower.svg",
    iconWhite: "/assets/images/icons/icon-flower-white.svg",
    bgClass: "bg-bg-5",
    title: "Certifications",
    description:
      "We offer a wide range of certification services to help businesses comply with industry standards and regulations.",
  },
  {
    icon: "/assets/images/icons/icon-map.svg",
    iconWhite: "/assets/images/icons/icon-map-white.svg",
    bgClass: "bg-bg-9",
    title: "Testing",
    description:
      "Our state-of-the-art testing facilities and expert team are equipped to perform rigorous testing for a variety of products.",
  },
  {
    icon: "/assets/images/icons/icon-pine.svg",
    iconWhite: "/assets/images/icons/icon-pine-white.svg",
    bgClass: "bg-bg-2",
    title: "Equipment",
    description:
      "We provide advanced tools and machinery to boost operational efficiency and ensure businesses meet top safety and performance standards.",
  },
];

export const BELIEVE_FEATURES = [
  {
    title: "Comprehensive Compliance Solutions",
    description: "The latest design trends meet hand-crafted templates.",
    icon: "/assets/images/icons/icon-leaf.svg",
  },
  {
    title: "Expertise in Certification Services",
    description: "The latest design trends meet hand-crafted templates.",
    icon: "/assets/images/icons/icon-leaf.svg",
  },
  {
    title: "Reliable Compliance Consulting",
    description: "The latest design trends meet hand-crafted templates.",
    icon: "/assets/images/icons/icon-leaf.svg",
  },
  {
    title: "Efficient Certification Advisory",
    description: "The latest design trends meet hand-crafted templates.",
    icon: "/assets/images/icons/icon-leaf.svg",
  },
];

export const OFFER_DATA = [
  {
    icon: "/assets/images/icons/icon-trees.svg",
    title: "Compliances",
    desc: "Making you product compliance ready.",
  },
  {
    icon: "/assets/images/icons/icon-sun.svg",
    title: "Registration",
    desc: "Covers all the registration that you need.",
  },
  {
    icon: "/assets/images/icons/icon-hat.svg",
    title: "International",
    desc: "Take your product around the globelly.",
  },
  {
    icon: "/assets/images/icons/icon-sun.svg",
    title: "Strategic Consulting",
    desc: "One make creepeth, man bearing theira firmament.",
  },
  {
    icon: "/assets/images/icons/icon-hat.svg",
    title: "Lab Testing",
    desc: "Simply all the test your products needs.",
  },
  {
    icon: "/assets/images/icons/icon-trees.svg",
    title: "Market research",
    desc: "One make creepeth, man bearing theira firmament.",
  },
];

export const HAPPY_CUSTOMER_DATA = [
  {
    image: "/assets/images/avatar-1.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-4",
  },
  {
    image: "/assets/images/avatar-2.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-6",
  },
  {
    image: "/assets/images/avatar-3.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-10",
  },
  {
    image: "/assets/images/avatar-4.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-9",
  },
  {
    image: "/assets/images/avatar-5.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-4",
  },
  {
    image: "/assets/images/avatar-6.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-6",
  },
  {
    image: "/assets/images/avatar-7.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-10",
  },
  {
    image: "/assets/images/avatar-8.png",
    name: "Wade Warren",
    company: "Louis Vuitton",
    message:
      "Even factoring differences in body weight between children and adults into account.",
    borderClass: "border-bg-9",
  },
];

export const NEWS_DATA = [
  {
    category: "company",
    title: "POWER ON 2025",
    image: "/assets/images/L1.webp",
    bgClass: "bg-bg-9",
    link: "/",
  },
  {
    category: "Marketing Event",
    title: "Footwear India Expo",
    image: "/assets/images/L2.webp",
    bgClass: "bg-bg-6",
    link: "/",
  },
  {
    category: "Customer Services",
    title: "RenewX 2025",
    image: "/assets/images/L3.webp",
    bgClass: "bg-bg-4",
    link: "/",
  },
];

export const PLAN_DATA = [
  {
    price: "$35",
    period: "/month",
    type: "Standard",
    description: "All the basics for businesses that are just getting started.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close"],
    billing: "monthly",
  },
  {
    price: "$89",
    period: "/month",
    type: "Essentials",
    description: "All the basics for businesses that are just getting started.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close", "close"],
    billing: "monthly",
  },
  {
    price: "$125",
    period: "/month",
    type: "Premium",
    description: "Avanced features for pros who need more customization.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close"],
    billing: "monthly",
  },
  {
    price: "$420",
    period: "/year",
    type: "Standard",
    description: "All the basics for businesses that are just getting started.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close"],
    billing: "annually",
  },
  {
    price: "$1068",
    period: "/year",
    type: "Essentials",
    description: "All the basics for businesses that are just getting started.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close", "close"],
    billing: "annually",
  },
  {
    price: "$1500",
    period: "/year",
    type: "Premium",
    description: "Avanced features for pros who need more customization.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
    ],
    featureIcons: ["tick", "tick", "close"],
    billing: "annually",
  },
];

export const FOOTER_SERVICES = [
  {
    name: "BIS (ISI MARK) for Foreign Manufacturers",
    url: "/bis-isi-mark-foreign-manufacturers",
  },
  {
    name: "BIS (ISI Mark) for Domestic Product Certification",
    url: "/bis-isi-mark-domestic-certification",
  },
  {
    name: "BIS (CRS Mark) for Compulsory Registration Scheme",
    url: "/bis-crs-compulsory-registration",
  },
  {
    name: "EPR Plastic Waste",
    url: "/epr-plastic-waste",
  },
  {
    name: "EPR E-Waste",
    url: "/epr-e-waste",
  },
  {
    name: "EPR Battery Waste",
    url: "/epr-battery-waste",
  },
  {
    name: "EPR for Used Oil",
    url: "/epr-used-oil",
  },
  {
    name: "EPR for Tyre",
    url: "/epr-tyre",
  },
  {
    name: "Peso Certification",
    url: "/peso-certification",
  },
  {
    name: "NSIC of MSME",
    url: "/nsic-msme",
  },
  {
    name: "STQC Certification",
    url: "/stqc-certification",
  },
  {
    name: "FSSAI Registration",
    url: "/fssai-registration",
  },
];

export const FOOTER_INDUSTRIES = [
  {
    name: "Electronic and Electricity",
    url: "/categories/electronic-electricity",
  },
  { name: "Chemicals", url: "/categories/chemicals" },
  { name: "Foods", url: "/categories/foods" },
  { name: "Toys", url: "/categories/toys" },
  { name: "Metal and Alloys", url: "/categories/metal-alloys" },
  { name: "Polymers and Plastics", url: "/categories/polymers-plastics" },
  {
    name: "Construction and Engineering",
    url: "/categories/construction-engineering",
  },
  { name: "Wireless", url: "/categories/wireless" },
  { name: "Cosmetics", url: "/categories/cosmetics" },
  { name: "Software", url: "/categories/software" },
  { name: "Environment", url: "/categories/environment" },
];

export const LOCATION_ADDRESS = [
  {
    title: "Registered",
    address:
      "A-34, Sector 63 A, Noida, Gautam Buddh Nagar, Uttar Pradesh 201301 Delhi NCR  -India",
  },
  {
    title: "Corporate",
    address: "35 Basement, Basant Lok, Vasant Vihar, Delhi - 110054",
  },
  {
    title: "Gujarat",
    address:
      "L228,Lilleria Paramount, Tulshi Dham Rd, Next to city mall, Maninagar Society, Manjalpur, Vadodara, Gujarat 390010",
  },
  {
    title: "Maharashtra",
    address:
      "1st Floor, Abha Building, Valipeer Road Railway Station, Bhanunagar Kalyan(West), Bhoiwada, Kalyan, Maharashtra 421301",
  },
];
