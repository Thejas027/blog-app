import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you will find a variety of articles and tutorials on topics such
          as web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      {/* Adjusted margin to create better spacing between sections */}
      <div className="p-6 bg-amber-100 dark:bg-slate-700 mt-8 mb-12">
        <CallToAction />
      </div>

      {/* Adjusted padding and spacing for the posts section */}
      <div className="px-6 py-10 flex flex-col gap-12">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>

            {/* Ensure posts wrap neatly and maintain consistent spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
