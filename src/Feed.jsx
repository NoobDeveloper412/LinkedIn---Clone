import {
    CalendarViewDay,
    Create,
    EventNote,
    Image,
    Subscriptions,
  } from "@mui/icons-material";
  import React, { useState, useEffect } from "react";
  import "./Feed.css";
  import { db } from "./firebase";
  import {
    addDoc,
    collection,
    onSnapshot,
    serverTimestamp,
    orderBy,
    query,
  } from "firebase/firestore";
  import InputOption from "./InputOption";
  import Post from "./Post";
  
  function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
      );
    }, []);
  
    const sendPost = (e) => {
      e.preventDefault();
      addDoc(collection(db, "posts"), {
        name: "Benjamin Schuman",
        description: "This is a test",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
  
      setInput("");
    };
  
    return (
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <Create />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button onClick={sendPost} type="submit" />
            </form>
          </div>
          <div className="feed__inputOptions">
            <InputOption Icon={Image} title="Photo" color="#70B5F9" />
            <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
            <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
            <InputOption
              Icon={CalendarViewDay}
              title="Write article"
              color="#7FC15E"
            />
          </div>
        </div>
  
        {/* Posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    );
  }
  
  export default Feed;