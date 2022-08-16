import { useEffect, useState } from "react";
import { MEDIUM_PROFILE } from "../constants/Resources";

export default function MediumArticle() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_PROFILE}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setBlogs(data?.items);
      });
  }, []);
  return (
    <div className="w-full h-full lg:flex">
      {blogs.map((blog: any) => {
        return (
          <div className="text-orange flex-col w-full p-10">
            <h2 className="mx-10">{blog?.title}</h2>
            <img
              className="w-2/3 h-2/5 mx-auto my-2 cursor-pointer opacity-60"
              src={blog?.thumbnail}
              alt={blog?.title}
              onClick={() => (window.location.href = `${blog?.link}`)}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}
