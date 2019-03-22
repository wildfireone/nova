



var midiConnector = require('midi-launchpad').connect(0);
var grid =
[
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
]

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});




var launchpadmain;
// wait for the connector to be ready
midiConnector.on("ready", function(launchpad) {
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });

  launchpadmain = launchpad;
  launchpad.on("press",  getstate);
  var colour = [
    //launchpad.colors.red.low,
    //launchpad.colors.red.medium,
    launchpad.colors.red.high,
    //launchpad.colors.green.low,
    //launchpad.colors.green.medium,
    launchpad.colors.green.high,
    //launchpad.colors.orange.low,
    //launchpad.colors.orange.medium,
    launchpad.colors.orange.high,
    //launchpad.colors.yellow.low,
    //launchpad.colors.yellow.medium,
    launchpad.colors.yellow.high
  ]

  console.log("Launchpad ready, let's do something");


  //getstate();
  setInterval(loop, 500);

});


var t=0;
function loop() {

for(var x=7; x>=0;x--){
  for(var y=7; y>=0;y--){
    grid[x][y] = grid[x][y-1];
    //grid[x][y-1] = launchpadmain.colors.green.high;//grid[x][y] = grid[x][y-1];

  }
}




  for (var x = 0; x < 8; x++) {
    for(var y=0; y<8;y++){
      if(grid[x][y]!=launchpadmain.colors.red.high){
        launchpadmain.getButton(x, y).light(launchpadmain.colors.green.high);
      }
      else{
        launchpadmain.getButton(x, y).light(launchpadmain.colors.red.high);
        if(y==7){io.emit('topped', x);}
      }

    }
  }


  t++;
if(t==8){t=0}

}

function getstate(e) {
  if (e.y == 0) {
    launchpadmain.getButton(e.x, 0).light(launchpadmain.colors.red.high);
    grid[e.x][0] = launchpadmain.colors.red.high;
  }


}


function noise(e) {

  console.log(e.x + " " + e.y);
  var current = e.getState();
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      console.log(x + ":" + y);
      //var button = ;
      //launchpad.clear();
      //console.log(Math.random(8));colour -

      //if(x = e.x){
      //launchpad.getButton(x, y).light(launchpad.colors.red.high);
      //}
      //else{
      launchpad.getButton(x, y).light(launchpad.colors.green.high);
      //if(x = e.x){
      //  launchpad.getButton(x, y).light(launchpad.colors.red.high);
      //}
    }

  }
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      console.log("2:" + x + ":" + y);
      //var button = ;
      //launchpad.clear();
      //console.log(Math.random(8));colour -

      //if(x = e.x){
      //launchpad.getButton(x, y).light(launchpad.colors.red.high);
      //}
      //else{
      if (x == e.x) {
        launchpad.getButton(x, y).light(launchpad.colors.red.high);
      }
      //if(x = e.x){
      //  launchpad.getButton(x, y).light(launchpad.colors.red.high);
      //}
    }

  }

  //  for(var x =0; x<8;x++){
  //    for(var y =0; y<8;y++){
  //var button = ;
  //launchpad.clear();
  //console.log(Math.random(8));
  //  launchpad.getButton(e.x, y).light(current);
  //}
  //}
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
