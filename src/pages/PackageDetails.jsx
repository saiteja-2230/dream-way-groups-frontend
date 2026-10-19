import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function PackageDetails() {
    const { slug } = useParams();

    const [packageItem, setPackageItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const descriptionToList = (description) => {
    if (!description) return [];

    // If admin has entered multiple lines,
    // treat each line as a separate point.
    const lines = description
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    if (lines.length > 1) {
        return lines;
    }

    // Convert a normal paragraph into sentences.
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("en", {
            granularity: "sentence",
        });

        return Array.from(
            segmenter.segment(description),
            (item) => item.segment.trim()
        ).filter(Boolean);
    }

    // Fallback
    return description
        .split(/(?<=[.!?])\s+/)
        .map((item) => item.trim())
        .filter(Boolean);
};

    useEffect(() => {
        fetchPackage();
    }, [slug]);

    const fetchPackage = async () => {
        try {
            setLoading(true);
            setError("");
            setPackageItem(null);

            const response = await api.get(`/packages/${slug}`);

            if (response.data.success) {
                setPackageItem(response.data.data);
            } else {
                setError(
                    response.data.message ||
                    "Package not found."
                );
            }
        } catch (err) {
            console.error("Package details API error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load package details."
            );
        } finally {
            setLoading(false);
        }
    };


    /* =========================================================
       IMAGE URL HELPER
    ========================================================= */

    const getImageUrl = (image) => {
        if (!image) {
            return null;
        }

        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        const apiUrl =
            import.meta.env.VITE_API_URL ||
            "http://localhost:8000/api";

        const baseUrl = apiUrl.replace(/\/api\/?$/, "");

        if (image.startsWith("/storage/")) {
            return `${baseUrl}${image}`;
        }

        if (image.startsWith("storage/")) {
            return `${baseUrl}/${image}`;
        }

        return `${baseUrl}/storage/${image}`;
    };


    /* =========================================================
       LOADING
    ========================================================= */

    if (loading) {
        return (
            <main className="package-details-page">

                <section className="py-5">

                    <div className="container">

                        <div className="text-center py-5">

                            <div
                                className="spinner-border"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>

                            <p className="text-muted mt-3 mb-0">
                                Loading package details...
                            </p>

                        </div>

                    </div>

                </section>

            </main>
        );
    }


    /* =========================================================
       ERROR / NOT FOUND
    ========================================================= */

    if (error || !packageItem) {
        return (
            <main className="package-not-found">

                <div className="container">

                    <span className="package-eyebrow">
                        TRAVEL PACKAGE
                    </span>

                    <h1>
                        Package not found
                    </h1>

                    <p>
                        {error ||
                            "The package you're looking for may have been removed or is no longer available."}
                    </p>

                    <Link
                        to="/packages"
                        className="package-back-button"
                    >
                        <i className="bi bi-arrow-left"></i>
                        Back to Packages
                    </Link>

                </div>

            </main>
        );
    }


    /* =========================================================
       PACKAGE DATA
    ========================================================= */

    const title =
        packageItem.name ||
        "Untitled Package";

    const destination =
        packageItem.destination ||
        "India";

    const shortDescription =
        packageItem.short_description ||
        "";

    const duration =
        packageItem.duration_days &&
        packageItem.duration_nights !== null &&
        packageItem.duration_nights !== undefined
            ? `${packageItem.duration_days} Days / ${packageItem.duration_nights} Nights`
            : packageItem.duration_days
                ? `${packageItem.duration_days} Days`
                : "Flexible Duration";

    const basePrice =
        Number(packageItem.base_price) || 0;

    const formattedPrice =
        basePrice > 0
            ? basePrice.toLocaleString("en-IN")
            : "On Request";

    const mainImage =
        getImageUrl(packageItem.main_image);


    return (
        <main className="package-details-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="package-detail-hero">

                <div className="container">

                    <div className="package-hero-grid">

                        {/* ==============================
                            IMAGE
                        ============================== */}

                        <div className="package-hero-image">

                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt={title}
                                />
                            ) : (
                                <div
                                    className="package-hero-image-placeholder"
                                >
                                    <i className="bi bi-image"></i>
                                </div>
                            )}

                            <div className="package-image-overlay"></div>

                            <div className="package-image-location">

                                <i className="bi bi-geo-alt-fill"></i>

                                {destination}

                            </div>

                        </div>


                        {/* ==============================
                            INFORMATION
                        ============================== */}

                        <div className="package-hero-info">

                            <span className="package-eyebrow">

                                {destination.toUpperCase()}

                            </span>

                            <h1>
                                {title}
                            </h1>


                            <div className="package-duration">

                                <i className="bi bi-calendar3"></i>

                                <span>
                                    {duration}
                                </span>

                            </div>


                            <p className="package-short-description">

                                {shortDescription}

                            </p>


                            {/* PRICE */}

                            <div className="package-price-box">

                                <div>

                                    <small>
                                        STARTING FROM
                                    </small>

                                    <strong>

                                        {formattedPrice !== "On Request"
                                            ? `₹${formattedPrice}`
                                            : formattedPrice}

                                    </strong>

                                    <span>
                                        per person
                                    </span>

                                </div>

                            </div>


                           <a
    href={`https://wa.me/917386994959?text=${encodeURIComponent(
        `Hello Dream Way,\n\nI am interested in the package:\n"${packageItem?.name}"\n\nPlease share the package details, available dates, pricing and booking information.\n\nThank you.`
    )}`}
    className="package-enquire-button"
    target="_blank"
    rel="noopener noreferrer"
