let ip = ""
let sum = 0
async function getip() {
    let array_IP = []
    const result = await fetch('https://api.ipify.org/?format=json')
    ip = await result.json();
    ip = ip.ip
    array_IP = ip.split(".")
    console.log(array_IP)
    for (let i = 0; i < array_IP.length; i++) {
        if (array_IP[i] % 2 == 0) {
            sum += array_IP[i]

        }
    }
    return array_IP
}
getip()