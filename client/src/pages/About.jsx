/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6 lg:p-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Thejas's Blog!
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            A space for tech enthusiasts, developers, and learners.
          </p>
        </div>

        {/* Main Content */}
        <div className="text-lg text-gray-700 dark:text-gray-300 flex flex-col gap-6">
          {/* About the Blog */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              About This Blog
            </h2>
            <p>
              Thejas's Blog is a personal project created to share insightful
              articles on technology, coding, and everything in between. Whether
              you're a beginner or an experienced developer, you'll find
              tutorials, tips, and discussions that will help you grow your
              knowledge in web development, software engineering, and
              programming languages.
            </p>
          </section>

          {/* About Thejas */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              About The Creator
            </h2>
            <p>
              Hey! I'm Thejas, a passionate developer, and tech enthusiast. I
              love to explore new technologies and share my thoughts with the
              world. This blog is my space to dive into web development,
              programming, and software engineering topics and help others on
              their journey.
            </p>
          </section>

          {/* Engage with the Community */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Join the Conversation
            </h2>
            <p>
              Thejas's Blog isn't just about sharing my thoughts—it's about
              building a community! Feel free to leave comments, share your
              opinions, and engage with other readers. You can like and reply to
              comments to keep the discussion going. Let's grow and learn
              together.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-8">
            <Link
              to="/posts"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Explore Posts
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
