

let penumpang = [];

let tambahpenumpang =

    function (namapenumpang, penumpang) {

        if (penumpang.length == 0) {   //untuk menghitung panjang data

            penumpang.push(namapenumpang); //untuk menambahkan data dalam array

            return penumpang;//untuk mengulang isi function

        } else {

            for (i = 0; i < penumpang.length; i++) { // untuk mencari ulang  isi panjang data yang sudah di isi

                if (namapenumpang == penumpang[i]) { //untuk mencari data yang sama yang telah diinput datanya

                    console.log(namapenumpang + 'sudah ada di dalam angkot');//memberikan informasi bahwa nama tersebut  sudah ada

                    return penumpang ;
           
                } else if (i == penumpang.length - 1) { //karena i nilainya 0, dan penumpang.length mempunya nilai 1.
                    //fungsi -1 setekah penumpang.length adalah untuk menyamakan  nilai i dan penumpang.length.
                    penumpang.push(namapenumpang );

                    return penumpang; // mengembalikan isi array dan keluar dari function

                }  if (tambahpenumpang.length == 2) { //untuk membtasi berapa data yang ingin di pakai 

                    penumpang.push(namapenumpang);  //untuk menambah nama  dalam array agar tidak kosong saat code ini berjalan
                    console.log("angkot sudah penuh");     
       return; // keluar dari function dan mengehentikan code agar tidak melanjutkan function
                }
            }
        }
    }


    