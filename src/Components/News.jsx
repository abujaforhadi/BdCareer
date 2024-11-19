import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-5">
        News & Resource
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {/* Card 1 */}
        <div
          className="card bg-base-100 shadow-xl"
          data-aos="fade-up" // Animation direction for Card 1
        >
          <figure>
            <img
              src="https://freevetis.com/jobfusion/wp-content/uploads/sites/53/2023/01/successful-company-with-happy-employees-in-modern-2021-08-30-02-11-39-utc.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Maximizing Your Design Potential: Tips and Tricks
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Unlock your creative potential with practical design tips. Learn strategies to enhance efficiency and effectiveness in your projects. Stay inspired with fresh ideas for modern design challenges.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="card bg-base-100 shadow-xl"
          data-aos="fade-left" // Animation direction for Card 2
        >
          <figure>
            <img
              src="https://freevetis.com/jobfusion/wp-content/uploads/sites/53/2023/01/successful-company-with-happy-employees-in-modern-2021-08-29-15-34-42-utc.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              The Future of Design: Trends to Watch in 2023
            </h2>
            <p>
              Discover emerging design trends shaping the industry. From AI integration to sustainable practices, stay ahead of the curve. Explore innovations that define the future of creative solutions.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="card bg-base-100 shadow-xl"
          data-aos="fade-right" // Animation direction for Card 3
        >
          <figure>
            <img
              src="https://freevetis.com/jobfusion/wp-content/uploads/sites/53/2023/01/successful-company-with-happy-employees-in-modern-2021-08-27-09-36-27-utc-1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Transforming Ideas into Impactful Designs
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Learn how to turn creative ideas into meaningful designs. Enhance your storytelling with visuals that resonate. Discover strategies for creating lasting impressions through design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
