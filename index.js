var customerName = 'bob';

function upperCaseCustomerName() {
    if(typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';

}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';

}

const leastFavouriteCustomer = 'John';

function changeLeastFavouriteCustomer() {
    leastFavouriteCustomer ='Jane'
    
}
