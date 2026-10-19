import { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import api from "../services/api";

function Packages() {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/packages");

            if (response.data.success) {
                setPackages(response.data.data || []);
            } else {
                setError(
                    response.data.message ||
                    "Failed to load tour packages."
                );
            }
        } catch (err) {
            console.error("Packages API error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load tour packages. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}

            <section className="page-header">

                <div className="container">

                    <h1 className="fw-bold">
                        Tour Packages
                    </h1>

                    <p className="text-muted mb-0">
                        Explore our handpicked travel experiences.
                    </p>

                </div>

            </section>


            {/* =====================================================
                PACKAGES
            ===================================================== */}

            <section className="py-5">

                <div className="container">

                    {/* ================================
                        LOADING
                    ================================= */}

                    {loading && (

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
                                Loading tour packages...
                            </p>

                        </div>

                    )}


                    {/* ================================
                        ERROR
                    ================================= */}

                    {!loading && error && (

                        <div className="text-center py-5">

                            <div className="alert alert-danger">

                                <i className="bi bi-exclamation-triangle me-2"></i>

                                {error}

                            </div>

                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={fetchPackages}
                            >
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                Try Again
                            </button>

                        </div>

                    )}


                    {/* ================================
                        PACKAGES LIST
                    ================================= */}

                    {!loading &&
                        !error &&
                        packages.length > 0 && (

                            <div className="row g-4">

                                {packages.map((item) => (

                                    <div
                                        className="col-md-6 col-lg-4"
                                        key={item.id}
                                    >
                                        <PackageCard
                                            packageItem={item}
                                        />
                                    </div>

                                ))}

                            </div>

                        )}


                    {/* ================================
                        NO PACKAGES
                    ================================= */}

                    {!loading &&
                        !error &&
                        packages.length === 0 && (

                            <div className="text-center py-5">

                                <div className="mb-3">

                                    <i
                                        className="bi bi-map"
                                        style={{
                                            fontSize: "3rem",
                                            opacity: 0.5,
                                        }}
                                    ></i>

                                </div>

                                <h4>
                                    No tour packages available
                                </h4>

                                <p className="text-muted mb-0">
                                    New travel experiences will be
                                    available here soon.
                                </p>

                            </div>

                        )}

                </div>

            </section>

        </main>
    );
}

export default Packages;