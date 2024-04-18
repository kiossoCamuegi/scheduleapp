feather.replace();

function ToggleNavbarFilters() {
    let navbar = document.querySelector(".drop-area");
    let table_area = document.querySelector(".table-box");
    let toggle  =  navbar.querySelector(".toggle");


      toggle.onclick  = ()=>{
         navbar.classList.toggle("active");
        table_area.classList.toggle("mt");
      }
}
 
ToggleNavbarFilters();


function ToggleTableTask (){
    let TableItems1 = document.querySelectorAll(".t1");
    let TableItems2 = document.querySelectorAll(".t2");
 
    for(let i = 0; i < TableItems1.length; i++) {
         let button = TableItems1[i].querySelector(".ct .drop"); 

       button.addEventListener("click", ()=>{
        TableItems1[i].classList.toggle("active");
        TableItems2[i].classList.toggle("active");
       });

    }

     
}

ToggleTableTask();