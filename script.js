// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F




//descomente abaixo e coloque o valor que desejar
let note = 90;

// let noteA = note >= 90 && note <= 100
// let noteB = note >= 80 && note <= 89
// let noteC = note >= 70  && note <= 79
// let noteD = note >= 60 && note <= 69
// let noteF = note < 60 && note >= 0

// let totalNote;

// if (noteA) {
//     totalNote = "A"
// } else if (noteB){
//     totalNote = "B"
// } else if (noteC) {
//     totalNote = "C"
// } else if (noteD) {
//     totalNote = "D"
// } else if (noteF) {
//     totalNote = "F"
// } else {
//     totalNote = "Nota inválida"
// }


function getNote(note) {
    let noteA = note >= 90 && note <= 100
    let noteB = note >= 80 && note <= 89
    let noteC = note >= 70 && note <= 79
    let noteD = note >= 60 && note <= 69
    let noteF = note < 60 && note >= 0

    let totalNote;

    if (noteA) {
        totalNote = "A"
    } else if (noteB) {
        totalNote = "B"
    } else if (noteC) {
        totalNote = "C"
    } else if (noteD) {
        totalNote = "D"
    } else if (noteF) {
        totalNote = "F"
    } else {
        totalNote = "Nota inválida"
    }

    return totalNote
}

console.log(getNote(100))
console.log(getNote(5))
console.log(getNote(-1))
console.log(getNote(23))
console.log(getNote(80))
console.log(getNote(47))