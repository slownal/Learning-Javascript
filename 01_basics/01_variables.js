const accountId = 144553
let accountEmail="sonal@gmail.com"
var accountPassword='12345'
accountCity="Jaipur"
let accountState
// accountId=2 //not allowed

accountEmail="hc@hc.com"
accountPassword="Bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope 
and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])