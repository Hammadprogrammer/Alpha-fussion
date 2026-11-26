import {
  Activity,
  Award,
  Bell,
  Brain,
  Captions,
  Clapperboard,
  CreditCard,
  Film,
  Gem,
  Images,
  Layers,
  Megaphone,
  MonitorPlay,
  Package,
  Printer,
  Scissors,
  Share2,
  SunMedium,
  WandSparkles,
  Database,
  GitBranch,
  HardDrive,
  MessageSquareText,
  Plug,
  Puzzle,
  RefreshCw,
  Search,
  Store,
  Wallet,
  WifiOff,
  Workflow,
  Wrench,
  BadgeCheck,
  Bot,
  Briefcase,
  Bug,
  ChartColumn,
  Clock,
  Cloud,
  CodeXml,
  Gauge,
  Globe,
  Handshake,
  Headphones,
  LayoutDashboard,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Alpha Fussion",
  tagline: "Innovating Today, Building Tomorrow",
  email: "info@alphafusionltd.com",
  phone: "+44 7367 066235",
  address: "State Life Building, Lahore, Pakistan",
  city: "Lahore, Pakistan",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  heroImage?: string;
  heroText?: string;
  heroAspect?: string;
  aboutImage?: string;
  tint: string;
  highlights: string[];
  features: { icon: LucideIcon; title: string; text: string }[];
  techs: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Modern, scalable and SEO-friendly websites with Next.js, React and more.",
    description:
      "Every business is unique, and so is every website we build. Using Next.js, React and Node.js, we craft business sites, landing pages, eCommerce stores and custom web apps that load fast, rank well and stay secure, with an easy dashboard to manage your content.",
    icon: CodeXml,
    image: "/web1.png",
    heroImage: "/web1.png",
    aboutImage: "/web2.png",
    heroText:
      "We design and develop modern, high-performance websites that help your business stand out online. Built with Next.js, React and Tailwind CSS, every site is fully responsive, SEO-friendly and optimized for speed, giving you a secure, scalable platform that turns visitors into loyal customers.",
    tint: "bg-brand-100 text-brand-600",
    highlights: ["Responsive & SEO-Friendly Design", "Fast Performance & Top Security", "Scalable for Future Growth"],
    features: [
      { icon: Zap, title: "Lightning Fast", text: "Optimized for speed and performance." },
      { icon: TrendingUp, title: "SEO Optimized", text: "Get higher rankings on search engines." },
      { icon: ShieldCheck, title: "Secure & Reliable", text: "Your data and business are always protected." },
      { icon: MonitorSmartphone, title: "Fully Responsive", text: "Looks perfect on all devices." },
      { icon: ShoppingCart, title: "eCommerce Ready", text: "Sell online with secure payments and carts." },
      { icon: LayoutDashboard, title: "Easy CMS", text: "Update your content without any coding." },
      { icon: ChartColumn, title: "Analytics Built-In", text: "Track visitors and conversions in real time." },
      { icon: Headphones, title: "Ongoing Support", text: "Maintenance and updates after launch." },
    ],
    techs: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", ".NET", "WordPress", "Tailwind CSS"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Powerful and user-friendly apps for iOS & Android.",
    description:
      "Your business deserves an app built around your customers, not a generic template. Using React Native and Flutter, we build custom iOS and Android apps with secure logins, real-time data, push notifications and payments, and handle store publishing and support.",
    icon: Smartphone,
    image: "/mob1.png",
    heroImage: "/mob1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/mob2.png",
    heroText:
      "We build powerful, user-friendly mobile apps that put your business in your customers' pockets, with native-like performance, intuitive designs and offline support.",
    tint: "bg-indigo-100 text-indigo-600",
    highlights: ["iOS & Android from one codebase", "Smooth native-like performance", "Push notifications & offline support"],
    features: [
      { icon: Zap, title: "Native Speed", text: "Fluid 60fps experiences on every device." },
      { icon: Palette, title: "Beautiful UI", text: "Pixel-perfect, intuitive designs." },
      { icon: ShieldCheck, title: "Secure Data", text: "Encrypted storage and secure APIs." },
      { icon: Cloud, title: "Cloud Synced", text: "Real-time sync across all devices." },
      { icon: Bell, title: "Push Notifications", text: "Engage users with timely alerts." },
      { icon: WifiOff, title: "Offline Support", text: "Works smoothly even without internet." },
      { icon: CreditCard, title: "In-App Payments", text: "Secure checkout and subscriptions." },
      { icon: Store, title: "Store Publishing", text: "We launch on App Store & Google Play." },
    ],
    techs: ["React Native", "Flutter", "TypeScript", "Firebase", "Node.js", "REST APIs"],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    short: "Scalable and secure backend systems with .NET, Node.js & more.",
    description:
      "Every business runs on data, and a strong backend keeps it secure and always available. Using .NET, Node.js, Python, PostgreSQL and MongoDB, we build custom APIs, admin panels and integrations with clean code and strong security, then scale them as you grow.",
    icon: Server,
    image: "/bak1.png",
    heroImage: "/bak1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/bak2.png",
    heroText:
      "We build secure, scalable and high-performance backend systems that power your websites, apps and operations. From REST and GraphQL APIs to databases and microservices, we engineer reliable solutions with .NET, Node.js and Python that handle thousands of users without slowing down.",
    tint: "bg-emerald-100 text-emerald-600",
    highlights: ["RESTful & GraphQL APIs", "Optimized database architecture", "Microservices ready"],
    features: [
      { icon: Gauge, title: "High Throughput", text: "Handle millions of requests with ease." },
      { icon: ShieldCheck, title: "Secure by Design", text: "Auth, encryption and best practices." },
      { icon: Server, title: "Scalable", text: "Architected to grow with you." },
      { icon: BadgeCheck, title: "Well Tested", text: "Automated tests for peace of mind." },
      { icon: Database, title: "Optimized Databases", text: "Fast queries and clean data models." },
      { icon: Plug, title: "API Integrations", text: "Connect payments and third-party tools." },
      { icon: LayoutDashboard, title: "Admin Panels", text: "Manage your data with ease." },
      { icon: Activity, title: "24/7 Monitoring", text: "Uptime alerts and performance tracking." },
    ],
    techs: [".NET", "Node.js", "C#", "Python", "SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    slug: "wordpress-solutions",
    title: "WordPress Solutions",
    short: "Custom WordPress websites, themes and plugins.",
    description:
      "No two businesses are the same, so we never rely on cookie-cutter templates. We build custom WordPress sites and WooCommerce stores with unique themes and tailored plugins, plus an easy dashboard, regular updates and backups to keep your site secure.",
    icon: Globe,
    image: "/wrod1.png",
    heroImage: "/wrod1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/word2.png",
    heroText:
      "We create beautiful, fast and easy-to-manage WordPress websites that help your business grow online. From custom themes and plugins to full WooCommerce stores, every site is responsive, SEO-optimized and secure, with a simple dashboard to update content in minutes.",
    tint: "bg-sky-100 text-sky-600",
    highlights: ["Custom themes & plugins", "WooCommerce stores", "Easy content management"],
    features: [
      { icon: Palette, title: "Custom Themes", text: "Unique designs tailored to your brand." },
      { icon: Zap, title: "Fast Loading", text: "Optimized for Core Web Vitals." },
      { icon: ShieldCheck, title: "Hardened Security", text: "Protected against common threats." },
      { icon: TrendingUp, title: "SEO Ready", text: "Built for search visibility." },
      { icon: ShoppingCart, title: "WooCommerce Stores", text: "Sell products with secure payments." },
      { icon: Puzzle, title: "Custom Plugins", text: "Features built exactly for your needs." },
      { icon: MonitorSmartphone, title: "Fully Responsive", text: "Perfect on mobile, tablet and desktop." },
      { icon: Wrench, title: "Care & Maintenance", text: "Updates, backups and security checks." },
    ],
    techs: ["WordPress", "PHP", "WooCommerce", "Elementor", "MySQL"],
  },
  {
    slug: "ai-integrations",
    title: "AI & Integrations",
    short: "Integrate AI tools and build smart solutions.",
    description:
      "Build smart and automate more with custom AI code for your business. We combine modern frameworks with OpenAI and Gemini to build intelligent dashboards and automated workflows.",
    icon: Bot,
    image: "/ai1.png",
    heroImage: "/ai1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/ai2.png",
    heroText:
      "Smart technology, real business impact. We integrate ChatGPT, Gemini and DeepSeek into your websites and apps, building chatbots and virtual assistants that support customers 24/7, automating repetitive tasks and delivering AI solutions that save time and drive growth.",
    tint: "bg-violet-100 text-violet-600",
    highlights: ["AI Integrations (OpenAI, Gemini)", "Custom Features & Logic", "Automation & Workflows", "Scalable & Secure Code"],
    features: [
      { icon: Sparkles, title: "Smart Features", text: "AI that understands your users." },
      { icon: Zap, title: "Automation", text: "Eliminate repetitive manual work." },
      { icon: ShieldCheck, title: "Private & Safe", text: "Responsible, secure AI usage." },
      { icon: TrendingUp, title: "Measurable ROI", text: "Track the impact of every feature." },
      { icon: MessageSquareText, title: "AI Chatbots", text: "24/7 assistants that answer customers." },
      { icon: Search, title: "Smart Search", text: "Find content instantly with AI search." },
      { icon: Workflow, title: "Workflow Integration", text: "Connect AI with your existing tools." },
      { icon: Brain, title: "Custom AI Models", text: "Trained on your business data." },
    ],
    techs: ["OpenAI", "Gemini", "DeepSeek", "Python", "Node.js", "Next.js", "React", ".NET", "LangChain"],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    short: "Deploy and scale your projects with Vercel, AWS & Cloudflare.",
    description:
      "Your app is only as good as the infrastructure behind it. We set up CI/CD pipelines, Docker deployments and scalable hosting on Vercel, AWS and Cloudflare, with SSL, backups and 24/7 monitoring so your apps stay online, fast and cost-efficient.",
    icon: Cloud,
    image: "/cl1.png",
    heroImage: "/cl1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/cl2.png",
    heroText:
      "We deploy, scale and manage your applications in the cloud so they stay fast, secure and always online. From automated CI/CD pipelines to auto-scaling infrastructure on Vercel, AWS and Cloudflare, we ship updates in minutes with zero downtime and costs that stay under control.",
    tint: "bg-teal-100 text-teal-600",
    highlights: ["Automated CI/CD pipelines", "99.9% uptime monitoring", "Cost-optimized infrastructure"],
    features: [
      { icon: Rocket, title: "Fast Deploys", text: "Ship updates in minutes." },
      { icon: Gauge, title: "Monitoring", text: "Real-time alerts and metrics." },
      { icon: ShieldCheck, title: "Secure Infra", text: "Firewalls, SSL and backups." },
      { icon: Cloud, title: "Auto Scaling", text: "Handle traffic spikes effortlessly." },
      { icon: GitBranch, title: "CI/CD Pipelines", text: "Automated testing and deployments." },
      { icon: HardDrive, title: "Backups & Recovery", text: "Your data is always safe and restorable." },
      { icon: Wallet, title: "Cost Optimized", text: "Pay only for what you really use." },
      { icon: RefreshCw, title: "Zero Downtime", text: "Seamless updates without interruptions." },
    ],
    techs: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "Professional video editing for ads, reels, YouTube and brand stories.",
    description:
      "Great videos tell your story in seconds. We turn raw footage into polished promos, social reels, YouTube videos and corporate films with clean cuts, color grading, motion graphics, sound design and captions, all delivered in the right format for every platform.",
    icon: Clapperboard,
    image: "/v1.png",
    heroImage: "/v1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/v2.png",
    heroText:
      "We create eye-catching videos that grab attention and grow your brand. From social media reels and YouTube content to ads and corporate films, our editors add smooth transitions, motion graphics and cinematic color to make every second count.",
    tint: "bg-rose-100 text-rose-600",
    highlights: ["Reels, Ads & YouTube Videos", "Color Grading & Motion Graphics", "Fast Turnaround & Revisions"],
    features: [
      { icon: Scissors, title: "Pro Editing", text: "Clean cuts and smooth storytelling." },
      { icon: SunMedium, title: "Color Grading", text: "Cinematic looks that match your brand." },
      { icon: WandSparkles, title: "Motion Graphics", text: "Animated titles, logos and effects." },
      { icon: Headphones, title: "Sound Design", text: "Music, voice-over and audio cleanup." },
      { icon: Captions, title: "Subtitles", text: "Accurate captions for more reach." },
      { icon: Film, title: "Short-Form Reels", text: "Scroll-stopping TikTok and Instagram reels." },
      { icon: MonitorPlay, title: "YouTube Ready", text: "Thumbnails, intros and optimized exports." },
      { icon: Share2, title: "Every Platform", text: "Delivered in the right size for each channel." },
    ],
    techs: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "CapCut"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Logos, branding, social media posts and print designs that stand out.",
    description:
      "Strong visuals build strong brands. We design memorable logos, complete brand identities, social media posts, banners, brochures and packaging that match your style and speak to your audience, delivered in print-ready and web-ready files for every use.",
    icon: PenTool,
    image: "/g1.png",
    heroImage: "/g1.png",
    heroAspect: "aspect-[1672/941]",
    aboutImage: "/g2.png",
    heroText:
      "We create creative, eye-catching designs that make your brand unforgettable. From logos and brand identity to social media graphics, marketing materials and UI visuals, our designers turn your ideas into clean, modern artwork that connects with your customers.",
    tint: "bg-amber-100 text-amber-600",
    highlights: ["Logo & Brand Identity", "Social Media & Marketing Designs", "Print & Packaging Ready Files"],
    features: [
      { icon: Gem, title: "Logo Design", text: "Unique logos that define your brand." },
      { icon: Palette, title: "Brand Identity", text: "Colors, fonts and guidelines that fit you." },
      { icon: Images, title: "Social Media Posts", text: "Scroll-stopping posts and stories." },
      { icon: Megaphone, title: "Marketing Materials", text: "Banners, flyers and ad creatives." },
      { icon: Printer, title: "Print Design", text: "Brochures, cards and print-ready files." },
      { icon: Package, title: "Packaging", text: "Product packaging that sells on the shelf." },
      { icon: Layers, title: "UI Graphics", text: "Icons and visuals for web and apps." },
      { icon: RefreshCw, title: "Unlimited Revisions", text: "We refine until you love it." },
    ],
    techs: ["Photoshop", "Illustrator", "Figma", "Canva", "InDesign"],
  },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Our Approach", href: "/approach" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Star, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support" },
];

