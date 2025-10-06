let data1 = true
let data2 = false

function dothing() {
    console.log("doing something !")
}

let something = "hello !"

// named export
export { data1 }
export { data2, dothing }

export function dothing2() {
    console.log("doing someting 2 !")
}

export default something