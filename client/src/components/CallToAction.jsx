import { Button } from "flowbite-react";

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center text-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="my-2 text-gray-500">
          Checkout these resources with 100 JavaScript Projects
        </p>
        <Button gradientDuoTone="purpleToPink">
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.jlVs_bWyqHSsJd7Rxv5EfQHaEK&pid=Api&P=0&h=180"
          alt="call-to-action-image"
        />
      </div>
    </div>
  );
}

export default CallToAction;
