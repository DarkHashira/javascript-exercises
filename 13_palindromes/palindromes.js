const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890"
    const filteredString = string.
    toLowerCase()
    .split("")
    .filter((characters)=> alphanumerical.includes(characters))
    .join('')

    const reverse = filteredString.split("").reverse().join("")

    return filteredString===reverse

    
};

// Do not edit below this line
module.exports = palindromes;
