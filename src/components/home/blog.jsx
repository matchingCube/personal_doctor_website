import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentBlogData } from "../../features/currentData/currentData";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

export const Blog = (props) => {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(firestore, "blog_data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div id="blog">
      <div className="container">
        <div className="row">
          <h4 className="blog-subtitle"> BLOG </h4>
          <h2 className="blog-title"> Insights, research, and news </h2>
          <Link to="/learn">
            <h3 className="blog-roundBtn" style={{ marginBottom: "100px" }}>
              {" "}
              READ MORE{" "}
            </h3>
          </Link>
          <MDBRow>
            <MDBCol md="6">
              <div className="blogRoundDiv">
                <img
                  src={blogData[0] ? blogData[0].image : "none"}
                  className="blog-image"
                  alt="left img"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">
                    {blogData[0] ? blogData[0].date : "none"}
                  </h3>
                  <h3>{blogData[0] ? blogData[0].title : "none"}</h3>
                  <h5>{blogData[0] ? blogData[0].subject : "none"}</h5>
                  <p style={{ maxHeight: 90, overflowY: "hidden" }}>
                    {blogData[0] ? blogData[0].content : "none"}
                  </p>
                  <Link
                    to={blogData[0] ? `/blog/${blogData[0].id}` : "/blog"}
                    onClick={() => {
                      dispatch(
                        setCurrentBlogData({
                          date: blogData[0].date,
                          image: blogData[0].image,
                          title: blogData[0].title,
                          subject: blogData[0].subject,
                          content: blogData[0].content,
                          thumb_up: blogData[0].thumbUp,
                          thumb_down: blogData[0].thumbDown,
                          blog_id: blogData[0].id,
                        })
                      );
                    }}
                  >
                    <p className="link">Read more</p>
                  </Link>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6" className="margin-down">
              <div className="blogRoundDiv">
                <img
                  src={blogData[1] ? blogData[1].image : "none"}
                  className="blog-image"
                  alt="right img"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">
                    {blogData[1] ? blogData[1].date : "none"}
                  </h3>
                  <h3>{blogData[1] ? blogData[1].title : "none"}</h3>
                  <h5>{blogData[1] ? blogData[1].subject : "none"}</h5>
                  <p style={{ maxHeight: 90, overflowY: "hidden" }}>
                    {blogData[1] ? blogData[1].content : "none"}
                  </p>
                  <Link
                    to={blogData[1] ? `/blog/${blogData[1].id}` : "/blog"}
                    onClick={() => {
                      dispatch(
                        setCurrentBlogData({
                          date: blogData[1].date,
                          image: blogData[1].image,
                          title: blogData[1].title,
                          subject: blogData[1].subject,
                          content: blogData[1].content,
                          thumb_up: blogData[1].thumbUp,
                          thumb_down: blogData[1].thumbDown,
                          blog_id: blogData[1].id,
                        })
                      );
                    }}
                  >
                    <p className="link">Read More</p>
                  </Link>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};
