import { useState } from "react";
import bgImage from "../assets/bg.png";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !message) {
      setStatus("Please fill all required fields");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Invalid email address");
      return;
    }

    setLoading(true);
    setStatus("Submitting...");

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.status === 200 || response.status === 201) {
        setStatus("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("⚠ Error ${response.status}: Something went wrong.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("❌ Submission failed. Try again later!");
    }

    setLoading(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}

    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4 text-gray-800 p-6 rounded-2xl">
        <h1 className="text-2xl font-semibold">V Films</h1>
        <p>
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away. Let’s catch up over
          coffee. Great stories always begin with a good conversation.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-center mb-2">Join the Story</h2>
          <p className="text-center text-gray-600 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/80 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/80 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/80 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows="4"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-orange-500 text-white py-3 rounded-md transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
          )}

          <div className="text-center mt-6 text-sm text-gray-600">
            <p>vermita@varnanfilms.co.in</p>
            <p>+91 98736 84567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;