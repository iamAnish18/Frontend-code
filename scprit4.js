<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document object modern.</title>
    <style>
      h1 {
        color: red;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 44px;
      }

      div {
        color: blue;
      }

      p {
        color: green;
      }

      button {
        color: white;
        background-color: black;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <h2>Hello Java Scprit!</h2>
    <div id="pro">Hello world!</div>
    <h1>Java Scprit.</h1> -->
     <h1>Document object modern.</h1>
    <div class="myclass">Hello Coder</div>
    <div class="myclass">Anish Tamoli.</div>
    <div class="myclass">Ronak Kumar Goyal.</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit necessitatibus explicabo laudantium ipsa error consequuntur voluptates maiores debitis. Eum, velit?</p>
    <button>Click me.</button>
     <div>
        <ol>
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
        </ol>
    </div>
    <script>
      console.dir(window.document);
      console.dir(window);
      console.dir(document.body.childNodes[1]);
      console.dir(document.body.childNodes[4]);

      let udarn = document.getElementById("pro");
      console.dir(udarn);
      console.log(udarn);

      let ashu = document.getElementsByClassName("myclass");
      console.dir(ashu);
      console.log(ashu);

      let anish1 = document.getElementsByTagName("p, h1");
      console.dir(anish1);

      let virat = document.querySelector("p");
      console.dir(virat);

      let aura = document.querySelector("div");
      console.dir(aura);
      let ultra = document.querySelector("div");
      console.log(ultra);

      let value = ultra.getAttribute("id");
      console.log(value);

      let value2 = ultra.getAttribute("name");
      console.log(value2);

      let ashu = document.querySelector("p");
      console.log(ashu.setAttribute("class", "priya"));

      ashu.style.backgroundColor = "pink";
      ashu.style.color = "black";
      ashu.style.fontSize = "20px";
      ashu.style.height = "160px";
      ashu.style.width = "200px";
      // ashu.style.visibility = "hidden";

      let virat = document.createElement("button");
      virat.innerText = "Click me!";
      console.log(virat);

      let newbutton = document.querySelector("div");
      newbutton.append(virat);

      let newheading = document.createElement("h1");
      newheading.innerText = "This is my main heading.";

      document.querySelector("body").prepend(newheading);

      let delet = document.querySelector(".under");
      delet.remove();

      //Practics Question 1
      let newbtn = document.createElement("button");
      newbtn.innerText = "Click me!";
      console.log(newbtn);

      document.querySelector("body").prepend(newbtn);
      newbtn.style.backgroundColor = "red";
      newbtn.style.color = "white";

      //practice Question 2
      let start = document.querySelector(".same");
      console.log(start);
      start.classList.add("newsame");
      //Practice question 1
      let heading = document.querySelector("h2");
      console.dir(heading.innerText);

      heading.innerText = heading.innerText + "from Apan collage students";
      console.dir(heading.innerText);
    </script>
  </body>
</html>
