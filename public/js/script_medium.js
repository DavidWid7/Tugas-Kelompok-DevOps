var arr = document.getElementById('jumlahpakaian');
arr.addEventListener('input', total, false);
var arr2 = document.getElementById('beratpakaian');
arr2.addEventListener('input', total, false);

let biayaantar = 0;
var arr3 = document.getElementById('tipepengantaran');
arr3.addEventListener('input', cektipe, false);

function cektipe(){
    var arr3 = document.getElementById('tipepengantaran').value;
    if(arr3 == "Diantar"){
        biayaantar = 20000;
    }
    else{
        biayaantar = 0;
    }
    total();
}

let biayajenis = 0;
var arr4 = document.getElementById('jenispakaian');
arr4.addEventListener('input', cekjenis, false);

function cekjenis(){
    var arr4 = document.getElementById('jenispakaian').value;
    if(arr4 == "Selimut"){
        biayajenis = 20000;
    }
    else{
        biayajenis = 0;
    }
    total();
}

function total(){
    var jumlahpakaian = 0;
    jumlahpakaian += (parseInt(arr.value));

    var beratpakaian = 0;
    beratpakaian += (parseInt(arr2.value));

    totalbiaya = jumlahpakaian * beratpakaian * 1000
    biaya = totalbiaya;

    document.getElementById('biayapesanan').value = totalbiaya + biayaantar + biayajenis + 20000;
}

var twodays = new Date()
twodays.setDate(twodays.getDate()+2);
document.getElementById("tanggalestimasi").value = twodays.toISOString().slice(0, 10);

function pemisah(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function myfunction2(form){
    Swal.fire({
        title: 'Are you sure?',
        text: `You made an order for Rp ${pemisah(document.getElementById('biayapesanan').value)}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i am sure!'
        }).then((result) => {
        if (result.isConfirmed) {
            form.submit()
        }
    })
}

var x = document.getElementById("tipepengantaran");
x.addEventListener('input', myFunction, false);
function myFunction(){
    if( x.value == "Diantar") {
        document.getElementById("waktupengantaran").removeAttribute("disabled")
        document.getElementById("alamat").removeAttribute("disabled")
    }
    else {
        document.getElementById("waktupengantaran").setAttribute("disabled", true)
        document.getElementById("alamat").setAttribute("disabled", true)
    }
}

