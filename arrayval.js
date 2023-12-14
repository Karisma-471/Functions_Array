const myBackPack = ["phone", "charger", "earpods", "power_bank", "flash", "smart_watch", "books", "laptop", "speaker"]
function printMyItems (myList) {
    for (let n = 0; n < myList.length; n++) {
        console.log(myList[n]);
    }    
}
printMyItems(myBackPack);