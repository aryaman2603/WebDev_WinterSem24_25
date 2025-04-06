function checkPalindrome(){
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    const isPalindrome = input === reversed;
    document.getElementById('result').textContent = isPalindrome?"Its a palindrome":"Its not a palindrome";
}