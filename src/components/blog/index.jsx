import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JsonData from "../../data/data.json";

function Blog() {
  const [blogPageData, setBlogPageData] = useState(JsonData.Learn.Hero);
  useEffect(() => {
    setBlogPageData(JsonData.Learn.Hero);
  }, []);
  return (
    <div
      className="page-padding"
      style={{ paddingTop: 170, marginBottom: 100 }}
    >
      <div className="row nomargin">
        <div className="col-md-9">
          <div style={{ padding: "10 0 20 0" }}>
            <Link to="/learn">
              <div className="d-flex align-items-center">
                <div style={{ color: "#000", marginRight: 5 }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 13L6 8L11 3"
                      stroke="CurrentColor"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
                <span className="subtitle" style={{ fontWeight: 600 }}>ALL POSTS</span>
              </div>
            </Link>
          </div>
          <div className="blog-page-title">
            {blogPageData ? blogPageData.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div
          className="blog-page-img"
          style={{ backgroundImage: `url(${blogPageData.heroImage})` }}
        ></div>
      </div>
      <div className="row nomargin">
        <div className="col-md-4 col-md-offset-4">
          <div className="learn-hero-content">
            {blogPageData ? blogPageData.content : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
