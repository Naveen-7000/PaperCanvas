import {io} from 'socket.io-client';

// connect to server(different origin)
const url = process.env.NODE_ENV === 'production' ? 'https://paper-canvas-server.onrender.com' : 'http://localhost:8000';
export const socket = io(url);