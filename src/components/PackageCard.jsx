import { Link } from "react-router-dom";

function PackageCard({ packageItem }) {
    /**
     * ---------------------------------------------------------
     * IMAGE URL
     * ---------------------------------------------------------
     *
     * Supports:
     * 1. Full URL
     * 2. /storage/...
     * 3. storage/...
     * 4. Relative Laravel storage path
     */

    const getImageUrl = (image) => {
        if (!image) {
            return null;
        }

        // Already a complete URL
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

        // Already starts with /storage
        if (image.startsWith("/storage/")) {
            return `${baseUrl}${image}`;
        }

        // Starts with storage/
        if (image.startsWith("storage/")) {
            return `${baseUrl}/${image}`;
        }

        // Laravel storage path
        return `${baseUrl}/storage/${image}`;
    };


    /**
     * ---------------------------------------------------------
     * PACKAGE DATA
     * ---------------------------------------------------------
     */

    const imageUrl = getImageUrl(packageItem.main_image);

    const title = packageItem.name || "Untitled Package";

    const description =
        packageItem.short_description ||
        "Explore this wonderful travel experience with Dream Way.";

    const destination =
        packageItem.destination || "India";

    const durationDays =
        packageItem.duration_days
            ? `${packageItem.duration_days}D`
            : "";

    const durationNights =
        packageItem.duration_nights !== null &&
        packageItem.duration_nights !== undefined
            ? `${packageItem.duration_nights}N`
            : "";

    const duration =
        durationDays || durationNights
            ? `${durationDays}${durationDays && durationNights ? " / " : ""}${durationNights}`
            : "Flexible";


    /**
     * ---------------------------------------------------------
     * PRICE
     * ---------------------------------------------------------
     */

    const price = Number(packageItem.base_price);

    const formattedPrice =
        !isNaN(price) && price > 0
            ? price.toLocaleString("en-IN")
            : "On Request";


    /**
     * ---------------------------------------------------------
     * RENDER
     * ---------------------------------------------------------
     */

    return (
        <article className="tour-card">

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="tour-card-image">

                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <div className="tour-card-image-placeholder">
                        <i className="bi bi-image"></i>
                    </div>
                )}

                <div className="tour-image-overlay"></div>


                {/* Location */}

                <span className="tour-location">

                    <i className="bi bi-geo-alt-fill"></i>

                    {destination}

                </span>


                {/* Duration */}

                <span className="tour-duration">

                    {duration}

                </span>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="tour-card-content">

                <div className="tour-card-heading">

                    <h3>
                        {title}
                    </h3>

                    <p>
                        {description}
                    </p>

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="tour-card-footer">

                    <div className="tour-price">

                        <span>
                            Starting from
                        </span>

                        <strong>
                            {formattedPrice !== "On Request"
                                ? `₹${formattedPrice}`
                                : formattedPrice}
                        </strong>

                    </div>


                    <Link
                        to={`/packages/${packageItem.slug}`}
                        className="tour-explore-btn"
                    >

                        <span>
                            Explore
                        </span>

                        <span className="tour-arrow">
                            →
                        </span>

                    </Link>

                </div>

            </div>

        </article>
    );
}

export default PackageCard;