var game = {
  startTime: null,
  display: document.getElementById("display-area"),
  start: function () {
    game.startTime = new Date();
    console.log("スタートしました");
    document.body.onkeypress = game.stop;
  },
  stop: function () {
    var currentTime = new Date();
    var seconds = (currentTime.getTime() - game.startTime.getTime()) / 1000;
    console.log("ストップ");
    document.getElementById("display-area").innerText = seconds;
    if (seconds >= 9.5 && seconds <= 10.5) {
      displayArea.innerText = seconds + "秒、成功";
    } else {
      document.getElementById("display-area").innerText = seconds + "秒、失敗";
    }
  },
};
if (confirm("ボタンを押すとスタート")) {
  game.start();
}
