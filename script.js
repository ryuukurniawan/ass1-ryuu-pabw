let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2},
];

function cekBuku() {
    let jumlah = document.getElementById("jumlah").value;
    let pilihanBuku = document.getElementById("buku").value;

    if (jumlah === "") {
        alert("Jumlah buku tidak boleh kosong!");
        return;
    }
    

}