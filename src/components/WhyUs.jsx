

const reasons = [
  {
    number: "01",
    title: "Personalized Journeys",
    description:
      "Travel experiences thoughtfully shaped around your interests, pace and expectations."
  },
  {
    number: "02",
    title: "Trusted Planning",
    description:
      "From the first conversation to the final day, every important detail is carefully planned."
  },
  {
    number: "03",
    title: "Handpicked Experiences",
    description:
      "We focus on destinations and experiences that make your journey genuinely worth remembering."
  },
  {
    number: "04",
    title: "Support When It Matters",
    description:
      "A reliable travel partner throughout your journey, so you can focus on enjoying the experience."
  }
];

function WhyUs() {
  return (
    <section className="why-us-section">

      <div className="container">

        <div className="row g-5 align-items-start">

          {/* LEFT SIDE */}

          <div className="col-lg-5">

            <div className="why-us-label">
              <span></span>
              WHY DREAM WAY GROUPS
            </div>

            <h2 className="why-us-title">
              Travel isn't just about
              <br />
              <em>reaching a destination.</em>
            </h2>

            <p className="why-us-description">
              It's about how you experience it. We bring together
              thoughtful planning, trusted service and meaningful
              experiences to make every journey feel effortless.
            </p>

            <div className="why-us-signature">
              <span className="why-us-line"></span>
              <span>Your journey. Our way.</span>
            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="col-lg-7">

            <div className="why-us-list">

              {reasons.map((reason) => (

                <div
                  className="why-us-item"
                  key={reason.number}
                >

                  <div className="why-us-number">
                    {reason.number}
                  </div>

                  <div className="why-us-content">

                    <h3>
                      {reason.title}
                    </h3>

                    <p>
                      {reason.description}
                    </p>

                  </div>

                  <div className="why-us-arrow">
                    →
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* TRUST STATS */}

        <div className="why-us-stats">

          <div className="why-us-stat">

            <strong>50+</strong>

            <span>
              Destinations
            </span>

          </div>


          <div className="why-us-stat-divider"></div>


          <div className="why-us-stat">

            <strong>1000+</strong>

            <span>
              Happy Travellers
            </span>

          </div>


          <div className="why-us-stat-divider"></div>


          <div className="why-us-stat">

            <strong>4.9/5</strong>

            <span>
              Travel Experience
            </span>

          </div>


          <div className="why-us-stat-divider"></div>


          <div className="why-us-stat">

            <strong>24/7</strong>

            <span>
              Travel Support
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;