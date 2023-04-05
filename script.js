buttons.addEventListener('click', (e) => {
    e.preventDefault()
    let List = document.getElementById("list")
    let dive = document.createElement("div")
    dive.id = "ids"
    List.appendChild(dive)
    let value = hata.value
    localStorage.setItem("todo", value)
    // let v=localStorage.getItem("todo") 
    dive.innerHTML =
      `   <h1>${localStorage.getItem("todo")}  <button class="butto" style=" background-color: black;
    color: white;  
    height:5vh;
    border-radius: 20px;
    font-size: 20px;">delete</button>
                                  </h1>
                                 
                                `
    hata.value = ""
  
    dive.addEventListener('click', function() {
      localStorage.removeItem("todo")
      dive.remove();
    })
  })
  
  
  
  