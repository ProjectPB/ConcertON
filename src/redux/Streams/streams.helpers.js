import { db } from "./../../firebase/utils";

export const handleFetchSlideshowStreams = () => {
  return new Promise((resolve, reject) => {
    const data = [];

    db.collection("events")
      .limit(3)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) =>
          data.push({
            id: doc.id,
            data: doc.data(),
          })
        );
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchStreams = () => {
  return new Promise((resolve, reject) => {
    const data = [];

    db.collection("events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) =>
          data.push({
            id: doc.id,
            data: doc.data(),
          })
        );
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchStreamData = (streamId) => {
  return new Promise((resolve, reject) => {
    db.collection("events")
      .doc(streamId)
      .get()
      .then((doc) => {
        resolve(doc.data());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchSponsors = () => {
  return new Promise((resolve, reject) => {
    const data = [];

    db.collection("sponsors")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) =>
          data.push({
            id: doc.id,
            data: doc.data(),
          })
        );
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
