import { createSlice } from "@reduxjs/toolkit";

export const currentDataSlice = createSlice({
  name: "currentData",
  initialState: {
    currentBlogData: {
      date: "7.11.2022",
      image:
        "https://assets.website-files.com/616786a99cb0c53356569c11/62ba38c6e2d0462cf5a9e190__ANA5944.jpg",
      title: "GF Chocolate Coconut Mandarin Muffins",
      subject: "General",
      content:
        "I’ve been experimenting lately with gluten-free baking. In particular aiming for a good morning muffin that is gluten, dairy and sugar free but still delicious.",
      thumb_up: 0,
      thumb_down: 0,
      id: "",
    },
    blogIdList: [],
  },
  reducers: {
    setCurrentBlogData: (state, action) => {
      state.currentBlogData.date = action.payload.date;
      state.currentBlogData.image = action.payload.image;
      state.currentBlogData.title = action.payload.title;
      state.currentBlogData.subject = action.payload.subject;
      state.currentBlogData.content = action.payload.content;
      state.currentBlogData.thumb_up = action.payload.thumb_up;
      state.currentBlogData.thumb_down = action.payload.thumb_down;
      state.currentBlogData.id = action.payload.blog_id;
    },
    addThumbUp: (state) => {
      state.currentBlogData.thumb_up += 1;
    },
    addThumbDown: (state) => {
      state.currentBlogData.thumb_down += 1;
    },
    setBlogIdList: (state, action) => {
      state.blogIdList = action.payload;
    },
  },
});

export const { setCurrentBlogData, addThumbUp, addThumbDown, setBlogIdList } =
  currentDataSlice.actions;

export default currentDataSlice.reducer;
