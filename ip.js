let ip=""
fetch('https://api.ipify.org/?format=json').then(
  result => result.json()
).then(data=>{ip = data.ip} );
console.log(ip)