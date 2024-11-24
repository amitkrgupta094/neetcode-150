# [1108. Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address/description/)

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

A defangedIP addressreplaces every period `"."` with `"[.]"`.

**Example 1:**

```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

**Example 2:**

```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

**Constraints:**

- The given `address` is a valid IPv4 address.


```
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defangedIPAddress = '';
    for(let char of address) {
        if(char === ".") defangedIPAddress += '[.]';
        else defangedIPAddress += char;
    }

    return defangedIPAddress;
};
```
