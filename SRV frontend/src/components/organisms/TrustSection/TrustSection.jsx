import "./TrustSection.css";

const Laurel = () => (
  <svg
    className="trust__laurel"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M85 10C65 20 55 40 55 70"
      stroke="#D4A84F"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {[15, 25, 35, 45, 55, 65].map((y, index) => (
      <g key={index}>
        <ellipse
          cx={70 - index * 3}
          cy={y}
          rx="6"
          ry="12"
          fill="#D4A84F"
          transform={`rotate(-35 ${70 - index * 3} ${y})`}
        />
      </g>
    ))}
  </svg>
);

export default function TrustSection() {
  const stats = [
    {
      title: "1 Million+",
      subtitle: "Parents",
      top: "Trusted by",
    },
    {
      title: "22+ Years",
      subtitle: "of Legacy",
    },
    {
      title: "500+",
      subtitle: "Participating Schools",
    },
    {
      title: "17 Cities",
      subtitle: "Across the Globe",
    },
  ];

  return (
    <section className="trust">
      <div className="trust__container">
        {stats.map((item, index) => (
          <div className="trust__item" key={index}>
            <Laurel />

            <div className="trust__content">
              {item.top && (
                <p className="trust__top">
                  {item.top}
                </p>
              )}

              <h3 className="trust__title">
                {item.title}
              </h3>

              <p className="trust__subtitle">
                {item.subtitle}
              </p>
            </div>

            <div className="trust__laurel--right">
              <Laurel />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}