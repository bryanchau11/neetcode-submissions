class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s.length)
        if (s.length ==1) {
            return true;
        }
        if (s.length <1) {
            return false;
        }
        let newStr = '';
        for (let i=0; i < s.length; i++) {
            if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90 || s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122 || 
            s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
                newStr += s[i].toLowerCase()
            }
        }
        let l = 0;
        let r = newStr.length-1;
        console.log(newStr)
        if (newStr.length ==1) {
            return true;
        }
        while (l < r) {
            if (newStr[l]!== newStr[r]) {
                return false;
            }
            l+=1;
            r-=1;
        }
        return true
    }
}
