async function getDataPelanggan() {
    let response = await fetch("/admin/data_pelanggan")
    let hasil = response.json();
    let count_reguler = 0;
    let count_reguler2 = 0;
    hasil.then(data=>{
        let show = document.getElementById("data");
        let show2 = document.getElementById("data2");
        data.forEach((result) => {
            if(result.status == "PROSES" && result.paket == "REGULER"){
                count_reguler += 1;
                show.innerHTML +=
                    `<tr class="isi-data">
                        <td>${result.id}</td>
                        <td>${result.username}</td>
                        <td>${result.no_hp}</td>
                        <td>${result.jenis_pakaian}</td>
                        <td>${result.total_berat}</td>
                        <td>${result.tipe_pengantaran}</td>
                        <td>${result.status}</td>
                        <td style="text-align:left; width:13%";>Rp ${pemisah(result.biaya_pesanan)}</td>
                        <td>${result.paket}</td>
                    </tr>
                    <tr class="hide">
                        <td colspan="9" style="text-align:left;">Estimasi Selesai : ${result.tanggal}</td>
                    </tr>
                    <tr>
                        <td colspan="9" class="tombol-aksi">
                            <form>
                                <button onclick=myfunction2(${result.id}) class="btn btn-primary selesai">Selesai</button>
                            </form>
                            <form>
                                <button onclick=myfunction3(${result.id}) class="btn btn-primary hapus">Hapus</button>
                            </form>
                        </td>
                    </tr>`;
            } else if(result.status == "SELESAI" && result.paket == "REGULER"){
                count_reguler2 += 1;
                show2.innerHTML +=
                `<tr class="isi-data2">
                    <td>${result.id}</td>
                    <td>${result.username}</td>
                    <td>${result.no_hp}</td>
                    <td>${result.jenis_pakaian}</td>
                    <td>${result.total_berat}</td>
                    <td>${result.tipe_pengantaran}</td>
                    <td>${result.status}</td>
                    <td style="text-align:left; width:13%";>Rp ${pemisah(result.biaya_pesanan)}</td>
                    <td>${result.paket}</td>
                </tr>
                <tr class="hide">
                    <td colspan="9" style="text-align:left;">Estimasi Selesai : ${result.tanggal} <br> Tanggal Selesai : ${result.tanggal_selesai}</td>
                </tr>`;
            }
            
        });
        if(count_reguler == 0){
            show.innerHTML = 
                show.innerHTML +
                    `<tr>
                    <td colspan="9" style="text-align:center;">Belum ada pesanan</td>
                    </tr>`;
        }
        if(count_reguler2 == 0){
            show2.innerHTML = 
                show2.innerHTML +
                    `<tr>
                    <td colspan="9" style="text-align:center;">Belum ada pesanan</td>
                    </tr>`;
        }
    }).catch(e => console.log(e));
}
getDataPelanggan();

function pemisah(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ""
            tr[i+1].style.display = "";
            } else {
            tr[i].style.display = "none"
            tr[i+1].style.display = "none";
            }
        }       
    }
}

function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable2");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ""
            tr[i+1].style.display = "";
            } else {
            tr[i].style.display = "none"
            tr[i+1].style.display = "none";
            }
        }       
    }
}

function myfunction3(id){
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i am sure!'
        }).then((result) => {
        if (result.isConfirmed) {
            del(id)
        }
    })
}

function myfunction2(id){
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: `This order will no longer process`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i am sure!'
        }).then((result) => {
        if (result.isConfirmed) {
            selesai(id)
        }
    })
}

let del = (id) => {
    axios.delete('/admin/act-hapus/' + id).then((result) => {
        location.reload();
    }).catch((err) => {
        alert('error ' + err)
    });
}

let selesai = (id) => {
    axios.put('/admin/act-selesai/' + id, {}).then((result) => {
        location.reload();
    }).catch((err) => {
        alert('error ' + err)
    });
}