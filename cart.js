///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,add) => acc + add.price,0)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal * (1 + tax) - couponValue

// console.log(calcFinalPrice(25,10,.0725))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
For a restaurant I would collect the following information:
First name - String - Pretty self explanatory
Last name - String - Pretty self explanatory
Phone Number - String - I chose this because Phone numbers are better stored as text so they don't get changed to a scientific notation,
                        and they don't accidentally get manipulated when you try to perform a mathematical operation on them.
itemsOrdered - String Array - This way I can see what items are popular
itemsPrice - Number Array - This way I can see different insights based on cost
Total - Number - so I can see the total for that ticket


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer1 = {
    firstName: 'Spencer',
    lastName: 'DeBrine',
    phoneNumber: '8016914887',
    itemsOrdered: ['Fries', 'Milkshake'],
    itemsPrice: [4.99, 6.99],
    totalPrice: 11.98
}