import { io } from 'socket.io-client';
import { URL } from './api';

export const socket = io(URL);