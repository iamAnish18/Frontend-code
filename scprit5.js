<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>events of java scprit.</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: rgb(0, 0, 0);
        color: white;
        text-align: center;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <button id="btn1">Click me!</button>
    <button id="btn3">dark mode!</button>
    <div class="box">First box.</div>
    <script>
      console.log("Hello world!");

      let btn1 = document.querySelector("#btn1");
      // btn1.onclick=(evt)=>{
      //     console.log(evt);
      //     console.log(typeof evt);
      //     console.log(evt.target);
      //     console.log(evt.clientX , evt.clientY);
      // }

      btn1.addEventListener("click", (evt) => {
        console.log("btn 1 clicked by anish");
        console.log(evt);
        console.log(evt.target);
        console.log(evt.clientX, evt.clientY);
        console.log(evt.type);
      });
      btn1.addEventListener("click", () => {
        console.log("btn 1 clicked by hello");
      });
      btn1.addEventListener("click", () => {
        console.log("btn 1 clicked by hi");
      });
      const math = () => {
        console.log("btn 1 clicked by math");
      };
      btn1.addEventListener("click", math);

      btn1.addEventListener("click", () => {
        console.log("btn 1 clicked by hindi");
      });

      btn1.removeEventListener("click", math);

      let box = document.querySelector(".box");
      box.onmouseover = () => {
        console.log("inside the box");
        let b = 0;
        b++;
        console.log(b);
      };

      //Practice question
      let btn2 = document.querySelector("#btn3");
      btn3.addEventListener("click", (evt) => {
        console.log("background color dark");
        document.body.style.backgroundColor = "black";
      });
    </script>
  </body>
</html>
