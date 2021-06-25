import { applyMiddleware, createStore } from "redux";
import createSocketIoMiddleware from "redux-socket.io";
import { reducer } from "./reducer";
import io from 'socket.io-client';

const socket = io('https://redux-socket-demo.herokuapp.com/');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

export const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log('new state', store.getState());
});