import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          PAGE HERO
      ========================================= */}

      <section className="about-hero">

        <div className="container">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              ABOUT DREAM WAY GROUPS
            </span>

            <h1>
              We believe every
              <br />
              journey should be
              <span> worth remembering.</span>
            </h1>

            <p>
              Creating thoughtful travel experiences with
              simplicity, care and a little more meaning.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          OUR STORY
      ========================================= */}

      <section className="about-story">

        <div className="container">

          <div className="row align-items-center g-5">

            {/* Image */}

            <div className="col-lg-6">

              <div className="about-story-image">

                <img
                  src="/images/travel-hero.jpg"
                  alt="Travel experience"
                />

                <div className="about-image-badge">
                  <strong>01</strong>
                  <span>Our story</span>
                </div>

              </div>

            </div>


            {/* Content */}

            <div className="col-lg-6">

              <div className="about-story-content">

                <span className="section-label">
                  WHO WE ARE
                </span>

                <h2>
                  Travel differently.
                </h2>

                <p className="about-lead">
                  Dream Way Groups was built around a simple idea:
                  travel should be more than moving from one place
                  to another.
                </p>

                <p>
                  It should feel effortless, personal and memorable.
                  From discovering the right destination to planning
                  the details of your journey, we focus on creating
                  experiences that work for you.
                </p>

                <p>
                  Whether it's a family holiday, a group getaway or
                  a carefully planned escape, our approach is rooted
                  in thoughtful planning and genuine care.
                </p>

                <div className="about-signature">
                  <span className="signature-line"></span>
                  <span>Your journey. Our way.</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="about-stats">

        <div className="container">

          <div className="about-stats-wrapper">

            <div className="about-stat">
              <strong>50+</strong>
              <span>Destinations</span>
            </div>

            <div className="about-stat-divider"></div>

            <div className="about-stat">
              <strong>1000+</strong>
              <span>Happy Travellers</span>
            </div>

            <div className="about-stat-divider"></div>

            <div className="about-stat">
              <strong>4.9/5</strong>
              <span>Travel Experience</span>
            </div>

            <div className="about-stat-divider"></div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Travel Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          OUR BELIEFS
      ========================================= */}

      <section className="about-beliefs">

        <div className="container">

          <div className="row">

            <div className="col-lg-5">

              <span className="section-label">
                WHAT WE BELIEVE
              </span>

              <h2>
                The way we
                <br />
                approach travel.
              </h2>

              <p>
                Good travel planning is not about adding more.
                It's about getting the important things right.
              </p>

            </div>


            <div className="col-lg-7">

              <div className="belief-list">

                <div className="belief-item">

                  <div className="belief-number">
                    01
                  </div>

                  <div>
                    <h3>Personal</h3>
                    <p>
                      Every traveller is different. We believe
                      your journey should reflect your interests,
                      pace and priorities.
                    </p>
                  </div>

                </div>


                <div className="belief-item">

                  <div className="belief-number">
                    02
                  </div>

                  <div>
                    <h3>Simple</h3>
                    <p>
                      Travel planning shouldn't feel complicated.
                      We take care of the details so you can focus
                      on enjoying the journey.
                    </p>
                  </div>

                </div>


                <div className="belief-item">

                  <div className="belief-number">
                    03
                  </div>

                  <div>
                    <h3>Memorable</h3>
                    <p>
                      The best trips become stories you continue
                      telling long after you've returned home.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GROUP VISION
      ========================================= */}

      <section className="about-group">

        <div className="container">

          <div className="about-group-wrapper">

            <div className="about-group-content">

              <span className="section-label">
                DREAM WAY GROUPS
              </span>

              <h2>
                More than travel.
                <br />
                <span>One group. Many possibilities.</span>
              </h2>

              <p>
                Dream Way Groups brings together businesses across
                travel, real estate and interiors — connected by
                one shared vision of creating better experiences.
              </p>

            </div>


            <div className="about-group-links">

              <a
                href="https://your-real-estate-website.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <small>01</small>
                  Real Estate
                </span>

                <i className="bi bi-arrow-up-right"></i>
              </a>


              <a
                href="https://your-interiors-website.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <small>02</small>
                  Interiors
                </span>

                <i className="bi bi-arrow-up-right"></i>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <div className="container">

          <div className="about-cta-inner">

            <span className="section-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Ready to make your
              <span> next trip memorable?</span>
            </h2>

            <p>
              Let's create an experience around you.
            </p>

            <Link
              to="/packages"
              className="about-cta-button"
            >
              Explore Our Tours
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;