export const processSteps = [
  { icon: MessagesSquare, title: "Discuss", text: "Share your ideas and requirements." },
  { icon: PenTool, title: "Plan & Design", text: "Get a tailored solution and quote." },
  { icon: CodeXml, title: "Develop & Test", text: "We build your project with best practices." },
  { icon: Rocket, title: "Launch", text: "Go live and grow your business." },
];

export const approachSteps = [
  { icon: MessagesSquare, title: "Discuss", text: "We start with a detailed discussion to understand your goals." },
  { icon: Lightbulb, title: "Plan", text: "We create a strategic plan and roadmap for your project." },
  { icon: Palette, title: "Design", text: "Our designers craft modern and user-friendly designs." },
  { icon: CodeXml, title: "Develop", text: "We build your solution with clean and scalable code." },
  { icon: Bug, title: "Test", text: "We rigorously test for performance, security and quality." },
  { icon: Rocket, title: "Launch", text: "We deploy your project and provide ongoing support." },
];

export const whyUs = [
  { icon: Rocket, title: "On-Time Delivery" },
  { icon: ShieldCheck, title: "Reliable & Secure" },
  { icon: Headphones, title: "Dedicated Support" },
  { icon: Star, title: "Affordable Pricing" },
];

export const aboutReasons = [
  { icon: Rocket, title: "Innovative Solutions" },
  { icon: ShieldCheck, title: "Reliable & Secure" },
  { icon: Clock, title: "On-Time Delivery" },
  { icon: Headphones, title: "Dedicated Support" },
];

