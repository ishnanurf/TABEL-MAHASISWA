let dataMahasiswa = [
    {nim:"123456", nama:"Adellia febrianti", jurusan:"Kehutanan", ipk:3.9},
    {nim:"234567", nama:"Rossy A Andini", jurusan:"Kehutanan", ipk:3.9},
    {nim:"345678", nama:"Marsha Maulina", jurusan:"Biologi Murni", ipk:3.88},
    {nim:"456789", nama:"Nike Hidayah", jurusan:"Pendidikan Kimia", ipk:3.89},
    {nim:"556789", nama:"Nur Aisah", jurusan:"Agroteknologi", ipk:3.85},
    {nim:"666789", nama:"Zhahra Zulmina", jurusan:"Pendidikan Biologi", ipk:3.87},
    {nim:"777789", nama:"Nanda Aulia", jurusan:"Teknik Perminyakan", ipk:3.91}
];

function tampilkanData(){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    dataMahasiswa.forEach(mhs=>{
        let row = `
        <tr>
            <td>${mhs.nim}</td>
            <td>${mhs.nama}</td>
            <td>${mhs.jurusan}</td>
            <td>${mhs.ipk}</td>
        </tr>
        `;
        tbody.innerHTML += row;
    });
}

tampilkanData();

function tambahMahasiswa(){

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let jurusan = document.getElementById("jurusan").value;
    let ipk = document.getElementById("ipk").value;

    if(nim=="" || nama=="" || jurusan=="" || ipk==""){
        alert("Isi semua data!");
        return;
    }

    dataMahasiswa.push({nim,nama,jurusan,ipk});

    tampilkanData();

    document.getElementById("nim").value="";
    document.getElementById("nama").value="";
    document.getElementById("jurusan").value="";
    document.getElementById("ipk").value="";
}

function searchData(){

    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#tbody tr");

    rows.forEach(row=>{
        let nim = row.cells[0].innerText.toLowerCase();
        let nama = row.cells[1].innerText.toLowerCase();

        if(nim.includes(input) || nama.includes(input)){
            row.style.display="";
        }else{
            row.style.display="none";
        }
    });

}

function sortTable(n){
    dataMahasiswa.sort((a,b)=>{
        let key = Object.keys(a)[n];
        if(a[key] < b[key]) return -1;
        if(a[key] > b[key]) return 1;
        return 0;
    });

    tampilkanData();
}

