import { useEffect, useState } from "react";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <>
      <div className="popup-overlay">
        <div className="popup-container">
          <h2 className="popup-title">👋 Welcome!</h2>
          <p className="popup-text">
            We’re excited to have you here. Explore and enjoy!
          </p>
          <button className="popup-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.4s ease-out;
        }

        .popup-container {
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .popup-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .popup-text {
          color: #4b5563;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .popup-button {
          background-color: #ec691f;
          color: #fff;
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .popup-button:hover {
          background-color: #ec691f;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default WelcomePopup;


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const WelcomePopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const consent = localStorage.getItem("cookie_consent");
//     if (!consent) {
//       setShowPopup(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("cookie_consent", "accepted");
//     setShowPopup(false);
//   };

//   const handleReject = () => {
//     localStorage.setItem("cookie_consent", "rejected");
//     setShowPopup(false);
//   };

//   const handleLearnMore = () => {
//     router.push("/contact-us");
//   };

//   if (!showPopup) return null;

//   return (
//     <>
//       <div className="popup-overlay">
//         <div className="popup-container">
//           <h2 className="popup-title">👋 Welcome!</h2>
//           <p className="popup-text">
//            We’re excited to have you here. Explore and enjoy!{" "}
//             <span className="learn-more" onClick={handleLearnMore}>
//               Learn more.
//             </span>
//           </p>
//           <div className="button-group">
//             <button className="popup-button accept" onClick={handleAccept}>
//               Accept
//             </button>
//             <button className="popup-button reject" onClick={handleReject}>
//               Reject
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .popup-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.5);
//           z-index: 9999;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: fadeIn 0.4s ease-out;
//         }

//         .popup-container {
//           background: #ffffff;
//           padding: 2rem;
//           border-radius: 12px;
//           max-width: 400px;
//           width: 90%;
//           text-align: center;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//         }

//         .popup-title {
//           font-size: 1.75rem;
//           font-weight: bold;
//           color: #1f2937;
//           margin-bottom: 1rem;
//         }

//         .popup-text {
//           color: #4b5563;
//           font-size: 1rem;
//           margin-bottom: 1.5rem;
//           line-height: 1.6;
//         }

//         .learn-more {
//           color: #ec691f;
//           font-weight: 600;
//           cursor: pointer;
//         }

//         .learn-more:hover {
//           text-decoration: underline;
//         }

//         .button-group {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//         }

//         .popup-button {
//           padding: 0.5rem 1.5rem;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 1rem;
//           transition: background-color 0.3s ease;
//         }

//         .popup-button.accept {
//           background-color: #ec691f;
//           color: white;
//         }

//         .popup-button.accept:hover {
//           background-color: #d65d1a;
//         }

//         .popup-button.reject {
//           background-color: #e5e7eb;
//           color: #374151;
//         }

//         .popup-button.reject:hover {
//           background-color: #d1d5db;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default WelcomePopup;
