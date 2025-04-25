import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    });

    // Show confirmation
    alert("Message sent successfully! Our team will contact you soon.");
  };

  const toggleAdminPanel = () => {
    setShowAdminPanel((prev) => !prev);
  };

  const handleMessageAction = (id, action) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, status: action } : msg))
    );
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

              <div className="md:col-span-2">
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

      {/* Admin Panel Toggle (This would normally be protected) */}
      <div className="text-center mb-4">
        <button
          onClick={toggleAdminPanel}
          className="text-sm text-gray-600 hover:text-gray-800 underline">
          {showAdminPanel ? "Hide Admin Panel" : "Show Admin Panel (Demo)"}
        </button>
      </div>

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-200 dark:bg-gray-700 px-6 py-4 border-b">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Admin Message Panel
            </h3>
          </div>

          <div className="divide-y">
            {messages.map((msg) => (
              <div key={msg.id} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{msg.subject}</h4>
                    <p className="text-sm text-gray-600">
                      From: {msg.name} ({msg.email})
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleMessageAction(msg.id, "responded")}
                      className={`px-3 py-1 text-xs rounded-full ${
                        msg.status === "responded"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-800"
                      }`}>
                      {msg.status === "responded"
                        ? "Responded"
                        : "Mark Responded"}
                    </button>
                    <button
                      onClick={() => handleMessageAction(msg.id, "dismissed")}
                      className={`px-3 py-1 text-xs rounded-full ${
                        msg.status === "dismissed"
                          ? "bg-gray-500 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}>
                      {msg.status === "dismissed" ? "Dismissed" : "Dismiss"}
                    </button>
                    <button
                      onClick={() => handleMessageAction(msg.id, "reported")}
                      className={`px-3 py-1 text-xs rounded-full ${
                        msg.status === "reported"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-800"
                      }`}>
                      {msg.status === "reported" ? "Reported" : "Report"}
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg mb-3">
                  <p className="text-gray-900 dark:text-gray-100">
                    {msg.message}
                  </p>
                </div>
                <div className="mt-3">
                  <textarea
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    rows="2"
                    placeholder="Type your response..."></textarea>
                  <div className="mt-2 flex justify-end">
                    <button className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700">
                      Send Response
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
