const accountId = 123456;
let accountEmail = "vishaljagdale633@gmail.com";

var accountPassword = "2365";

accountCity = "Satara";

// accountId = 23 // Not Allowed

accountEmail = "vishal.jagadale@pce.in";
accountPassword = "36554";

accountCity = "Bidal"

/*
    Prefer not to use var
    because of issue in block scope and functional use.
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

