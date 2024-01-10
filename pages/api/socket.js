import { Server } from "socket.io";

export default SocketHandler = (req, res) => {
  console.log("called api");
  if (res.socket.server.io) {
    console.log("socket already running");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("a user connected");
    });
  }
  res.end();
};