export const values = [
  { icon: Rocket, title: "Innovation", text: "Always exploring new technologies." },
  { icon: Award, title: "Quality", text: "Delivering excellence in every project." },
  { icon: Users, title: "Collaboration", text: "Growing together with our clients." },
  { icon: Handshake, title: "Integrity", text: "Building trust through honesty and transparency." },
];

export const approachPoints = [
  "Client-Centric Approach",
  "High Quality Standards",
  "Agile Development",
  "On-Time Delivery",
  "Transparent Communication",
  "Long-Term Support",
];

export const techIcons: Record<string, string> = {
  React: "/tech/react.svg",
  "React Native": "/tech/react.svg",
  "Next.js": "/tech/nextjs.svg",
  JavaScript: "/tech/javascript.svg",
  TypeScript: "/tech/typescript.svg",
  "Node.js": "/tech/nodejs.svg",
  ".NET": "/tech/dotnet.svg",
  Python: "/tech/python.svg",
  "C#": "/tech/csharp.svg",
  Firebase: "/tech/firebase.svg",
  WordPress: "/tech/wordpress.svg",
  "Tailwind CSS": "/tech/tailwindcss.svg",
  Flutter: "/tech/flutter.svg",
  PHP: "/tech/php.svg",
  WooCommerce: "/tech/woocommerce.svg",
  MySQL: "/tech/mysql.svg",
  PostgreSQL: "/tech/postgresql.svg",
  MongoDB: "/tech/mongodb.svg",
  "SQL Server": "/tech/sqlserver.svg",
  Docker: "/tech/docker.svg",
  AWS: "/tech/aws.svg",
  Vercel: "/tech/vercel.svg",
  Cloudflare: "/tech/cloudflare.svg",
  "GitHub Actions": "/tech/githubactions.svg",
  Elementor: "/tech/elementor.svg",
  Gemini: "/tech/googlegemini.svg",
  DeepSeek: "/tech/deepseek.svg",
  LangChain: "/tech/langchain.svg",
  "Premiere Pro": "/tech/premierepro.svg",
  "After Effects": "/tech/aftereffects.svg",
  "DaVinci Resolve": "/tech/davinciresolve.svg",
  Photoshop: "/tech/photoshop.svg",
  Illustrator: "/tech/illustrator.svg",
  Figma: "/tech/figma.svg",
  Canva: "/tech/canva.svg",
};

