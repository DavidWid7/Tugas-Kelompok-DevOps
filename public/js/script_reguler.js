var arr = document.getElementById('jumlahpakaian');
arr.addEventListener('input', total, false);
var arr2 = document.getElementById('beratpakaian');
arr2.addEventListener('input', total, false);
function total(){
    var jumlahpakaian = 0;
    jumlahpakaian += (parseInt(arr.value));

    var beratpakaian = 0;
    beratpakaian += (parseInt(arr2.value));

    totalbiaya = jumlahpakaian * beratpakaian * 1000
    biaya = totalbiaya;

    document.getElementById('biayapesanan').value = totalbiaya + 10000;
}

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

var twodays = new Date()
twodays.setDate(twodays.getDate()+3);
document.getElementById("tanggalestimasi").value = twodays.toISOString().slice(0, 10);
