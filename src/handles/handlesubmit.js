import { addDoc, collection } from "@firebase/firestore";
import { analytics } from "../firebase_setup/firebase";

const handleSubmit = (testdata) => {
  const ref = collection(analytics, "test_data");

  let data = {
    testData: testdata,
  };

  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
