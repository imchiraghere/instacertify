import { NEWS_DATA } from "@/utills/const";
import Link from "next/link";
import AnimatedButton from "../AnimatedButton";

const dummyEvents = [
  {
    date: "Mon, Jan 06",
    title: "POWER ON 2025",
    image: "/assets/images/L1.webp",
    location: "Agricultural College Ground, Pune",
    duration: "3 days, 2 nights",
    description:
      "Join MAHATech Pune 2025, a major industrial event that will showcase cutting-edge innovations and opportunities.",
    price: "22.51",
    oldPrice: "28.00",
  },
  {
    title: "Green Energy Expo",
    date: "Wed, Feb 12",
    image: "/assets/images/ev1.png",
    location: "Pragati Maidan, New Delhi",
    duration: "2 days, 1 night",
    description:
      "Explore the future of clean energy and meet pioneers in sustainable technology.",
    price: "15.99",
    oldPrice: "20.00",
  },
  {
    title: "Startup Fusion 2025",
    date: "Fri, Mar 15",
    image: "/assets/images/L3.webp",
    location: "T-Hub, Hyderabad",
    duration: "3 days, 2 nights",
    description:
      "Network with top-tier investors, mentors, and entrepreneurs from around the country.",
    price: "30.00",
    oldPrice: "40.00",
  },
];

const News = () => {
  const EventCard = ({ event }) => {
    const styles = {
      card: {
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
      },
      imageWrapper: {
        width: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
      },
      image: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
        margin: "0 auto",
      },
      content: {
        padding: "16px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      },
      meta: {
        fontSize: "14px",
        color: "#999",
        marginBottom: "8px",
      },
      title: {
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "12px",
        color: "#333",
      },
      description: {
        fontSize: "14px",
        color: "#444",
        flexGrow: 1,
        marginBottom: "14px",
      },
      footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "auto",
        flexWrap: "wrap",
        gap: "8px",
      },
      btn: {
        backgroundColor: "#c6f0e8",
        color: "#11aabb",
        padding: "8px 16px",
        border: "none",
        borderRadius: "8px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "0.3s",
      },
    };

    return (
      <div
        className="event-card"
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "";
          e.currentTarget.style.transform = "";
        }}
      >
        <div style={styles.imageWrapper}>
          <img src={event.image} alt={event.title} style={styles.image} />
        </div>
        <div style={styles.content}>
          <div style={styles.meta}>
            <span>{event.date}</span>
          </div>
          <h3 style={styles.title}>{event.title}</h3>
          <p style={styles.description}>{event.description}</p>
          <div style={styles.footer}>
            <AnimatedButton title={"Explore"} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <div className="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
        <div>
          <h2 className="font-bold font-chivo mx-auto text-[40px] leading-[44px] md:text-[40px] md:leading-[40px] text-gray-900 md:mb-[22px] max-w-[725px]">
            Our Upcoming Events
          </h2>
          <p className="text-quote md:text-lead-md text-gray-600 mx-auto max-w-[976px]">
            From Our blog and Event fanpage
          </p>
        </div>
        <AnimatedButton title={"View more"} />
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
        {dummyEvents.map((item, index) => (
          <EventCard event={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
