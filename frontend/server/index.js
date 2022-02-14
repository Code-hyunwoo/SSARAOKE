var fs = require( 'fs' );
const httpServer = require("https").createServer({
  key: fs.readFileSync('ssaraokekey.pem'),
  cert: fs.readFileSync('ssaraokecert.pem'),
  passphrase: 'qwer1234',
});

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("init", (payload) => {
    console.log(payload);
  });
  socket.on("send message", (item) => {//send message 이벤트 발생
     console.log(item.name + " : " + item.message);
    io.emit("receive message", { name: item.name, message: item.message });
    //클라이언트에 이벤트를 보냄
  });
});

httpServer.listen(9000);