>
    Enquire Now
    <i className="bi bi-arrow-up-right"></i>
</a>


                            <div className="package-trust">

                                <i className="bi bi-shield-check"></i>

                                <span>
                                    Talk to our travel team for customised options
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                GALLERY
            ================================================= */}

            {packageItem.images &&
                packageItem.images.length > 0 && (

                    <section className="package-gallery-section">

                        <div className="container">

                            <div className="package-gallery-grid">

                                {packageItem.images.map(
                                    (image, index) => {

                                        const imageUrl =
                                            getImageUrl(
                                                image.image
                                            );

                                        return (
                                            <div
                                                className="package-gallery-item"
                                                key={image.id || index}
                                            >

                                                {imageUrl && (
                                                    <img
                                                        src={imageUrl}
                                                        alt={
                                                            image.alt_text ||
                                                            `${title} ${index + 1}`
                                                        }
                                                    />
                                                )}

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </section>

                )}


         {/* =================================================
                HIGHLIGHTS
            ================================================= */}

{packageItem?.highlights &&
    packageItem.highlights.length > 0 && (
        <section className="package-highlights-section">
            <div className="container">

                {/* Section Heading */}
                <div className="package-highlights-header">

                    <div>
                        <span className="section-label">
                            EXPERIENCE HIGHLIGHTS
                        </span>

                        <h2>
                            What makes this
                            <br />
                            journey special.
                        </h2>
                    </div>

                    <div className="highlights-header-decoration">
                        <span></span>
                        <i className="bi bi-airplane"></i>
                    </div>

                </div>

                {/* Highlight Cards */}
                <div className="package-highlights-grid">

                    {packageItem.highlights.map(
                        (highlight, index) => {

                            const highlightTitle =
                                highlight?.title ||
                                highlight?.item ||
                                highlight;

                            /*
                             * Different accent for each card.
                             * This works automatically even when
                             * admin adds more highlights.
                             */
                            const accentClasses = [
                                "highlight-gold",
                                "highlight-blue",
                                "highlight-green",
                                "highlight-coral"
                            ];

                            const iconClasses = [
                                "bi-building",
                                "bi-bus-front-fill",
                                "bi-cup-hot-fill",
                                "bi-camera-fill"
                            ];

                            return (
                                <div
                                    className={`package-highlight ${accentClasses[index % accentClasses.length]}`}
                                    key={
                                        highlight?.id ||
                                        index
                                    }
                                >

                                    {/* Decorative Shape */}
                                    <span className="highlight-shape"></span>

                                    {/* Top */}
                                    <div className="highlight-card-top">

                                        <span className="highlight-number">
                                            {String(
                                                index + 1
                                            ).padStart(2, "0")}
                                        </span>

                                        <span className="highlight-line"></span>

                                    </div>

                                    {/* Icon */}
                                    <div className="highlight-icon">
                                        <i
                                            className={`bi ${iconClasses[index % iconClasses.length]}`}
                                        ></i>
                                    </div>

                                    {/* Content */}
                                    <div className="highlight-content">

                                        <h3 className="highlight-text">
                                            {highlightTitle}
                                        </h3>

                                        {highlight?.description && (
                                            <p className="highlight-description">
                                                {
                                                    highlight.description
                                                }
                                            </p>
                                        )}

                                    </div>

                                    {/* Bottom */}
                                    <div className="highlight-card-bottom">

                                        <span className="highlight-accent-line"></span>

                                        <span className="highlight-arrow">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>

                                    </div>

                                </div>
                            );
                        }
                    )}

                </div>

            </div>
        </section>
    )}


            {/* =================================================
                OVERVIEW
            ================================================= */}

            {packageItem.overview && (

                <section className="package-overview-section">

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4">

                                <span className="section-label">
                                    ABOUT THE JOURNEY
                                </span>

                                <h2>
                                    More than
                                    <br />
                                    just a trip.
                                </h2>

                            </div>


                            <div className="col-lg-7 offset-lg-1">

                                <p className="package-overview-text">

                                    {packageItem.overview}

                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            )}


           {/* =================================================
                ITINERARY
            ================================================= */}

{packageItem?.itineraries &&
    packageItem.itineraries.length > 0 && (
        <section className="package-itinerary-section">
            <div className="container">

                {/* Section Heading */}
                <div className="itinerary-section-heading">

                    <span className="section-label">
                        YOUR ITINERARY
                    </span>

                    <h2>
                        Every day,
                        <br />
                        thoughtfully planned.
                    </h2>

                    <p>
                        A carefully structured journey with
                        enough room to explore, relax and enjoy
                        the experience.
                    </p>

                </div>


                {/* Itinerary Grid */}
                <div className="itinerary-list">

                    {packageItem.itineraries.map(
                        (day, index) => (
                            <div
                                className="itinerary-item"
                                key={
                                    day.id ||
                                    index
                                }
                            >

                                {/* Day Number */}
                                <div className="itinerary-number">
                                    {String(
                                        day.day_number ||
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </div>


                                {/* Content */}
                                <div className="itinerary-content">

                                    <div className="itinerary-top">

                                        <div>

                                            {day.location && (
                                                <span className="itinerary-location">
                                                    <i className="bi bi-geo-alt"></i>

                                                    {day.location}
                                                </span>
                                            )}

                                            <h3>
                                                {day.title}
                                            </h3>

                                        </div>

                                    </div>


                                    {/* Description List */}
                                    {day.description && (
                                        <ul className="itinerary-description-list">

                                            {descriptionToList(
                                                day.description
                                            ).map(
                                                (
                                                    point,
                                                    pointIndex
                                                ) => (
                                                    <li
                                                        key={
                                                            pointIndex
                                                        }
                                                    >
                                                        <span className="itinerary-bullet">
                                                            <i className="bi bi-check2"></i>
                                                        </span>

                                                        <span>
                                                            {point}
                                                        </span>
                                                    </li>
                                                )
                                            )}

                                        </ul>
                                    )}


                                    {/* Meals */}
                                    {day.meals &&
                                        day.meals.length >
                                            0 && (
                                            <div className="itinerary-activities">

                                                {day.meals.map(
                                                    (
                                                        meal,
                                                        mealIndex
                                                    ) => {

                                                        const mealName =
                                                            typeof meal ===
                                                            "string"
                                                                ? meal
                                                                : meal.meal;

                                                        return (
                                                            <span
                                                                key={
                                                                    meal.id ||
                                                                    mealIndex
                                                                }
                                                            >
                                                                <i className="bi bi-check2"></i>

                                                                {mealName}
                                                            </span>
                                                        );
                                                    }
                                                )}

                                            </div>
                                        )}

                                </div>

                            </div>
                        )
                    )}

                </div>

            </div>
        </section>
    )}

           {/* =================================================
                ROOM PRICES
            ================================================= */}

{packageItem?.room_prices &&
    packageItem.room_prices.length > 0 && (
        <section className="package-room-prices-section">

            <div className="container">

                {/* Section Header */}
                <div className="room-prices-header">

                    <div>
                        <span className="section-label">
                            ROOM OPTIONS
                        </span>

                        <h2>
                            Choose your
                            <br />
                            occupancy.
                        </h2>
                    </div>

                    <div className="room-header-decoration">
                        <i className="bi bi-house-heart"></i>
                    </div>

                </div>


                {/* Room Cards */}
                <div className="room-prices-grid">

                    {packageItem.room_prices.map(
                        (room, index) => {

                            const roomType =
                                room?.occupancy_type ||
                                "Room";

                            const roomTypeLower =
                                roomType.toLowerCase();

                            let roomIcon =
                                "bi-person-fill";

                            if (
                                roomTypeLower.includes(
                                    "double"
                                )
                            ) {
                                roomIcon =
                                    "bi-people-fill";
                            }

                            if (
                                roomTypeLower.includes(
                                    "triple"
                                )
                            ) {
                                roomIcon =
                                    "bi-people-fill";
                            }

                            const roomColors = [
                                "room-gold",
                                "room-blue",
                                "room-green",
                                "room-coral"
                            ];

                            return (
                                <div
                                    className={`room-price-card ${
                                        roomColors[
                                            index %
                                                roomColors.length
                                        ]
                                    }`}
                                    key={
                                        room?.id ||
                                        index
                                    }
                                >

                                    {/* Decorative Shape */}
                                    <span className="room-card-shape"></span>


                                    {/* Card Top */}
                                    <div className="room-card-top">

                                        <span className="room-number">
                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <span className="room-top-line"></span>

                                    </div>


                                    {/* Occupancy Icon */}
                                    <div className="room-icon">
                                        <i
                                            className={`bi ${roomIcon}`}
                                        ></i>
                                    </div>


                                    {/* Room Type */}
                                    <h3 className="room-type">
                                        {roomType}
                                    </h3>


                                    {/* Price */}
                                    <div className="room-price">

                                        <span className="room-currency">
                                            ₹
                                        </span>

                                        <span>
                                            {Number(
                                                room.price
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </span>

                                    </div>

                                    <span className="room-price-label">
                                        per person
                                    </span>


                                    {/* Notes */}
                                    {room?.notes && (
                                        <p className="room-notes">
                                            {room.notes}
                                        </p>
                                    )}


                                    {/* Bottom */}
                                    <div className="room-card-bottom">

                                        <span className="room-accent-line"></span>

                                        <span className="room-check">
                                            <i className="bi bi-check2"></i>
                                        </span>

                                    </div>

                                </div>
                            );
                        }
                    )}

                </div>

            </div>

        </section>
    )}


            {/* =================================================
                INCLUSIONS / EXCLUSIONS
            ================================================= */}

            {(packageItem.inclusions?.length > 0 ||
                packageItem.exclusions?.length > 0) && (

                <section className="package-inclusions-section">

                    <div className="container">

                        <div className="row g-4">

                            {/* INCLUSIONS */}

                            {packageItem.inclusions?.length > 0 && (

                                <div className="col-lg-6">

                                    <div className="package-list-card included">

                                        <div className="package-list-card-header">

                                            <div className="package-list-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </div>

                                            <div>

                                                <span>
                                                    INCLUDED
                                                </span>

                                                <h3>
                                                    What's included
                                                </h3>

                                            </div>

                                        </div>


                                        <ul>

                                            {packageItem.inclusions.map(
                                                (item, index) => (

                                                    <li
                                                        key={
                                                            item.id ||
                                                            index
                                                        }
                                                    >

                                                        <i className="bi bi-check2"></i>

                                                        {item.item ||
                                                            item}

                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    </div>

                                </div>

                            )}


                            {/* EXCLUSIONS */}

                            {packageItem.exclusions?.length > 0 && (

                                <div className="col-lg-6">

                                    <div className="package-list-card excluded">

                                        <div className="package-list-card-header">

                                            <div className="package-list-icon">
                                                <i className="bi bi-dash-lg"></i>
                                            </div>

                                            <div>

                                                <span>
                                                    NOT INCLUDED
                                                </span>

                                                <h3>
                                                    What's excluded
                                                </h3>

                                            </div>

                                        </div>


                                        <ul>

                                            {packageItem.exclusions.map(
                                                (item, index) => (

                                                    <li
                                                        key={
                                                            item.id ||
                                                            index
                                                        }
                                                    >

                                                        <i className="bi bi-x"></i>

                                                        {item.item ||
                                                            item}

                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    </div>

                                </div>

                            )}

                        </div>

                    </div>

                </section>

            )}


            {/* =================================================
                FAQ
            ================================================= */}

            {packageItem.faqs &&
                packageItem.faqs.length > 0 && (

                    <section className="package-faq-section py-5">

                        <div className="container">

                            <div className="row">

                                <div className="col-lg-4">

                                    <span className="section-label">
                                        FREQUENTLY ASKED QUESTIONS
                                    </span>

                                    <h2>
                                        Good to know.
                                    </h2>

                                </div>


                                <div className="col-lg-8">

                                    <div
                                        className="accordion"
                                        id="packageFaq"
                                    >

                                        {packageItem.faqs.map(
                                            (faq, index) => (

                                                <div
                                                    className="accordion-item"
                                                    key={
                                                        faq.id ||
                                                        index
                                                    }
                                                >

                                                    <h2
                                                        className="accordion-header"
                                                        id={`heading-${index}`}
                                                    >

                                                        <button
                                                            className={`accordion-button ${
                                                                index !== 0
                                                                    ? "collapsed"
                                                                    : ""
                                                            }`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#faq-${index}`}
                                                            aria-expanded={
                                                                index ===
                                                                0
                                                            }
                                                            aria-controls={`faq-${index}`}
                                                        >

                                                            {faq.question}

                                                        </button>

                                                    </h2>


                                                    <div
                                                        id={`faq-${index}`}
                                                        className={`accordion-collapse collapse ${
                                                            index === 0
                                                                ? "show"
                                                                : ""
                                                        }`}
                                                        aria-labelledby={`heading-${index}`}
                                                        data-bs-parent="#packageFaq"
                                                    >

                                                        <div className="accordion-body">

                                                            {faq.answer}

                                                        </div>

                                                    </div>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                )}


            {/* =================================================
                DEPARTURES
            ================================================= */}

            {packageItem.departures &&
                packageItem.departures.length > 0 && (

                    <section className="package-departures-section py-5">

                        <div className="container">

                            <span className="section-label">
                                UPCOMING DEPARTURES
                            </span>

                            <h2 className="mb-4">
                                Choose your travel date
                            </h2>

                            <div className="row g-4">

                                {packageItem.departures.map(
                                    (departure, index) => (

                                        <div
                                            className="col-md-6"
                                            key={
                                                departure.id ||
                                                index
                                            }
                                        >

                                            <div className="card h-100">

                                                <div className="card-body">

                                                    <div className="d-flex justify-content-between align-items-start">

                                                        <div>

                                                            <small className="text-muted">
                                                                DEPARTURE
                                                            </small>

                                                            <h5>
                                                                {departure.departure_date}
                                                            </h5>

                                                        </div>

                                                        {departure.status && (

                                                            <span className="badge bg-success">
                                                                {departure.status}
                                                            </span>

                                                        )}

                                                    </div>


                                                    {departure.return_date && (

                                                        <p className="mb-2">

                                                            <strong>
                                                                Return:
                                                            </strong>{" "}

                                                            {departure.return_date}

                                                        </p>

                                                    )}


                                                    {departure.available_seats !==
                                                        null &&
                                                        departure.available_seats !==
                                                            undefined && (

                                                            <p className="mb-2">

                                                                <strong>
                                                                    Seats:
                                                                </strong>{" "}

                                                                {departure.available_seats -
                                                                    (
                                                                        departure.booked_seats ||
                                                                        0
                                                                    )}{" "}
                                                                available

                                                            </p>

                                                        )}


                                                    {departure.price && (

                                                        <h5 className="mb-0">

                                                            ₹
                                                            {Number(
                                                                departure.price
                                                            ).toLocaleString(
                                                                "en-IN"
                                                            )}

                                                        </h5>

                                                    )}

                                                </div>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    </section>

                )}


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="package-detail-cta">

                <div className="container">

                    <div className="package-cta-wrapper">

                        <div>

                            <span className="section-label">
                                READY TO TRAVEL?
                            </span>

                            <h2>
                                Let's make this
                                <span> journey yours.</span>
                            </h2>

                            <p>
                                Have questions or want to customise this package?
                                Our travel team is ready to help.
                            </p>

                        </div>


                        <Link
                            to="/contact"
                            className="package-cta-button"
                        >

                            Enquire About This Package

                            <i className="bi bi-arrow-up-right"></i>

                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default PackageDetails;