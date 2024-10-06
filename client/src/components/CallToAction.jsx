import { Button } from "flowbite-react";

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-6 border border-teal-500 rounded-tl-3xl rounded-br-3xl sm:items-center sm:justify-between">
      <div className="flex-1 flex flex-col justify-center sm:text-left text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Want to learn more about JavaScript?
        </h2>
        <p className="my-4 text-gray-600">
          Check out these resources with 100 JavaScript Projects.
        </p>
        <Button gradientDuoTone="purpleToPink" className="w-full sm:w-auto">
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="flex-1 mt-6 sm:mt-0 sm:ml-8">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.jlVs_bWyqHSsJd7Rxv5EfQHaEK&pid=Api&P=0&h=180"
          alt="JavaScript learning"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default CallToAction;
