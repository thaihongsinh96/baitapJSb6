var numbers=[];
var inputEl=document.getElementById("txt-number");

    function tinhTongSoDuong(array) {
    var sum=0;
    array.forEach(function(item){
        if(item>0){
            sum+=item;
        }
    })
    return sum;
}

    function demSoDuong(array){
    var count=0;
    array.forEach(function(item){
        if(item>0){
            count++;
        }
    })
    return count;
}
    function demSoAm(array){
    var count=0;
    array.forEach(function(item){
        if(item<0){
            count++;
        }
    })
    return count;
}

    function soNhoNhat(array){
    var min= numbers[0];
    array.forEach(function(item){
        for(var i=1;i<numbers.length; i++){
            if(min>numbers[i]){
                min=numbers[i];
            }
        }
    })
    return min;
}

    function soDuongNhoNhat(array){
    var min;
    array.forEach(function(item){
        for(var i=0; i<numbers.length; i++){
            if(numbers[i]>0){
                min=numbers[i];
                break;
            }
        }
        for(var i=0; i<numbers.length; i++){
            if(numbers[i]>0&&numbers[i]<min){
                min=numbers[i]
            }
        }
    })
    return min;
}

    function soChanCuoiCung(array){
    var viTriSoChan, soChanCuoi;
    array.forEach(function(item){

        for(var i=0; i<numbers.length; i++){
            if(numbers[i]%2==1||numbers[i]%2==-1){
                soChanCuoi=-1;
            }
        }
        for(var i=0; i<numbers.length; i++){
            if(numbers[i]%2==0){
                viTriSoChan=numbers.lastIndexOf(i);
                soChanCuoi=numbers[i];
            }
        }
    })
    return soChanCuoi;
}

    function kiemTraSoNguyenTo(array){
        var soNguyenTo, viTriDauTien, soNguyenToDauTien;
        array.forEach(function(item){
            for(var i=0; i<numbers.length; i++){  
                if(numbers[i]<2){
                    soNguyenTo=-1;
                }else
                 if(numbers[i]==2){
                    soNguyenTo=numbers[i];
                    break;
                }else if(numbers[i]==3){
                    soNguyenTo=numbers[i];
                    break;
                }else if(numbers[i]%2==0){
                    soNguyenTo=-1;
                }
                else{
                    for(var j=3; j<numbers[i]; j+=2){
                        if(numbers[i]%j!=0){
                            soNguyenTo=numbers[i];
                        }
                    }
                    break;
                }
            }
        })
         return soNguyenTo;
    }

    function kiemTraSoNguyen(array){
        var count=0;
            array.forEach(function(item){
            if(Math.floor(item)==Math.ceil(item)){
                count++;
            }
        })
        return count;
    }        

document.getElementById("btn-bail").addEventListener("click",function(){
    numbers.push(inputEl.value*1);
    console.log(numbers);
    inputEl.value="";

    var tongSoDuong=tinhTongSoDuong(numbers);
    
    var soDuong=demSoDuong(numbers);
    var soAm=demSoAm(numbers);
    var x=soDuong-soAm;
    if(x>0){
        document.getElementById("ket-qua1").innerText="So duong nhieu hon"
    }else if(x==0){
        document.getElementById("ket-qua1").innerTextL="So duong va so am bang nhau"
    }else{
        document.getElementById("ket-qua1").innerText="So am nhieu hon"

    }

    document.getElementById("ket-qua").innerHTML=`<div>Array: ${numbers}</div>
                                                  <div>Tong so duong: ${tongSoDuong}</div> 
                                                  <div>Dem so duong: ${demSoDuong(numbers)}</div>
                                                  <div>Dem so am: ${demSoAm(numbers)}</div> 
                                                  <div>So nho nhat: ${soNhoNhat(numbers)}</div>
                                                  <div>So duong nho nhat: ${soDuongNhoNhat(numbers)}</div> 
                                                  <div>So chan cuoi cung: ${soChanCuoiCung(numbers)}</div>
                                                  <div>So nguyen to dau tien: ${kiemTraSoNguyenTo(numbers)}</div>
                                                  <div>So luong so nguyen trong mang: ${kiemTraSoNguyen(numbers)}</div>
                                                 `
})

document.getElementById("doi-vi-tri").addEventListener("click",function(){
    var x=document.getElementById("thu-nhat").value*1;
    var y=document.getElementById("thu-hai").value*1;
    var temp=numbers[x];
    numbers[x]=numbers[y];
    numbers[y]=temp;
    // console.log(numbers);
    document.getElementById("vi-tri").innerText="New array: "+numbers;
})

document.getElementById("sap-xep").addEventListener("click",function(){
    var sapXep=numbers.sort(function(a,b){return a-b});
    // console.log("sapxep",sapXep);
    document.getElementById("sap_xep").innerText="New array: "+numbers;

})
