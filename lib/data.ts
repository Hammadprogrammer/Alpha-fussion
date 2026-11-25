import {
  Activity,
  Award,
  Bell,
  Brain,
  CreditCard,
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
  email: "info@alphafussion.com",
  phone: "+92 300 123 4567",
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
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    label: "Solutions",
    href: "/approach",
    children: [
      { label: "Our Approach", href: "/approach" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
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
  Azure: "/tech/azure.svg",
  Vercel: "/tech/vercel.svg",
  Cloudflare: "/tech/cloudflare.svg",
  "GitHub Actions": "/tech/githubactions.svg",
};

export const techs = ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", ".NET", "Python", "C#", "Firebase", "WordPress", "Tailwind CSS"].map(
  (name) => ({ name, icon: techIcons[name] }),
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
  body: string[];
};

export const posts: Post[] = [
  { slug: "nextjs-whats-new", title: "Next.js 16: What's New and Why You Should Upgrade", excerpt: "Discover the powerful features in Next.js and how they can improve your development workflow.", category: "Web Development", date: "Nov 25, 2026", readTime: "5 min read", image: "/images/code-dark.jpg", body: ["Next.js keeps raising the bar for React frameworks. The latest release brings faster builds with Turbopack, smarter caching with Cache Components and a better developer experience overall.", "Partial prefetching means navigations feel instant, while the new caching model gives you fine-grained control over what is static and what is dynamic.", "If you are still on an older version, now is a great time to upgrade. Most apps can migrate in a single afternoon using the official codemods."] },
  { slug: "integrate-ai-in-your-app", title: "How to Integrate AI in Your Website or App", excerpt: "Learn how to add AI features like chatbots, smart search, and more.", category: "AI & Technology", date: "Nov 20, 2026", readTime: "7 min read", image: "/images/ai-robot.jpg", body: ["AI is no longer a futuristic add-on. Chatbots, semantic search and content generation can be added to almost any product today.", "Start small: identify one repetitive task your users do and see whether an AI model can make it faster.", "Always keep privacy in mind — send only the data you need and give users control over AI features."] },
  { slug: "deploy-nextjs-on-vercel", title: "Deploy Your Next.js App on Vercel: Step-by-Step Guide", excerpt: "A complete guide to deploy your Next.js project on Vercel with ease.", category: "Cloud & DevOps", date: "Nov 18, 2026", readTime: "6 min read", image: "/images/network-cables.jpg", body: ["Vercel is the easiest way to deploy a Next.js app. Connect your Git repository and every push gets its own preview URL.", "Configure environment variables in the dashboard, add a custom domain and you are live in minutes.", "For production, enable analytics and set up monitoring so you can catch issues before your users do."] },
  { slug: "must-have-wordpress-plugins", title: "Top 10 Must-Have WordPress Plugins in 2026", excerpt: "Enhance your WordPress website with these essential plugins.", category: "WordPress", date: "Nov 15, 2026", readTime: "5 min read", image: "/images/devices.jpg", body: ["The right plugins can turn a simple WordPress site into a powerful business tool.", "Focus on security, caching, SEO and backups first — these four categories protect and grow your site.", "Avoid installing too many plugins; each one adds maintenance and potential performance cost."] },
  { slug: "react-native-vs-flutter", title: "React Native vs Flutter: Which is Better?", excerpt: "A detailed comparison to help you choose the right framework.", category: "Mobile Apps", date: "Nov 12, 2026", readTime: "6 min read", image: "/images/phone-app.jpg", body: ["Both React Native and Flutter let you ship iOS and Android apps from one codebase.", "React Native shines if your team already knows JavaScript and React. Flutter offers excellent performance and a rich widget library.", "The best choice depends on your team, timeline and the type of app you are building."] },
  { slug: "best-coding-practices", title: "Best Coding Practices for Scalable Applications", excerpt: "Write clean, maintainable and scalable code.", category: "Tips & Tricks", date: "Nov 10, 2026", readTime: "5 min read", image: "/images/code-screen.jpg", body: ["Scalable software starts with readable code. Use clear names, small functions and consistent formatting.", "Write tests for critical paths and automate them in CI so regressions are caught early.", "Document architectural decisions so new team members can understand why things are built the way they are."] },
  { slug: "grow-business-with-website", title: "How a Modern Website Grows Your Business", excerpt: "Why investing in a fast, modern website pays off.", category: "Business Growth", date: "Nov 06, 2026", readTime: "4 min read", image: "/images/startup.jpg", body: ["Your website is often the first impression customers have of your business.", "A fast, mobile-friendly site improves conversions and search rankings.", "Combine great design with clear calls-to-action to turn visitors into leads."] },
  { slug: "securing-web-apps", title: "Essential Security Tips for Web Applications", excerpt: "Protect your users and data with these proven techniques.", category: "Web Development", date: "Nov 02, 2026", readTime: "6 min read", image: "/images/security.jpg", body: ["Security should be part of every stage of development, not an afterthought.", "Validate all input, use parameterized queries and keep dependencies up to date.", "Enable HTTPS everywhere and implement proper authentication and authorization."] },
  { slug: "cloud-cost-optimization", title: "Cloud Cost Optimization Strategies", excerpt: "Cut your cloud bill without sacrificing performance.", category: "Cloud & DevOps", date: "Oct 28, 2026", readTime: "5 min read", image: "/images/server.jpg", body: ["Cloud costs can grow quickly if left unchecked.", "Right-size your instances, use auto-scaling and take advantage of reserved pricing.", "Monitor usage regularly and remove unused resources."] },
];

export const blogCategories = [
  { name: "Web Development", icon: CodeXml },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "AI & Technology", icon: Bot },
  { name: "WordPress", icon: Globe },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Business Growth", icon: TrendingUp },
  { name: "Tips & Tricks", icon: Lightbulb },
];
