import { Link } from "react-router-dom";

function Investments() {
    const plans = [
        {
            number: "01",
            icon: "bi-piggy-bank-fill",
            title: "Monthly Savings",
            description:
                "Build a consistent savings habit with a plan structured around your monthly income and goals.",
        },
        {
            number: "02",
            icon: "bi-bullseye",
            title: "Goal Planning",
            description:
                "Plan your finances around important goals such as education, travel, a home or future needs.",
        },
        {
            number: "03",
            icon: "bi-graph-up-arrow",
            title: "Investment Planning",
            description:
                "Understand different investment options and organize them according to your financial goals and time horizon.",
        },
        {
            number: "04",
            icon: "bi-shield-check",
            title: "Future Planning",
            description:
                "Create a long-term financial approach with attention to savings, liquidity and future requirements.",
        },
    ];

    return (
        <main className="investment-page">

            {/* =================================================
                    HERO
                ================================================= */}

            <section className="investment-hero">

                <div className="container">

                    <div className="investment-hero-grid">

                        <div className="investment-hero-content">

                            <span className="section-label">
                                INVESTMENTS & SAVINGS
                            </span>

                            <h1>
                                Plan today.
                                <br />
                                <span>Prepare for tomorrow.</span>
                            </h1>

                            <p>
                                A simple approach to organizing your
                                savings, financial goals and investment
                                planning based on your individual needs.
                            </p>

                            <a
                                href="https://wa.me/917386994959?text=Hello%20Dream%20Way,%20I%20would%20like%20to%20know%20more%20about%20your%20Investments%20and%20Savings%20Plan."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="investment-primary-button"
                            >
                                Talk to us
                                <i className="bi bi-arrow-up-right"></i>
                            </a>

                        </div>


                        {/* Visual */}
                        <div className="investment-hero-visual">

                            <div className="investment-circle investment-circle-one"></div>
                            <div className="investment-circle investment-circle-two"></div>

                            <div className="investment-main-card">

                                <div className="investment-card-icon">
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>

                                <span>
                                    FINANCIAL PLANNING
                                </span>

                                <h3>
                                    Small steps.
                                    <br />
                                    Long-term goals.
                                </h3>

                                <div className="investment-card-line"></div>

                                <div className="investment-card-bottom">
                                    <span>
                                        SAVINGS
                                    </span>

                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    INTRO
                ================================================= */}

            <section className="investment-intro">

                <div className="container">

                    <div className="investment-intro-grid">

                        <div>

                            <span className="section-label">
                                WHY PLAN?
                            </span>

                            <h2>
                                Give your money
                                <br />
                                a purpose.
                            </h2>

                        </div>

                        <div>

                            <p>
                                Financial planning becomes easier when
                                your savings and investments are connected
                                to clear goals. We help you understand
                                your requirements and organize your
                                approach in a simple and structured way.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    PLANNING OPTIONS
                ================================================= */}

            <section className="investment-plans">

                <div className="container">

                    <div className="investment-plans-heading">

                        <span className="section-label">
                            OUR APPROACH
                        </span>

                        <h2>
                            Plan around what
                            <br />
                            matters to you.
                        </h2>

                    </div>


                    <div className="investment-plans-grid">

                        {plans.map((plan) => (

                            <div
                                className="investment-plan-card"
                                key={plan.number}
                            >

                                <div className="investment-plan-top">

                                    <span>
                                        {plan.number}
                                    </span>

                                    <i
                                        className={`bi ${plan.icon}`}
                                    ></i>

                                </div>


                                <h3>
                                    {plan.title}
                                </h3>


                                <p>
                                    {plan.description}
                                </p>


                                <div className="investment-plan-bottom">
                                    <span></span>

                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                    PROCESS
                ================================================= */}

            <section className="investment-process">

                <div className="container">

                    <div className="investment-process-heading">

                        <span className="section-label">
                            SIMPLE PROCESS
                        </span>

                        <h2>
                            Start with a conversation.
                        </h2>

                    </div>


                    <div className="investment-process-grid">

                        <div className="investment-process-item">

                            <span>01</span>

                            <i className="bi bi-chat-dots"></i>

                            <h3>
                                Understand
                            </h3>

                            <p>
                                Tell us about your goals,
                                timeline and financial priorities.
                            </p>

                        </div>


                        <div className="investment-process-item">

                            <span>02</span>

                            <i className="bi bi-diagram-3"></i>

                            <h3>
                                Plan
                            </h3>

                            <p>
                                Organize your savings and
                                investment approach around
                                your requirements.
                            </p>

                        </div>


                        <div className="investment-process-item">

                            <span>03</span>

                            <i className="bi bi-check2-circle"></i>

                            <h3>
                                Move Forward
                            </h3>

                            <p>
                                Review your plan periodically
                                as your goals and circumstances
                                change.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                    CTA
                ================================================= */}

            <section className="investment-cta">

                <div className="container">

                    <div className="investment-cta-box">

                        <div>

                            <span className="section-label">
                                LET'S TALK
                            </span>

                            <h2>
                                Have a financial
                                <br />
                                goal in mind?
                            </h2>

                        </div>


                        <a
                            href="https://wa.me/917386994959?text=Hello%20Dream%20Way,%20I%20would%20like%20to%20discuss%20my%20savings%20and%20investment goals."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="investment-cta-button"
                        >
                            Start a conversation
                            <i className="bi bi-arrow-up-right"></i>
                        </a>

                    </div>

                </div>

            </section>


            {/* =================================================
                    DISCLAIMER
                ================================================= */}

            <section className="investment-disclaimer">

                <div className="container">

                    <p>
                        <i className="bi bi-info-circle"></i>
                        Information provided on this page is for
                        general planning purposes and does not
                        constitute personalized financial or
                        investment advice. Investment decisions
                        should be made after considering your
                        individual circumstances and applicable
                        professional guidance.
                    </p>

                </div>

            </section>

        </main>
    );
}

export default Investments;