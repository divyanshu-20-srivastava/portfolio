import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arjun Kapoor",
  initials: "AK",
  url: "https://arjunkapoor.dev",
  location: "Bangalore, India",
  locationLink: "https://maps.app.goo.gl/8kGFQ2AVLetQvqP49", // Replace with actual link if needed
  description:
    "Backend Architect and Software Engineer specializing in building high-performance, fault-tolerant, and scalable distributed systems across multi-cloud environments. Passionate about designing robust APIs and optimizing infrastructure for global reach.",
  summary:
    "With a strong background in designing and implementing complex backend solutions, I focus on delivering systems that are not only functional but also highly performant, secure, and scalable. I have extensive experience working with AWS, GCP, and leveraging edge computing platforms like Cloudflare to build resilient architectures. My expertise includes developing microservices, optimizing database performance, implementing robust CI/CD pipelines, and ensuring system observability through comprehensive monitoring and logging strategies.",
  avatarUrl: "/arjun.png",
  skills: [
    "Node.js (Express, NestJS)",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "gRPC",
    "RESTful APIs",
    "Docker",
    "Kubernetes",
    "AWS (EC2, Lambda, S3, RDS, DynamoDB, SQS, SNS, Kinesis, EKS, API Gateway)",
    "GCP (Compute Engine, Cloud Functions, Cloud Storage, Cloud SQL, Pub/Sub, GKE, API Gateway)",
    "Cloudflare (Workers, Pages, CDN, R2, Access)",
    "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
    // "Terraform",
    // "Pulumi",
    // "Ansible",
    "Prometheus",
    "Grafana",
    // "ELK Stack (Elasticsearch, Logstash, Kibana)",
    // "Datadog",
    // "Microservices Architecture",
    "System Design",
    "Distributed Systems",
    "Database Optimization",
    "Caching Strategies",
    "Security Best Practices (OAuth2, JWT, TLS)",
    "Performance Tuning",
    "Observability (Monitoring, Logging, Tracing)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arjun.kapoor@example.com", // Replace with actual email
    tel: "+919876543210", // Replace with actual phone
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arjunkapoor", // Replace with actual GitHub
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/arjunkapoor", // Replace with actual LinkedIn
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/arjunkapoor", // Replace with actual X (Twitter)
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/aaravsharma", // Replace with actual YouTube
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#", // Or mailto:arjun.kapoor@example.com
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "GlobalTech Solutions",
      href: "https://globaltech.com", // Replace with actual URL
      badges: ["On-site"],
      location: "Bangalore, India",
      title: "Principal Backend Engineer",
      logoUrl: "/globaltech.png", // Replace with actual logo
      start: "June 2021",
      end: "Present",
      description:
        "Architected and led the development of a high-throughput data processing platform handling billions of requests daily. Designed and implemented microservices using Go and Java (Spring Boot), deployed on Kubernetes (EKS on AWS, GKE on GCP). Managed distributed databases (Cassandra, PostgreSQL) and caching layers (Redis Cluster). Implemented multi-region disaster recovery strategies. Leveraged Cloudflare for geo-routing, DDoS protection, and edge caching to reduce latency. Built comprehensive monitoring and alerting dashboards using Datadog and Prometheus.",
    },
    {
      company: "FinServe Innovations",
      href: "https://finserve.com", // Replace with actual URL
      badges: [],
      location: "Mumbai, India",
      title: "Senior Software Engineer (Backend)",
      logoUrl: "/finserve.png", // Replace with actual logo
      start: "Jan 2018",
      end: "May 2021",
      description:
        "Developed core banking APIs using Python (Django) and Node.js. Built and optimized complex SQL queries for PostgreSQL and managed MongoDB clusters. Implemented asynchronous transaction processing using Kafka. Deployed services on AWS EC2 and utilized AWS RDS and DynamoDB. Focused on API security (OAuth2, JWT) and performance optimization.",
    },
    {
      company: "Startup Spark",
      href: "https://startupspark.co", // Replace with actual URL
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/spark.png", // Replace with actual logo
      start: "Aug 2016",
      end: "Dec 2017",
      description:
        "Contributed to the development of a SaaS platform backend using Node.js and Express. Built RESTful APIs and managed data in MongoDB. Deployed initial versions on Heroku and later migrated to AWS Lambda and API Gateway for cost efficiency and scalability.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Science (IISc) Bangalore",
      href: "https://iisc.ac.in", // Replace with actual URL
      degree: "Master of Technology in Computer Science",
      logoUrl: "/iisc.png", // Replace with actual logo
      start: "2014",
      end: "2016",
    },
    {
      school: "Delhi Technological University (DTU)",
      href: "https://dtu.ac.in", // Replace with actual URL
      degree: "Bachelor of Technology in Computer Engineering",
      logoUrl: "/dtu.png", // Replace with actual logo
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Distributed Caching System (Open Source)",
      href: "https://github.com/arjunkapoor/distributed-cache", // Replace with actual GitHub
      dates: "March 2023 - Present",
      active: true,
      description:
        "Designed and built a fault-tolerant, distributed in-memory key-value store in Go, suitable for caching backend data. Implemented consistent hashing for data distribution and a Raft-based consensus algorithm for high availability. Containerized with Docker and provided Kubernetes deployment manifests.",
      technologies: [
        "Go",
        "Distributed Systems",
        "Consistent Hashing",
        "Raft Consensus",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arjunkapoor/distributed-cache", // Replace with actual GitHub
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image if available
      video: "", // Add video if available
    },
    {
      title: "Multi-Cloud Serverless Data Pipeline",
      href: "https://github.com/arjunkapoor/multi-cloud-data-pipeline", // Replace with actual GitHub
      dates: "Oct 2022 - Feb 2023",
      active: true,
      description:
        "Developed a data ingestion and processing pipeline leveraging serverless functions across AWS (Lambda) and GCP (Cloud Functions). Used AWS Kinesis and GCP Pub/Sub for message queuing and AWS S3 and GCP Cloud Storage for data lakes. Implemented data transformation logic in Python.",
      technologies: [
        "AWS Lambda",
        "AWS Kinesis",
        "AWS S3",
        "GCP Cloud Functions",
        "GCP Pub/Sub",
        "GCP Cloud Storage",
        "Python",
        "Serverless Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arjunkapoor/multi-cloud-data-pipeline", // Replace with actual GitHub
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image if available
      video: "", // Add video if available
    },
    {
      title: "Edge Authentication Service (Cloudflare Workers)",
      href: "https://github.com/arjunkapoor/edge-auth-worker", // Replace with actual GitHub
      dates: "April 2023 - May 2023",
      active: true,
      description:
        "Implemented a lightweight authentication and authorization service using Cloudflare Workers to protect backend APIs at the edge. Verified JWT tokens and enforced access policies before requests reached the origin server. Improved API security and reduced load on the backend.",
      technologies: [
        "Cloudflare Workers",
        "JavaScript",
        "JWT",
        "Edge Computing",
        "Security",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arjunkapoor/edge-auth-worker", // Replace with actual GitHub
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image if available
      video: "", // Add video if available
    },
  ],
  hackathons: [
    {
      title: "GCP Serverless Hackathon",
      dates: "July 2022",
      location: "Online",
      description:
        "Developed a real-time collaborative document editing application backend using GCP Cloud Functions, Firestore, and Pub/Sub.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/gcp-hackathon.png", // Dummy image URL
      links: [],
    },
  ],
} as const;
