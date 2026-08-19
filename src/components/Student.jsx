import React from "react";

function Student() {
  const students = [
    {
      name: "ARYAA PATEL ",
      id: "GU-BCA-0247",
      course: "BCA HONS",
      semester: "SEM 3",
      division: "A",
      year: "2026 - 27",
      color: "#7ab8f5",
      light: "#eef7ff",
    },
    {
      name: "RIYA PATEL",
      id: "GU-BCA-0189",
      course: "BCA HONS",
      semester: "SEM 3",
      division: "A",
      year: "2026 - 27",
      color: "#9b8be8",
      light: "#f4f0ff",
    },
    {
      name: "NAVYA SHAH",
      id: "GU-BCA-0312",
      course: "BCA HONS",
      semester: "SEM 3",
      division: "A",
      year: "2026 - 27",
      color: "#5fc7a0",
      light: "#edfff7",
    },
  ];

  return (
    <div className="page">

      {/* Background Decorations */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Heading */}
      <div className="heading">
        <span>✦</span>
        <h1>Student ID Cards</h1>
        <p>GANPAT UNIVERSITY • STUDENT PORTAL</p>
      </div>

      {/* Cards */}
      <div className="cards">

        {students.map((student, index) => (

          <div
            className="card"
            key={student.id}
            style={{
              "--accent": student.color,
              "--light": student.light,
            }}
          >

            {/* Card Top */}
            <div className="cardTop">

              <div>
                <h2>GANPAT UNIVERSITY</h2>
                <p>STUDENT IDENTITY CARD</p>
              </div>

              <div className="logo">
                GU
              </div>

            </div>

            {/* Number */}
            <div className="cardNumber">
              0{index + 1}
            </div>

            {/* Profile */}
            <div className="profile">

              <div className="photo">
                {student.avatar}
              </div>

              <div className="profileInfo">

                <h3>{student.name}</h3>

                <span className="course">
                  {student.course}
                </span>

                <div className="active">
                  <span></span>
                  ACTIVE STUDENT
                </div>

              </div>

            </div>

            {/* Details */}
            <div className="details">

              <div>
                <small>STUDENT ID</small>
                <strong>{student.id}</strong>
              </div>

              <div>
                <small>SEMESTER</small>
                <strong>{student.semester}</strong>
              </div>

              <div>
                <small>DIVISION</small>
                <strong>{student.division}</strong>
              </div>

              <div>
                <small>SESSION</small>
                <strong>{student.year}</strong>
              </div>

            </div>

            {/* Bottom */}
            <div className="bottom">

              <div className="valid">
                <small>VALID UNTIL</small>
                <strong>JUNE 2029</strong>
              </div>

              {/* QR */}
              <div className="qr">

                <div className="qrBox q1"></div>
                <div className="qrBox q2"></div>
                <div className="qrBox q3"></div>

                <div className="qrDots">
                  ▪ ▪<br />
                  ▪ ▪ ▪
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="footer">
              <span>STUDENT • {student.id}</span>
              <span>✓ VERIFIED</span>
            </div>

          </div>

        ))}

      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* PAGE */

        .page {
          min-height: 100vh;
          padding: 55px 25px;

          background:
            radial-gradient(
              circle at 10% 10%,
              #eaf6ff 0,
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 90%,
              #f5ecff 0,
              transparent 30%
            ),
            #fbfcfe;

          position: relative;
          overflow: hidden;
        }

        /* BACKGROUND BLOBS */

        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: .5;
          filter: blur(2px);
          animation: float 7s ease-in-out infinite;
        }

        .blob1 {
          width: 180px;
          height: 180px;
          background: #e0f2ff;
          left: -80px;
          top: 30%;
        }

        .blob2 {
          width: 150px;
          height: 150px;
          background: #eee5ff;
          right: -60px;
          top: 10%;
          animation-delay: 1s;
        }

        .blob3 {
          width: 100px;
          height: 100px;
          background: #e1faef;
          right: 25%;
          bottom: -30px;
          animation-delay: 2s;
        }

        @keyframes float {

          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-20px);
          }

        }

        /* HEADING */

        .heading {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 35px;
        }

        .heading span {
          color: #8db7dd;
          font-size: 22px;
        }

        .heading h1 {
          margin: 5px 0;

          color: #26384b;

          font-size: 32px;
          letter-spacing: .5px;
        }

        .heading p {
          margin: 0;

          color: #9ba8b5;

          font-size: 9px;
          letter-spacing: 3px;
        }

        /* CARDS CONTAINER */

        .cards {
          position: relative;
          z-index: 2;

          max-width: 1250px;
          margin: auto;

          display: grid;
          grid-template-columns:
            repeat(3, 1fr);

          gap: 25px;
        }

        /* CARD */

        .card {
          min-height: 490px;

          padding: 24px;

          position: relative;

          background: rgba(255,255,255,.94);

          border: 1px solid #e7edf3;

          border-radius: 24px;

          box-shadow:
            0 18px 45px rgba(70,95,120,.10);

          overflow: hidden;

          transition:
            transform .35s ease,
            box-shadow .35s ease;

          animation: cardAppear .8s ease backwards;
        }

        .card:nth-child(2) {
          animation-delay: .15s;
        }

        .card:nth-child(3) {
          animation-delay: .3s;
        }

        @keyframes cardAppear {

          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .card:hover {
          transform: translateY(-10px);

          box-shadow:
            0 25px 55px rgba(70,95,120,.18);
        }

        /* TOP ACCENT */

        .card::before {
          content: "";

          position: absolute;

          width: 100%;
          height: 5px;

          left: 0;
          top: 0;

          background: var(--accent);
        }

        /* CARD NUMBER */

        .cardNumber {
          position: absolute;

          top: 18px;
          right: 25px;

          color: var(--accent);

          font-size: 11px;
          font-weight: bold;

          opacity: .6;
        }

        /* HEADER */

        .cardTop {
          display: flex;

          justify-content: space-between;
          align-items: center;

          padding-bottom: 17px;

          border-bottom: 1px solid #edf1f4;
        }

        .cardTop h2 {
          margin: 0;

          color: #293b4d;

          font-size: 15px;
          letter-spacing: .7px;
        }

        .cardTop p {
          margin: 4px 0 0;

          color: #a2adb7;

          font-size: 7px;
          letter-spacing: 1.8px;
        }

        /* LOGO */

        .logo {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          background: var(--light);

          color: var(--accent);

          font-size: 13px;
          font-weight: 900;

          border: 1px solid rgba(0,0,0,.03);
        }

        /* PROFILE */

        .profile {
          display: flex;

          align-items: center;

          gap: 17px;

          margin-top: 25px;
        }

        .photo {
          width: 88px;
          height: 88px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: var(--light);

          border: 5px solid white;

          box-shadow:
            0 7px 20px rgba(70,90,110,.13);

          font-size: 42px;
        }

        .profileInfo h3 {
          margin: 0;

          color: #293b4d;

          font-size: 16px;
          letter-spacing: .4px;
        }

        /* COURSE */

        .course {
          display: inline-block;

          margin-top: 7px;

          padding: 5px 10px;

          border-radius: 15px;

          background: var(--light);

          color: var(--accent);

          font-size: 8px;

          font-weight: bold;

          letter-spacing: 1px;
        }

        /* ACTIVE */

        .active {
          display: flex;

          align-items: center;

          gap: 6px;

          margin-top: 9px;

          color: #62ad86;

          font-size: 7px;

          font-weight: bold;

          letter-spacing: .8px;
        }

        .active span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #59cf8f;

          box-shadow: 0 0 7px #8ee8b5;
        }

        /* DETAILS */

        .details {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 10px;

          margin-top: 25px;
        }

        .details > div {
          padding: 12px;

          background: #fafcfd;

          border: 1px solid #edf1f4;

          border-radius: 11px;

          transition: .3s;
        }

        .details > div:hover {
          background: var(--light);

          border-color: transparent;

          transform: scale(1.03);
        }

        .details small {
          display: block;

          color: #a4aeb8;

          font-size: 6px;

          letter-spacing: 1px;
        }

        .details strong {
          display: block;

          margin-top: 6px;

          color: #34485b;

          font-size: 10px;
        }

        /* BOTTOM */

        .bottom {
          display: flex;

          justify-content: space-between;
          align-items: center;

          margin-top: 22px;
        }

        .valid small {
          color: #a4aeb8;

          font-size: 6px;

          letter-spacing: 1px;
        }

        .valid strong {
          display: block;

          margin-top: 5px;

          color: #34485b;

          font-size: 10px;
        }

        /* QR */

        .qr {
          width: 55px;
          height: 55px;

          position: relative;

          background: white;

          border: 1px solid #dfe6ec;

          border-radius: 6px;
        }

        .qrBox {
          position: absolute;

          width: 14px;
          height: 14px;

          border: 4px solid #405264;
        }

        .q1 {
          left: 5px;
          top: 5px;
        }

        .q2 {
          right: 5px;
          top: 5px;
        }

        .q3 {
          left: 5px;
          bottom: 5px;
        }

        .qrDots {
          position: absolute;

          right: 7px;
          bottom: 7px;

          color: #526579;

          font-size: 9px;

          line-height: 9px;
        }

        /* FOOTER */

        .footer {
          display: flex;

          justify-content: space-between;

          margin-top: 18px;
          padding-top: 13px;

          border-top: 1px solid #edf1f4;

          color: #a5afb9;

          font-size: 6px;

          letter-spacing: .8px;
        }

        /* TABLET */

        @media (max-width: 950px) {

          .cards {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        /* MOBILE */

        @media (max-width: 650px) {

          .page {
            padding: 35px 15px;
          }

          .heading h1 {
            font-size: 25px;
          }

          .cards {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

        }

      `}</style>

    </div>
  );
}

export default Student;