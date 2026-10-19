
import packages from "../data/packages";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import GroupBusinesses from "../components/GroupBusinesses";
import CTASection from "../components/CTASection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import api from "../services/api";
function Home() {

  const [packages, setPackages] = useState([]);
const [packagesLoading, setPackagesLoading] = useState(true);

useEffect(() => {
    fetchPackages();
}, []);

const fetchPackages = async () => {
    try {
        const response = await api.get("/packages");

        if (response.data.success) {
            setPackages(response.data.data || []);
        }
    } catch (error) {
        console.error("Home packages API error:", error);
    } finally {
        setPackagesLoading(false);
    }
};


  return (
    <>
      {/* Hero */}

    <HeroSection />


      {/* Popular Packages */}

      <section className="popular-tours-section">

<div className="container">

    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <div className="tour-section-header">

        <div>

            <div className="tour-section-label">
                <span></span>
                OUR TOURS
            </div>

            <h2>
                Popular journeys,
                <br />
                <em>made for you.</em>
            </h2>

            <p>
                Handpicked experiences for your next escape.
            </p>

        </div>


        <Link
            to="/packages"
            className="tour-view-all"
        >
            Explore all
            <span>→</span>
        </Link>

    </div>


    {/* =====================================================
        PACKAGE CARDS
    ===================================================== */}

    {packagesLoading ? (

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
                Loading our tours...
            </p>

        </div>

    ) : packages.length > 0 ? (

        <div className="row g-4">

            {packages.slice(0, 3).map((item) => (

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

    ) : (

        <div className="text-center py-5">

            <i
                className="bi bi-map"
                style={{
                    fontSize: "2.5rem",
                    opacity: 0.5,
                }}
            ></i>

            <p className="text-muted mt-3 mb-0">
                No tour packages available at the moment.
            </p>

        </div>

    )}

</div>

</section>


<WhyUs />

<GroupBusinesses />

<CTASection />
    </>
  );
}

export default Home;