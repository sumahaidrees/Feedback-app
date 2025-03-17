import { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        background: "#ffffff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        border: "1px solid #ddd",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "15px" }}>
        Feedback Form
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Rating Input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", color: "#555" }}>
            Rate us (1-10):
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

        {/* Message Input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", color: "#555" }}>
            Your Message:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#007bff",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0056b3")}
          onMouseOut={(e) => (e.target.style.background = "#007bff")}
        >
          Submit
        </button>
      </form>

      {/* Feedback Display */}
      {submitted && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "5px" }}>Your Feedback:</h3>
          <p style={{ color: "#555" }}>
            <strong>Rating:</strong> {rating} / 10
          </p>
          <p style={{ color: "#555" }}>
            <strong>Message:</strong> {message}
          </p>
        </div>
      )}
    </div>
  );
}
