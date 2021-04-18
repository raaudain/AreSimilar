// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    // If arrays are equal, return true
    if (a.toString() === b.toString()) {
        return true;
    }
    
    // Store items that aren't equal
    let c = [];
    let d = [];
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    
    d = d.reverse();
    
    // The max number of each array is three. If c's length is three, the arrays aren't similar.
    if (c.length === 2 && c.toString() === d.toString()) {
        return true;
    }
    
    return false;
}