export const techs = ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", ".NET", "Python", "C#", "Firebase", "WordPress", "Tailwind CSS"].map(
  (name) => ({ name, icon: techIcons[name] }),
);

export const allTechs = [...new Set(services.flatMap((s) => s.techs))].filter((t) => techIcons[t]).sort((a, b) =>
  a.replace(/^\W+/, "").localeCompare(b.replace(/^\W+/, ""), "en", { sensitivity: "base" }),
);

export const faqs = [
  { q: "How long does it take to complete a project?", a: "Most websites take 2–6 weeks, while larger web or mobile applications usually take 2–4 months. We share a clear timeline after our first discussion." },
  { q: "Do you offer ongoing support?", a: "Yes. We offer maintenance and support plans that include updates, monitoring, backups and new feature development." },
  { q: "Can you work with international clients?", a: "Absolutely. We work with clients worldwide and adapt to your time zone for meetings and communication." },
  { q: "What does a project cost?", a: "Pricing depends on scope and complexity. After understanding your needs we provide a detailed, transparent quote with no hidden fees." },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: { heading: string; text: string }[];
  takeaways: string[];
};

export const posts: Post[] = [
  {
    slug: "nextjs-whats-new",
    title: "Next.js 16: What's New and Why Your Business Should Upgrade",
    excerpt: "A practical overview of the latest Next.js release and how its performance, caching and developer experience improvements translate into faster, more reliable websites.",
    category: "Web Development",
    date: "Nov 25, 2026",
    readTime: "6 min read",
    image: "/b1.png",
    body: [
      { heading: "A Faster Foundation", text: "Next.js 16 makes Turbopack the default bundler, delivering significantly faster local builds and near-instant refreshes during development. For businesses, this means shorter development cycles and quicker delivery of new features." },
      { heading: "Smarter Caching with Cache Components", text: "The new caching model gives developers precise control over which parts of a page are static and which are dynamic. Pages can be served instantly from cache while still displaying personalised or real-time content where it matters." },
      { heading: "Instant Navigation", text: "Improved prefetching and partial rendering make transitions between pages feel immediate. Visitors stay engaged longer, and search engines reward the improved Core Web Vitals with better rankings." },
      { heading: "Should You Upgrade?", text: "For most projects, the upgrade is straightforward thanks to official codemods. We recommend auditing your dependencies, testing in a staging environment and rolling out gradually to ensure a smooth transition with zero downtime." },
    ],
    takeaways: ["Turbopack is now the default for faster builds", "Cache Components offer fine-grained performance control", "Better Core Web Vitals improve SEO", "Official codemods simplify migration"],
  },
  {
    slug: "integrate-ai-in-your-app",
    title: "How to Integrate AI into Your Website or Mobile App",
    excerpt: "From intelligent chatbots to smart search and workflow automation, learn how to add AI capabilities that deliver measurable value to your customers and your team.",
    category: "AI & Technology",
    date: "Nov 22, 2026",
    readTime: "7 min read",
    image: "/ai1.png",
    body: [
      { heading: "Start with a Clear Business Goal", text: "Successful AI projects begin with a specific problem, not a technology. Identify a repetitive task, a common customer question or a slow internal process, and measure how much time or cost it currently consumes." },
      { heading: "Choose the Right Model", text: "Platforms such as OpenAI, Google Gemini and DeepSeek each offer different strengths in reasoning, speed and pricing. We evaluate models against your real data to find the best balance of quality and cost." },
      { heading: "Integrate Securely", text: "AI features should be connected through a secure backend that controls exactly what data is shared. Sensitive information is filtered or anonymised, and every request is logged for transparency and compliance." },
      { heading: "Measure and Improve", text: "Once live, track response accuracy, user satisfaction and time saved. Continuous refinement of prompts, retrieval data and workflows ensures your AI features keep improving over time." },
    ],
    takeaways: ["Define a measurable problem before choosing a tool", "Compare models on your own data", "Route AI requests through a secure backend", "Track accuracy and ROI after launch"],
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter: Choosing the Right Framework in 2026",
    excerpt: "An objective comparison of the two leading cross-platform frameworks to help you choose the best foundation for your next iOS and Android application.",
    category: "Mobile Apps",
    date: "Nov 19, 2026",
    readTime: "6 min read",
    image: "/mob1.png",
    body: [
      { heading: "One Codebase, Two Platforms", text: "Both React Native and Flutter allow a single team to build and maintain apps for iOS and Android, reducing development cost and keeping features consistent across devices." },
      { heading: "React Native Strengths", text: "React Native uses JavaScript and TypeScript, making it a natural choice for teams already working with React on the web. Its large ecosystem and native modules make integrations fast and flexible." },
      { heading: "Flutter Strengths", text: "Flutter renders its own UI using the Dart language, delivering highly consistent visuals and smooth animations. It is particularly strong for design-heavy apps that require a custom look and feel." },
      { heading: "Our Recommendation", text: "The right choice depends on your existing technology stack, design requirements and long-term roadmap. We assess these factors during discovery and recommend the framework that best supports your goals." },
    ],
    takeaways: ["Both frameworks reduce cost with a shared codebase", "React Native suits teams with web React experience", "Flutter excels in highly custom, animated interfaces", "Base the decision on your roadmap and team"],
  },
  {
    slug: "building-scalable-backend-apis",
    title: "Building Scalable Backend APIs with .NET and Node.js",
    excerpt: "Discover the architecture principles that keep your backend fast, secure and reliable as your user base grows from hundreds to millions.",
    category: "Backend Development",
    date: "Nov 16, 2026",
    readTime: "7 min read",
    image: "/bak1.png",
    body: [
      { heading: "Design for Growth from Day One", text: "A scalable backend starts with a clean, modular architecture. Separating business logic, data access and external integrations makes it easier to optimise and scale individual parts of the system." },
      { heading: "Choose the Right Database Strategy", text: "Relational databases such as SQL Server and PostgreSQL provide strong consistency, while MongoDB offers flexibility for evolving data. Proper indexing and query optimisation often deliver the biggest performance gains." },
      { heading: "Security at Every Layer", text: "Authentication, role-based authorisation, input validation and encryption protect your data and your users. Rate limiting and monitoring help detect and stop abuse before it becomes a problem." },
      { heading: "Observe and Scale", text: "Logging, metrics and alerts provide visibility into how your system performs in production. With this insight, infrastructure can be scaled horizontally and bottlenecks resolved proactively." },
    ],
    takeaways: ["Modular architecture simplifies scaling", "Indexing and query tuning deliver major gains", "Apply security at every layer", "Monitoring enables proactive scaling"],
  },
  {
    slug: "must-have-wordpress-plugins",
    title: "Essential WordPress Plugins Every Business Website Needs",
    excerpt: "A curated guide to the plugin categories that keep your WordPress website secure, fast, search-friendly and easy to manage.",
    category: "WordPress",
    date: "Nov 13, 2026",
    readTime: "5 min read",
    image: "/wrod1.png",
    body: [
      { heading: "Security and Backups", text: "A reliable security plugin with firewall protection and malware scanning, combined with automated off-site backups, is the foundation of every professional WordPress website." },
      { heading: "Performance and Caching", text: "Caching, image optimisation and script minification plugins dramatically improve load times, which directly influences user experience, conversions and search rankings." },
      { heading: "SEO and Analytics", text: "SEO plugins help manage meta tags, sitemaps and structured data, while analytics integrations provide insight into visitor behaviour and campaign performance." },
      { heading: "Keep It Lean", text: "Every plugin adds maintenance overhead. We recommend choosing well-supported plugins, removing unused ones and building custom functionality where it delivers better performance and control." },
    ],
    takeaways: ["Prioritise security and automated backups", "Caching and image optimisation boost speed", "SEO plugins improve search visibility", "Fewer, well-maintained plugins are better"],
  },
  {
    slug: "deploy-nextjs-on-vercel",
    title: "Deploying Next.js on Vercel: A Professional Step-by-Step Guide",
    excerpt: "Learn how to deploy, configure and monitor a production-ready Next.js application on Vercel with automated previews and zero-downtime releases.",
    category: "Cloud & DevOps",
    date: "Nov 10, 2026",
    readTime: "6 min read",
    image: "/cl1.png",
    body: [
      { heading: "Connect Your Repository", text: "Linking your GitHub repository to Vercel enables automatic deployments. Every pull request receives its own preview URL, allowing stakeholders to review changes before they go live." },
      { heading: "Configure Environments", text: "Environment variables, secrets and build settings are managed separately for development, preview and production, keeping sensitive credentials secure and configuration consistent." },
      { heading: "Custom Domains and SSL", text: "Adding a custom domain takes minutes, and SSL certificates are issued and renewed automatically, ensuring every visitor connects securely." },
      { heading: "Monitor in Production", text: "Built-in analytics, logs and performance insights help identify issues early. Combined with instant rollbacks, your team can release with confidence." },
    ],
    takeaways: ["Automatic preview deployments for every change", "Separate, secure environment configuration", "Free automatic SSL for custom domains", "Instant rollbacks for safe releases"],
  },
  {
    slug: "video-editing-for-brands",
    title: "How Professional Video Editing Elevates Your Brand",
    excerpt: "Explore why high-quality video content drives engagement and how a structured editing process turns raw footage into compelling brand stories.",
    category: "Video Editing",
    date: "Nov 07, 2026",
    readTime: "5 min read",
    image: "/v1.png",
    body: [
      { heading: "Video Drives Engagement", text: "Video remains the most engaging content format across social media, websites and advertising. Well-edited videos capture attention quickly and communicate your message clearly." },
      { heading: "A Structured Editing Process", text: "Professional editing combines storytelling, pacing, colour grading, sound design and motion graphics. Tools such as Premiere Pro, After Effects and DaVinci Resolve enable cinematic results." },
      { heading: "Optimised for Every Platform", text: "Each platform has different formats and viewing habits. We tailor aspect ratios, durations and captions for Instagram, YouTube, TikTok and LinkedIn to maximise reach." },
      { heading: "Consistency Builds Recognition", text: "Consistent intros, typography, colours and audio branding help audiences recognise your content instantly and strengthen trust in your brand over time." },
    ],
    takeaways: ["Video is the most engaging content format", "Storytelling and pacing matter as much as visuals", "Tailor every edit to its platform", "Consistent branding builds recognition"],
  },
  {
    slug: "graphic-design-brand-identity",
    title: "Building a Strong Brand Identity Through Graphic Design",
    excerpt: "Understand the key elements of a professional brand identity and how consistent design builds trust, recognition and loyalty.",
    category: "Graphic Design",
    date: "Nov 04, 2026",
    readTime: "5 min read",
    image: "/g1.png",
    body: [
      { heading: "More Than a Logo", text: "A brand identity includes your logo, colour palette, typography, imagery and tone. Together, these elements create a recognisable and memorable experience across every touchpoint." },
      { heading: "Design with Purpose", text: "Every design decision should reflect your values and appeal to your target audience. Research and strategy ensure your visuals communicate the right message." },
      { heading: "Create a Brand Guideline", text: "A clear brand guideline documents how your identity should be used, ensuring consistency across your website, social media, print materials and advertising." },
      { heading: "Evolve Without Losing Recognition", text: "Strong brands refresh their visuals over time while preserving their core identity, staying modern without confusing loyal customers." },
    ],
    takeaways: ["Identity covers logo, colour, type and tone", "Strategy should guide every design choice", "Brand guidelines ensure consistency", "Refresh thoughtfully to stay relevant"],
  },
  {
    slug: "grow-business-with-website",
    title: "How a Modern Website Accelerates Business Growth",
    excerpt: "Learn why a fast, professional and conversion-focused website is one of the most valuable investments a growing business can make.",
    category: "Business Growth",
    date: "Nov 01, 2026",
    readTime: "5 min read",
    image: "/web2.png",
    body: [
      { heading: "Your First Impression", text: "For most customers, your website is the first interaction with your brand. A modern, professional design builds credibility within seconds and encourages visitors to explore further." },
      { heading: "Speed and Mobile Experience", text: "Fast load times and a seamless mobile experience reduce bounce rates and increase conversions. Search engines also reward performance with higher visibility." },
      { heading: "Designed to Convert", text: "Clear messaging, strong calls-to-action and simple contact forms turn visitors into leads. Every page should guide users towards a meaningful next step." },
      { heading: "Measure and Optimise", text: "Analytics reveal how visitors use your website. Regular testing and improvements ensure your website continues to generate more leads and revenue over time." },
    ],
    takeaways: ["Professional design builds instant credibility", "Speed and mobile experience drive conversions", "Clear calls-to-action generate leads", "Continuous optimisation increases ROI"],
  },
  {
    slug: "securing-web-apps",
    title: "Essential Security Practices for Modern Web Applications",
    excerpt: "Protect your users, data and reputation with proven security practices that should be part of every stage of development.",
    category: "Web Development",
    date: "Oct 29, 2026",
    readTime: "6 min read",
    image: "/cl4.png",
    body: [
      { heading: "Security by Design", text: "Security should be considered from the very first planning session, not added at the end. Threat modelling helps identify risks early, when they are easiest and cheapest to address." },
      { heading: "Validate and Sanitise Input", text: "All user input must be validated on the server. Parameterised queries prevent SQL injection, while output encoding protects against cross-site scripting attacks." },
      { heading: "Strong Authentication", text: "Secure password hashing, multi-factor authentication and properly scoped access tokens ensure that only authorised users can access sensitive data and features." },
      { heading: "Keep Everything Updated", text: "Outdated dependencies are one of the most common causes of breaches. Automated dependency scanning and regular updates keep your application protected against known vulnerabilities." },
    ],
    takeaways: ["Plan security from the start", "Validate all input on the server", "Use MFA and secure token handling", "Automate dependency updates"],
  },
  {
    slug: "best-coding-practices",
    title: "Clean Coding Practices for Scalable, Maintainable Software",
    excerpt: "The engineering habits our team follows to keep codebases readable, testable and easy to extend as projects grow.",
    category: "Tips & Tricks",
    date: "Oct 25, 2026",
    readTime: "5 min read",
    image: "/bak2.png",
    body: [
      { heading: "Readability First", text: "Code is read far more often than it is written. Clear naming, small focused functions and consistent formatting make it easier for any developer to understand and improve the codebase." },
      { heading: "Automated Testing", text: "Unit and integration tests for critical features catch regressions early. Running them automatically in a CI pipeline ensures every change is verified before release." },
      { heading: "Code Reviews", text: "Peer reviews improve quality, share knowledge across the team and help maintain consistent standards throughout the project." },
      { heading: "Document Key Decisions", text: "Recording architectural decisions and setup instructions helps new team members become productive quickly and preserves valuable context for the future." },
    ],
    takeaways: ["Prioritise clear, readable code", "Automate tests in CI", "Use code reviews to maintain quality", "Document architectural decisions"],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimisation Strategies That Actually Work",
    excerpt: "Reduce your cloud spending without sacrificing performance by applying proven strategies for right-sizing, scaling and monitoring.",
    category: "Cloud & DevOps",
    date: "Oct 21, 2026",
    readTime: "5 min read",
    image: "/cl3.png",
    body: [
      { heading: "Understand Your Spending", text: "Detailed cost reports and resource tagging reveal exactly where your budget goes, making it easy to identify waste and prioritise savings." },
      { heading: "Right-Size Resources", text: "Many servers run far below capacity. Matching instance sizes to real usage can reduce costs significantly without affecting performance." },
      { heading: "Automate Scaling", text: "Auto-scaling adds resources during peak demand and removes them when traffic drops, so you only pay for what you actually use." },
      { heading: "Review Regularly", text: "Monthly reviews of unused storage, idle environments and pricing plans ensure your infrastructure stays efficient as your business evolves." },
    ],
    takeaways: ["Tag resources to track spending", "Right-size underused servers", "Use auto-scaling for variable traffic", "Review costs every month"],
  },
];

export const blogCategories = [
  { name: "Web Development", icon: CodeXml },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "Backend Development", icon: Server },
  { name: "WordPress", icon: Globe },
  { name: "AI & Technology", icon: Bot },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Video Editing", icon: Clapperboard },
  { name: "Graphic Design", icon: PenTool },
  { name: "Business Growth", icon: TrendingUp },
  { name: "Tips & Tricks", icon: Lightbulb },
];
