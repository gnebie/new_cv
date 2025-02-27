console.log("Hello ............")
console.log("DEBUG ENV:", import.meta.env)

const config = {
  backendChatUrl: import.meta.env.VITE_CHAT_BACKEND_URL || "http://localhost:5000/chat",
  backendEmailUrl: import.meta.env.VITE_MAIL_BACKEND_URL || "http://localhost:5000/mail",
};
  
export default config;