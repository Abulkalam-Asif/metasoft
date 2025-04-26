import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: "",
  });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Question about services",
      message: "I was wondering about your pricing plans...",
      status: "pending",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      subject: "Technical support needed",
      message: "I cannot access my account after the recent update.",
      status: "pending",
    },
  ]);

  // Simulate checking if user is logged in
  useEffect(() => {
    // This would be replaced with actual auth check
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);

    if (userLoggedIn) {
      // Auto-fill data for logged in users
      setFormData({
        name: localStorage.getItem("userName") || "",
        email: localStorage.getItem("userEmail") || "",
        subject: "",
        message: "",
        reason: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new message to the list
    const newMessage = {
      id: messages.length + 1,
      ...formData,
      status: "pending",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Clear form
    setFormData({
      name: isLoggedIn ? formData.name : "",
      email: isLoggedIn ? formData.email : "",
      subject: "",
      message: "",
      reason: "",
    });

    // Show confirmation
    alert("Message sent successfully! Our team will contact you soon.");
  };

  return (
    <div id="contact" className="w-full max-w-4xl mx-auto">
      {/* Contact Form */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden relative mb-8">
        <div className="relative z-10 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Contact Us
            </h2>
            {isLoggedIn && (
              <div className="text-sm text-gray-600">
                Logged in as{" "}
                <span className="font-medium">{formData.name}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="md:col-span-2 grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                    Reason
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required>
                    <option value="">Select a reason</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="How can we help you?"
                  required></textarea>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
