fetch("https://api.tvmaze.com/shows") 
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let section=document.getElementById("section");
    let btn2=document.getElementById("searchbtn");
    let input=document.getElementById("input");


    for(let i=0;i<data.length;i++)
    {        
        let btn=document.createElement("button");
        btn.innerText="Go to offical website";
        btn.style.backgroundColor="lightblue";
        // btn.style.alignItems= "center"
        let a=document.createElement("a");
        a.setAttribute("href", data[i].url);
        a.appendChild(btn)
        a.style.color="white";
        let ul=document.createElement("ul");
        ul.className="card";
        let li1=document.createElement("li");
        let li2=document.createElement("li");
        li2.style.height="60px";
        let li3=document.createElement("li");
        let li4=document.createElement("li");
        let li5=document.createElement("li");
        li5.style.height="70px"
        let li6=document.createElement("li");
        li6.style.marginTop="2px"
        let img=document.createElement("img");
        let h3=document.createElement("h5");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");
        let p4=document.createElement("p");


        // Card ucun datalari adlandiririiq ve mulumatlari datadan cekirik
        img.setAttribute("src", data[i].image.medium );
        h3.innerText=data[i].name;
        p1.innerText="Premiere: " + data[i].ended ;
        p2.innerText="Imdb rating: " + data[i].rating.average;
        p3.innerText="Genre: " + data[i].genres[0];
        p4.innerText="Language: " + data[i].language;
       
        // PART OF APPENDS
        li1.appendChild(img); 
        li2.appendChild(h3);       
        li2.appendChild(p1);
        li3.appendChild(p2);
        li4.appendChild(p3);
        li5.appendChild(p4);
        li6.appendChild(a);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        section.appendChild(ul);
        document.body.appendChild(section);     
   }     
  });
ul = document.getElementById("users-list");

var render_lists = function(lists){
  var li = "";
  for(index in lists){
    li += "<li>" + lists[index] + "</li>";
  }
  ul.innerHTML = li;
}

render_lists(data.name);

// Filtred the lets
input = document.getElementById('filter_users');

var filterUsers = function(event){
  keyword = input.value.toLowerCase();
  filtered_users = data.name.filter(function(user){
        user = user.toLowerCase();
       return user.indexOf(keyword) > -1; 
  });
  
  render_lists(filtered_users);
}

input.addEventListener('keyup', filterUsers);