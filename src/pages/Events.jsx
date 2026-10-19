import { Link } from "react-router-dom";
import events from "../data/events";

function Events() {
    return (
        <main className="events-page">

            {/* =================================================
                    HERO
                ================================================= */}

            <section className="events-hero">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <span className="events-label">
                                EVENTS & CLUBBING
                            </span>

                            <h1>
                                Small celebrations.
                                <br />
                                <span>Beautifully planned.</span>
                            </h1>

                            <p className="events-hero-text">
                                From intimate kitty parties and birthdays
                                to lively music nights and family
                                gatherings, we help you create moments
                                worth remembering.
                            </p>

                            <div className="events-hero-actions">

                                <a
                                    href="#event-options"
                                    className="events-primary-button"
                                >
                                    Explore Events
                                    <i className="bi bi-arrow-down"></i>
                                </a>

                                <a
                                    href="https://wa.me/917386994959?text=Hello%20Dream%20Way,%20I%20would%20like%20to%20plan%20an%20event."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="events-secondary-button"
                                >
                                    Plan an Event
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>

                            </div>

                        </div>


                        <div className="col-lg-5">

                            <div className="events-hero-visual">

                                <div className="hero-circle hero-circle-one"></div>
                                <div className="hero-circle hero-circle-two"></div>

                                <div className="hero-event-card">

                                    <span className="hero-card-number">
                                        10+
                                    </span>

                                    <span className="hero-card-label">
                                        EVENT OPTIONS
                                    </span>

                                    <div className="hero-card-icon">
                                        <i className="bi bi-stars"></i>
                                    </div>

                                    <h3>
                                        Your occasion,
                                        <br />
                                        our planning.
                                    </h3>

                                </div>

                                <div className="floating-event-icon icon-one">
                                    <i className="bi bi-balloon-fill"></i>
                                </div>

                                <div className="floating-event-icon icon-two">
                                    <i className="bi bi-music-note-beamed"></i>
                                </div>

                                <div className="floating-event-icon icon-three">
                                    <i className="bi bi-heart-fill"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    INTRO
                ================================================= */}

            <section className="events-intro">

                <div className="container">

                    <div className="events-intro-grid">

                        <div>
                            <span className="section-label">
                                MADE FOR MOMENTS
                            </span>

                            <h2>
                                Whatever the occasion,
                                <br />
                                make it yours.
                            </h2>
                        </div>

                        <div>
                            <p>
                                Every gathering has its own personality.
                                Whether it is a small celebration with
                                close friends or an evening with colleagues,
                                we help arrange the space, food,
                                entertainment and little details that
                                make the occasion special.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    EVENT OPTIONS
                ================================================= */}

            <section
                className="event-options-section"
                id="event-options"
            >

                <div className="container">

                    <div className="event-options-heading">

                        <div>
                            <span className="section-label">
                                WHAT CAN WE ORGANIZE?
                            </span>

                            <h2>
                                Pick your occasion.
                            </h2>
                        </div>

                        <p>
                            Tell us what you are celebrating and
                            we will help you plan the experience
                            around it.
                        </p>

                    </div>


                    <div className="events-grid">

                        {events.map((event, index) => (

                            <div
                                className={`event-card event-card-${(index % 4) + 1}`}
                                key={event.id}
                            >

                                <div className="event-card-top">

                                    <span className="event-number">
                                        {String(index + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <span className="event-category">
                                        {event.category}
                                    </span>

                                </div>


                                <div className="event-icon">
                                    <i
                                        className={`bi ${event.icon}`}
                                    ></i>
                                </div>


                                <h3>
                                    {event.title}
                                </h3>


                                <p>
                                    {event.description}
                                </p>


                                <div className="event-features">

                                    {event.features.map(
                                        (feature, featureIndex) => (
                                            <span
                                                key={featureIndex}
                                            >
                                                <i className="bi bi-check2"></i>
                                                {feature}
                                            </span>
                                        )
                                    )}

                                </div>


                                <div className="event-card-bottom">

                                    <a
                                        href={`https://wa.me/917386994959?text=${encodeURIComponent(
                                            `Hello Dream Way,\n\nI am interested in organizing a "${event.title}". Please share the available options and details.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="event-enquire"
                                    >
                                        Enquire Now

                                        <span>
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                    HOW IT WORKS
                ================================================= */}

            <section className="events-process-section">

                <div className="container">

                    <div className="events-process-heading">

                        <span className="section-label">
                            SIMPLE PROCESS
                        </span>

                        <h2>
                            From idea to celebration.
                        </h2>

                    </div>


                    <div className="events-process-grid">

                        <div className="process-item">

                            <span className="process-number">
                                01
                            </span>

                            <i className="bi bi-chat-dots"></i>

                            <h3>
                                Tell us your plan
                            </h3>

                            <p>
                                Share your occasion, date,
                                number of guests and what
                                you have in mind.
                            </p>

                        </div>


                        <div className="process-item">

                            <span className="process-number">
                                02
                            </span>

                            <i className="bi bi-sliders"></i>

                            <h3>
                                Customize the experience
                            </h3>

                            <p>
                                We help you choose the right
                                arrangement, food, décor and
                                entertainment.
                            </p>

                        </div>


                        <div className="process-item">

                            <span className="process-number">
                                03
                            </span>

                            <i className="bi bi-stars"></i>

                            <h3>
                                Enjoy your celebration
                            </h3>

                            <p>
                                Relax and enjoy your event while
                                we take care of the planned
                                arrangements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    CTA
                ================================================= */}

            <section className="events-cta-section">

                <div className="container">

                    <div className="events-cta">

                        <div>

                            <span className="section-label">
                                HAVE SOMETHING SPECIAL IN MIND?
                            </span>

                            <h2>
                                Let's plan your
                                <br />
                                next celebration.
                            </h2>

                        </div>

                        <a
                            href="https://wa.me/917386994959?text=Hello%20Dream%20Way,%20I%20would%20like%20to%20discuss%20an%20event."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="events-cta-button"
                        >
                            Talk to us
                            <i className="bi bi-arrow-up-right"></i>
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Events;