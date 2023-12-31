
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';

const GetStarted = () => {
  return (
    <>
    <BrandName />
    <div className="flex justify-between p-8 pt-0 flex-wrap max-w-6xl mx-auto">
      {/* Left Side - Main Content */}
      <div className="sm:w-2/3 p-8 w-full" >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">Ready to get started on Travelbeem!</h2>

        {/* Tell us about your service */}
        <div className="mb-4">
          <label htmlFor="serviceDescription" className="block text-lg font-bold text-black">
            Tell us about your service
          </label>
          <p className="text-xs text-gray-500">Make sure it matches the name on your govt ID</p>
          <textarea
            id="serviceDescription"
            name="serviceDescription"
            rows="4"
            className="mt-1 p-2 block w-full border rounded shadow-md"
            placeholder="Tell us about your service..."
          ></textarea>
        </div>

        {/* Make it stand out (Highlights) */}
        <div className="mb-4">
          <label htmlFor="highlights" className="block text-lg font-bold text-black">
          Make it stand out with what’s included and not included(Highlights)
          </label>
          <p className="text-xs text-gray-500">Make sure it matches the name on your govt ID</p>
          <textarea
            id="highlights"
            name="highlights"
            rows="4"
            className="mt-1 p-2 block w-full border rounded shadow-md"
            placeholder="Make it stand out..."
          ></textarea>
        </div>

        {/* Certifications section */}
        <div className="mb-4">
          <label htmlFor="certifications" className="block text-lg font-bold text-black">
            Certifications
          </label>
          <input
            type="file"
            id="certifications"
            name="certifications"
            className="mt-1 p-2 block w-full border rounded shadow-md"
          />
        </div>
      </div>

       <ChatBox />
    </div>
    </>
  );
};

export default GetStarted;
