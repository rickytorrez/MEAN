module.exports = function(){
    return {
        add: function(num1, num2){
            console.log("The result of the addition is", num1 + num2);
        },
        multiply: function(num1, num2){
            console.log("The result of the multiplication is", num1 * num2);
        },
        square: function(num1){
            console.log("The result of these function is", num1 * num1);
        },
        random: function (num1, num2) {
            var result = Math.floor(Math.random() * num2) + num1
            console.log("The random result is", result);
        }
    }
}