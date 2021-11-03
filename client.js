const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });
  conn.on("data", (message) => {
    console.log(message);
    // code that does something when the connection is first established
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: DYY')
    // let i = 0;
    // while(i <= 300){
    // setTimeout(() => {
    //   conn.write('Move: up')
    // }, i);
    // i+=50;
  // }
    // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;