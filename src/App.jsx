import React, { useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Learn } from "./components/learn/learn";
import { Workwithme } from "./components/workwithme/workwithme";
import { Contact } from "./components/contact/contact";
import { Book } from "./components/book/book";
import Blog from "./components/blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase_setup/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentBlogData,
  setBlogIdList,
} from "./features/currentData/currentData";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const dispatch = useDispatch();
  const blogIdList = useSelector((state) => state.currentData.blogIdList);
  const fetchPost = async () => {
    await getDocs(collection(firestore, "blog_data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(
        setCurrentBlogData({
          date: newData[0].date,
          image: newData[0].image,
          title: newData[0].title,
          subject: newData[0].subject,
          content: newData[0].content,
          thumb_up: newData[0].thumbUp,
          thumb_down: newData[0].thumbDown,
          blog_id: newData[0].id,
        })
      );
      const blog_id_list = newData.map((data_item) => data_item.id);
      dispatch(setBlogIdList(blog_id_list));
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/workwithme" element={<Workwithme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          {blogIdList?.map((id) => {
            return (
              <Route
                path={`/blog/${id}`}
                element={<Blog />}
                key={"blog-route-" + id}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
