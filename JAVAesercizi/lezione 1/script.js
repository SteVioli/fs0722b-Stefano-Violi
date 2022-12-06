var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://dummyjson.com/products", requestOptions)
    .then(response => response.json())
    .then(result => {
        
        let prodotti = result["products"]

        let titolo  = document.getElementById("titolo_1")
        let titolo2 = document.getElementById("titolo_2")
        let titolo3 = document.getElementById("titolo_3")
        const titolotutti = document.querySelectorAll(".card-title");
        // console.log(titolotutti)
        
        for (let i = 0; i < titolotutti.length; i++) {
            const element = titolotutti[i];
            // console.log(element)
            element.innerHTML = tornaTitolo()
            
        }

        function tornaTitolo() {
            return prodotti[0]["title"]
        }

        // for (let i = 0; i < prodotti.length; i++) {
        //     // titolo.innerHTML = prodotti[i]["title"]
        //     // console.log(prodotti[i]["title"])
        // }
        // let x = 0;

        // do {
        //     titolo.innerHTML = prodotti[x]["title"]
        //     titolo2.innerHTML = prodotti[x+1]["title"]
        //     titolo3.innerHTML = prodotti[x+2]["title"]
        //     break
           
        //         x += 3;
       
        // } while (x < prodotti.length);

    });