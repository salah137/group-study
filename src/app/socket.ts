import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Ensure the URL matches your server's URL

export { socket };
