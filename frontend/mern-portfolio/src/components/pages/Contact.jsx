import React, { useState, useRef, useEffect } from "react";

// store
import themeStore from "../../store/themeStore";
import contactStore from "../../store/contactStore";
import scrollStore from "../../store/scrollStore";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const isDark = themeStore((state) => state.isDark);
  const sendMessage = contactStore((state) => state.sendMessage);
  const setContactRef = scrollStore((state) => state.setContactRef);
  const contactRef = useRef(null);

  const [rawData, setRawData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setRawData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    const sent = await sendMessage(rawData, isDark);
    if (sent) {
      setRawData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  const enterSubmit = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  useEffect(() => {
    setContactRef(contactRef);
  }, []);

  return (
    <div ref={contactRef}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme={isDark ? "dark" : "light"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <div className="mt-20 px-10">
        <span className="text-center block text-lg sm:text-3xl font-semibold mb-5">
          Contact Us
        </span>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col sm:items-center gap-3"
        >
          <div className="w-full sm:w-2/4 flex justify-between gap-3">
            <section className="flex flex-col w-2/4">
              <label htmlFor="" className="ml-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={rawData.firstName}
                onChange={handleOnChange}
                className={`rounded-sm outline-none px-2 py-0.5 text-sm sm:text-lg ${
                  isDark ? "bg-white text-black" : "bg-gray-800 text-white"
                }`}
              />
            </section>
            <section className="flex flex-col w-2/4">
              <label htmlFor="" className="ml-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={rawData.lastName}
                onChange={handleOnChange}
                className={`rounded-sm outline-none px-2 py-0.5 text-sm sm:text-lg ${
                  isDark ? "bg-white text-black" : "bg-gray-800 text-white"
                }`}
              />
            </section>
          </div>
          <section className="flex flex-col w-full sm:w-2/4 ">
            <label htmlFor="" className="ml-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={rawData.email}
              onChange={handleOnChange}
              className={`rounded-sm outline-none px-2 py-0.5 text-sm sm:text-lg ${
                isDark ? "bg-white text-black" : "bg-gray-800 text-white"
              }`}
            />
          </section>
          <section className="w-full sm:w-2/4">
            <span className="block mb-0.5 ml-2">Message</span>
            <textarea
              name="message"
              value={rawData.message}
              onChange={handleOnChange}
              onKeyDown={enterSubmit}
              className={`w-full rounded-lg outline-none px-2 py-0.5 text-sm sm:text-lg ${
                isDark ? "bg-white text-black" : "bg-gray-800 text-white"
              }`}
              rows={3}
            ></textarea>
          </section>

          <button
            type="submit"
            className={`text-lg shadow-md p-0.5 sm:px-3 sm:py-1.5 rounded-lg cursor-pointer ${
              isDark
                ? "bg-gray-50 text-black hover:bg-gray-100"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
