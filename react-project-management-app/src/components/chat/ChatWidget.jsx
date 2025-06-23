import React, { useState, useEffect, useRef } from "react";
import { handleCommand } from "../../utils/commandInterpreter";

const suggestedCommands = [
  "Add a new project",
  "List all tasks",
  "Mark task 3 as done",
  "Show project progress",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { type: "user", text: trimmed };
    const result = handleCommand(trimmed);
    const botMessage = { type: "bot", text: `🤖 ${result.message || result}` };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          zIndex: 1050,
        }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
      >
        💬
      </button>

      {open && (
        <div
          className="chat-widget bg-white border rounded shadow-lg d-flex flex-column position-fixed"
          style={{
            bottom: "90px",
            right: "20px",
            width: "360px",
            maxHeight: "500px",
            zIndex: 1051,
          }}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2 bg-primary text-white rounded-top">
            <strong>🤖 AI Assistant</strong>
            <button
              className="btn btn-sm btn-light text-dark"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-grow-1 overflow-auto px-3 py-2"
            ref={scrollRef}
            style={{ backgroundColor: "#f8f9fa" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 d-flex ${
                  msg.type === "user" ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 px-3 rounded-4 text-wrap small shadow-sm ${
                    msg.type === "user"
                      ? "bg-primary text-white"
                      : "bg-light border"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Commands + Input */}
          <div className="border-top px-3 pt-2 pb-3 bg-white">
            <h6 className="fw-bold mb-2">💡 Suggested Commands</h6>
            <ul className="list-unstyled small mb-2">
              {suggestedCommands.map((cmd, idx) => (
                <li key={idx} className="mb-1">
                  👉 <code>{cmd}</code>
                </li>
              ))}
            </ul>

            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Type a command..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button className="btn btn-outline-primary" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
