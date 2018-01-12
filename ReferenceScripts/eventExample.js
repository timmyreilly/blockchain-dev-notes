// run this after running starter.js in the REPL. 

// var exampleEvent = settlementInstance.ClientBalanceDeposit({ from: web3.eth.accounts[0] });
// exampleEvent.watch(function(err, result) {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log("event hit")
//   // check that result.args._from is web3.eth.coinbase then
//   // display result.args._value in the UI and call    
//   // exampleEvent.stopWatching()
// });
// settlementInstance.addClientFunds('1', { from: web3.eth.accounts[0] });

var triggerPaymentEvent = settlementInstance.PaymentFinished({ from: web3.eth.accounts[0] }); 
triggerPaymentEvent.watch(function(err, result) {
    if(err) {
        console.log(err)
        return; 
    }
    console.log("triggered!!!");
});

settlementInstance.triggerPaymentEvent('12', {from: web3.eth.accounts[0] }); 