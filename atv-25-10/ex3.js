function isPalindrome(str){
    let p = str.split('').reverse().join('')

    if ( str == p){
        return true
    } else {
        return false
    }

}


console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false