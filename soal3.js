const total = (totalBelanja) =>{
    if(typeof totalBelanja !== "number" ){
        console.log("inputan harus berupa angka")
        return
    }
    if(totalBelanja <= 0){
        console.log("total belanja harus lebih dari 0")
        return
    }
    let diskon = null
    if(totalBelanja >= 1_000_000){
        diskon = 10
    }else if (totalBelanja >= 500_000 && totalBelanja < 1_000_000){
        diskon = 5
    }else{
        diskon = 0
    }

    const totalBayar = totalBelanja - (totalBelanja * (diskon / 100))
    if(diskon !== 0){
        return `Anda mendapatkan diskon ${5}%, total belanja anda menjadi ${Math.trunc(totalBayar)}`
    }else{
        return `Anda tidak mendapatkan diskon, total belanja anda menjadi ${Math.trunc(totalBayar)}`
    }
    
}

const testGetTotal = () =>{
    let totalBelanja = 10_000
    console.log(total(totalBelanja))
    totalBelanja = 15_000
    console.log(total(totalBelanja))
    totalBelanja = 499_999
    console.log(total(totalBelanja))
    totalBelanja = 700_000
    console.log(total(totalBelanja))
    totalBelanja = 999_999
    console.log(total(totalBelanja))
    totalBelanja = 1_500_000
    console.log(total(totalBelanja))
}

testGetTotal()