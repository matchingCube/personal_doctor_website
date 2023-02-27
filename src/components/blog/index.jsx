import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addThumbUp,
  addThumbDown,
} from "../../features/currentData/currentData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";
import { firestore } from "../../firebase_setup/firebase";
import { doc, updateDoc } from "firebase/firestore";

function Blog() {
  const currentBlogData = useSelector(
    (state) => state.currentData.currentBlogData
  );
  const dispatch = useDispatch();
  const updateThumbUp = async (e) => {
    e.preventDefault();
    const updateRef = doc(firestore, "blog_data", currentBlogData.id);
    await updateDoc(updateRef, { thumbUp: currentBlogData.thumb_up + 1 })
      .then((res) => {
        console.log("thumbUp updated to: ", currentBlogData.thumb_up + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const updateThumbDown = async (e) => {
    e.preventDefault();
    const updateRef = doc(firestore, "blog_data", currentBlogData.id);
    await updateDoc(updateRef, { thumbDown: currentBlogData.thumb_down + 1 })
      .then((res) => {
        console.log("thumbDown updated to: ", currentBlogData.thumb_down + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <span className="subtitle" style={{ fontWeight: 600 }}>
                  ALL POSTS
                </span>
              </div>
            </Link>
          </div>
          <div className="blog-page-title">
            {currentBlogData ? currentBlogData.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div
          className="blog-page-img"
          style={{ backgroundImage: `url(${currentBlogData.image})` }}
        ></div>
      </div>
      <div className="row nomargin" style={{ marginTop: 30 }}>
        <div className="blog-content-top">
          <div className="blog-author-wrapper">
            <div className="margin-right">
              <div className="blog-author-text">Written by</div>
              <div className="text-weight-medium">Dr. Alex Chan</div>
            </div>
            <div className="margin-right">
              <div className="blog-author-text">Published on</div>
              <div className="text-weight-medium">{currentBlogData.date}</div>
            </div>
            <div className="margin-right">
              <div className="blog-author-text">Subject</div>
              <div className="text-weight-medium">
                {currentBlogData.subject}
              </div>
            </div>
          </div>
          <div className="blog-author-wrapper">
            <div className="margin-right d-flex align-items-center">
              <Button
                variant="success"
                style={{ marginRight: 10 }}
                onClick={(e) => {
                  dispatch(addThumbUp());
                  updateThumbUp(e);
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </Button>
              <span>{currentBlogData.thumb_up}</span>
            </div>
            <div className="margin-right d-flex align-items-center">
              <Button
                variant="warning"
                style={{ marginRight: 10 }}
                onClick={(e) => {
                  dispatch(addThumbDown());
                  updateThumbDown(e);
                }}
              >
                <FontAwesomeIcon icon={faThumbsDown} />
              </Button>
              <span>{currentBlogData.thumb_down}</span>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="learn-hero-content" style={{ textAlign: "left" }}>
            {currentBlogData ? currentBlogData.content : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin" style={{ marginTop: 30 }}>
        <div className="margin-auto" style={{ maxWidth: 1400 }}>
          <div className="social-wrapper">
            <a
              className="social-box"
              href="https://www.instagram.com/dralexchan/"
            >
              <img
                src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c520c1569c64_DRK-instagram.svg"
                alt="instagram share"
                className="social-image large"
              />
            </a>
            <a
              className="social-box"
              href={`https://www.facebook.com/sharer/sharer.php?u=your_website_domain/blog/${currentBlogData.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c50fea569c62_DRK-facebook-f.svg"
                alt="facebook share"
                className="social-image large"
              />
            </a>
            <a
              className="social-box"
              href="https://www.linkedin.com/in/alex-chan-a12196214/?originalSubdomain=ca"
            >
              <img
                src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c54f40569c65_DRK-linkedin-2.svg"
                alt="linkedin share"
                className="social-image large"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
