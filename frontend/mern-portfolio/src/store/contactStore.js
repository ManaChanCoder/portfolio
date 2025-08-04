import { create } from "zustand";
import { toast } from "react-toastify";

const contactStore = create((set) => ({
  loading: false,
  errorMessage: "",

  sendMessage: async (contactData, isDark) => {
    set({ loading: true, errorMessage: "" });

    const request = fetch("https://rhogen-portfolio.onrender.com/contact/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong!");
      }

      return data?.message || "Message sent successfully!";
    });

    try {
      const resultMessage = await toast.promise(
        request,
        {
          pending: "Sending message, please wait...",
          success: (msg) => msg || "Email sent successfully!",
          error: (err) => err.message || "Something went wrong!",
        },
        {
          theme: isDark ? "dark" : "light", // or "light" or use `isDark ? "dark" : "light"`
        }
      );

      console.log(resultMessage);
      return true;
    } catch (err) {
      set({ errorMessage: err.message });
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));

export default contactStore;
