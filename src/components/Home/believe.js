import { BELIEVE_FEATURES } from "@/utills/const";
import AnimatedButton from "../AnimatedButton";

const Believe = () => {
  const styles = {
    wrapper: {
      // backgroundColor: "#fff7f3",
      padding: "60px 20px",
      fontFamily: "Chivo, sans-serif",
      marginTop: "3%",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },
    left: {
      flex: 1,
      // maxWidth: "90%",
    },
    badge: {
      backgroundColor: "white",
      padding: "8px 20px",
      borderRadius: "24px",
      fontSize: "14px",
      fontWeight: 500,
      color: "#777",
      display: "inline-block",
      marginBottom: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    },
    heading: {
      fontSize: "32px",
      color: "#2e2e2e",
      lineHeight: "1.4",
      marginBottom: "20px",
      // textAlign: "center",
      width: "70%",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#ff8744",
      color: "white",
      padding: "12px 24px",
      border: "none",
      borderRadius: "24px",
      cursor: "pointer",
      fontWeight: 500,
    },
    right: {
      flex: 1,
      minWidth: "300px",
    },
    image: {
      width: "100%",
      borderRadius: "24px",
      objectFit: "cover",
    },
    features: {
      marginTop: "60px",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      padding: "30px 20px",
      borderRadius: "20px",
      maxWidth: "1000px",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    },
    featureItem: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      fontSize: "15px",
    },
    featureNumber: {
      width: "28px",
      height: "28px",
      backgroundColor: "#ffe7da",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      color: "#ff8744",
    },
  };

  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.badge}>
            Instacertify Certifications Made Simple
          </div>
          <h1 style={styles.heading}>
            Simply your path to{" "}
            <strong>product certification excellence</strong> with our{" "}
            <strong>expert solutions</strong>
          </h1>
          <p style={styles.paragraph}>
            We are India’s leading product testing and compliance solution
            partner, driving rapid industry growth. Specializing in quality
            testing and consulting, we cover a wide array of certifications,
            including BIS, CRS, ISI, CDSCO, WPC, IMEI-DOT, GMARK, SABER, SFDA,
            LMPC, CIB, EPR, and E-waste Management, to empower businesses across
            the country.
          </p>
          <AnimatedButton title={"Get A Quote"} />
        </div>

        {/* <div style={styles.right}>
          <img src="/images/lab-test.jpg" alt="Lab Test" style={styles.image} />
        </div> */}
      </div>

      <div style={styles.features}>
        {[
          { num: "1", title: "Comprehensive", desc: "Compliance Solutions" },
          { num: "2", title: "Expertise in", desc: "Certification Services" },
          { num: "3", title: "Reliable", desc: "Compliance Consulting" },
          { num: "4", title: "Efficient", desc: "Certification Advisory" },
        ].map((feature, index) => (
          <div key={index} style={styles.featureItem}>
            <span style={styles.featureNumber}>{feature.num}</span>
            <div>
              <strong>{feature.title}</strong>
              <br />
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Believe;
