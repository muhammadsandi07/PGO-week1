const printSquare = (number) =>{
    if(typeof number !== "number" ){
        console.log("inputan harus berupa angka")
        return
    }
    if(number <= 0){
        console.log("inputan harus lebih dari 0")
        return
    }

    let word = ""
    
    for(let i =1; i<= number; i++){
        word += i + " "
    }
    for(let i =1; i<= number; i++){
        console.log(word)
    }

}


printSquare(3)