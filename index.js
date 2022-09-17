var customerName = 'bob'
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase() 
} 
function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'absolutely bob'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'still not bob'
    
}