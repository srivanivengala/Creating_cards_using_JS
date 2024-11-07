var parent=document.querySelector(".parent");
         var headings=["Summer house", "Brick house", "Renovated", "Barn House", "Summer House", "Brick house", "Renovated", "Barn House"]
         var image=[
            {src:"https://www.w3schools.com/w3images/house5.jpg" },
            {src:"https://www.w3schools.com/w3images/house2.jpg"},
            {src:"https://www.w3schools.com/w3images/house3.jpg"},
            {src:"https://www.w3schools.com/w3images/house4.jpg"},
            {src:"https://www.w3schools.com/w3images/house2.jpg"},
            {src:"https://www.w3schools.com/w3images/house5.jpg"},
            {src:"https://www.w3schools.com/w3images/house4.jpg"},
            {src:"https://www.w3schools.com/w3images/house3.jpg"}
        ]
        
       for (i=0; i<headings.length; i++){
             var child=document.createElement("div");
             var childa=document.createElement("div");
             var childb=document.createElement("img");

             childa.innerText=headings[i];
             childa.style.background="black";
             childa.style.color="white";
             childa.style.zIndex="1";
             childa.style.position="absolute";

            childb.setAttribute("src", image[i].src);           
             childb.style.position="relative";


             child.append(childa, childb);
             parent.appendChild(child);
             
       }
       console.log(parent) 