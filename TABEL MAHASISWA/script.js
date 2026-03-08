document.getElementById("searchInput").addEventListener("keyup", searchData);

function searchData(){

let input = document.getElementById("searchInput").value.toLowerCase();
let table = document.getElementById("tabelMahasiswa");
let tr = table.getElementsByTagName("tr");

for(let i = 1; i < tr.length; i++){

let nama = tr[i].getElementsByTagName("td")[0];
let nim = tr[i].getElementsByTagName("td")[1];

if(nama || nim){

let textNama = nama.textContent.toLowerCase();
let textNim = nim.textContent.toLowerCase();

if(textNama.includes(input) || textNim.includes(input)){
tr[i].style.display = "";
}
else{
tr[i].style.display = "none";
}

}

}

}

function sortTable(n){

let table = document.getElementById("tabelMahasiswa");
let rows = Array.from(table.rows).slice(1);

let asc = table.getAttribute("data-sort") !== "asc";
table.setAttribute("data-sort", asc ? "asc" : "desc");

rows.sort(function(a,b){

let x = a.cells[n].innerText;
let y = b.cells[n].innerText;

if(!isNaN(x) && !isNaN(y)){
return asc ? x-y : y-x;
}

return asc ? x.localeCompare(y) : y.localeCompare(x);

});

let tbody = table.tBodies[0];
rows.forEach(row => tbody.appendChild(row));

}