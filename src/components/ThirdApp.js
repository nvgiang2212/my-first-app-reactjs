import React, { useEffect, useState } from "react";

const tabList = ["posts", "comments", "albums"];

const ThirdApp = () => {
  const [title, setTitle] = useState("");
  const [postList, setPostList] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPostList(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        // show
        setShowGoToTop(true);
        console.log("set state");
      } else {
        // hide
        setShowGoToTop(false);
      }
      // setShowGoToTop(window.scrollY >= 200)
    };
    window.addEventListener("scroll", handleScroll);
    console.log("addEventListener");
    // DOM events này là thuộc cấp window, chỉ mất khi tắt browser, ko mất ko unmounted component
    // => dò rỉ bộ nhớ (memory leak)
    // Nếu unmouted rồi mounted, thì mỗi lần mounted component vào DOM thì đều tạo ra 1 event listener mới,
    // ko liên quan đến even lister cũ (của component trước đó đã bị unmounted)

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("removeEventListener");
    };
  }, []);

  console.log("re-render");

  return (
    <div>
      <h2>Third_App</h2>
      {tabList.map((tab) => {
        return (
          <button
            key={tab}
            style={
              type === tab
                ? {
                    color: "#fff",
                    backgroundColor: "#333",
                  }
                : {}
            }
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        );
      })}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {postList.map((post) => {
          return <li key={post.id}>{post.name || post.title}</li>;
        })}
      </ul>

      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go To Top
        </button>
      )}
    </div>
  );
};

export default ThirdApp;
