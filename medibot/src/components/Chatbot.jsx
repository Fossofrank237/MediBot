import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: "user", content: userInput };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer sk-...QlwA`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Tu es un assistant médical qui donne des conseils de santé basés sur les symptômes décrits." },
            ...updatedMessages,
          ],
        }),
      });

      const data = await res.json();
      const botReply = data.choices[0].message;
      setMessages([...updatedMessages, botReply]);
    } catch (err) {
      alert("Erreur lors de la requête à OpenAI.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>💬 MediBot - Assistant Santé</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === "user" ? "Vous" : "MediBot"}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div className="message assistant">MediBot rédige une réponse...</div>}
      </div>
      <div className="chat-input">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Décrivez vos symptômes ou posez une question..."
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
};

export default Chatbot;
