

const businesses = [
  {
    number: "01",
    title: "We Do Real Estate and Construction",
    description:
      "Discover thoughtfully selected spaces, properties and opportunities designed for the way you want to live.",
    label: "REAL ESTATE",
    url: "https://realty.dreamwaycorp.com/",
    image: "/images/real-estate.jpg",
    theme: "real-estate",
  },

  {
    number: "02",
    title: "We Do Civil Interior Works ",
    description:
      "Transform spaces into beautiful, functional environments with thoughtful design and attention to every detail.",
    label: "INTERIORS",
    url: "https://interiors.dreamwaycorp.com/",
    image: "/images/interiors.jpg",
    theme: "interiors",
  },
];

function GroupBusinesses() {
  return (
    <section className="group-businesses-section">

      <div className="container">

        {/* Section heading */}

        <div className="group-businesses-header">

          <div>

            <div className="group-businesses-label">
              <span></span>
              OUR OTHER BUSINESSES
            </div>

            <h2>
              More than travel.
              <br />
              <em>We build experiences.</em>
            </h2>

          </div>

          <p>
            Dream Way Groups brings together businesses
            that shape the way people live, move and
            experience the world around them.
          </p>

        </div>


        {/* Business Cards */}

        <div className="row g-4">

  {businesses.map((business) => (

    <div
      className="col-lg-6"
      key={business.number}
    >

      <a
        href={business.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`business-card ${business.theme}`}
      >

        {/* Background Image */}

        <img
          src={business.image}
          alt={business.title}
          className="business-card-image"
        />

        {/* Image Overlay */}

        <div className="business-card-overlay"></div>


        {/* Content */}

        <div className="business-card-content">

          <div className="business-card-top">

            <span className="business-number">
              {business.number}
            </span>

            <span className="business-label">
              {business.label}
            </span>

          </div>


          <div className="business-card-main">

            <h3>
              {business.title}
            </h3>

            <p>
              {business.description}
            </p>

          </div>


          <div className="business-card-bottom">

            <span>
              Visit Website
            </span>

            <span className="business-arrow">
              ↗
            </span>

          </div>

        </div>

      </a>

    </div>

  ))}

</div>

      </div>

    </section>
  );
}

export default GroupBusinesses;