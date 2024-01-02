describe("#doubleValues", function() {
  it("doubles each value in the array", function() {
    expect(doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe("#onlyEvenValues", function() {
  it("returns an array with only the even values", function() {
    expect(onlyEvenValues([1, 2, 3, 4])).toEqual([2, 4]);
  });
});

describe("#showFirstAndLast", function() {
  it("concatenates the first and last characters of each string in the array", function() {
    expect(showFirstAndLast(['abc', 'def', 'ghi'])).toEqual(['ac', 'df', 'gi']);
  });
});

describe("#addKeyAndValue", function() {
  it("adds a key-value pair to each object in the array", function() {
    expect(addKeyAndValue([{ name: 'John' }, { name: 'Jane' }], 'age', 25)).toEqual([{ name: 'John', age: 25 }, { name: 'Jane', age: 25 }]);
  });
});

describe("#vowelCount", function() {
  it("counts the occurrences of vowels in a string", function() {
    expect(vowelCount("Hello, World!")).toEqual({ e: 1, o: 2 });
  });
});

describe("#doubleValuesWithMap", function() {
  it("doubles each value in the array using map", function() {
    expect(doubleValuesWithMap([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe("#valTimesIndex", function() {
  it("multiplies each value by its index", function() {
    expect(valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
  });
});

describe("#extractKey", function() {
  it("extracts the values of a specific key from an array of objects", function() {
    expect(extractKey([{ name: 'John' }, { name: 'Jane' }], 'name')).toEqual(['John', 'Jane']);
  });
});

describe("#extractFullName", function() {
  it("combines the 'first' and 'last' properties to form full names", function() {
    expect(extractFullName([{ first: 'John', last: 'Doe' }, { first: 'Jane', last: 'Doe' }])).toEqual(['John Doe', 'Jane Doe']);
  });
});

describe("#filterByValue", function() {
  it("filters objects based on the presence of a key", function() {
    expect(filterByValue([{ name: 'John' }, { age: 25 }, { gender: 'Male' }], 'name')).toEqual([{ name: 'John' }]);
  });
});

describe("#find", function() {
  it("finds the first occurrence of a value in an array", function() {
    expect(find([1, 2, 3, 2], 2)).toEqual(2);
  });
});

describe("#findInObj", function() {
  it("finds the first object with a specific key-value pair", function() {
    expect(findInObj([{ name: 'John' }, { name: 'Jane', age: 25 }], 'name', 'Jane')).toEqual({ name: 'Jane', age: 25 });
  });
});

describe("#removeVowels", function() {
  it("removes vowels from a string", function() {
    expect(removeVowels("Hello, World!")).toEqual("hll, wrld!");
  });
});



describe("#doubleOddNumbers", function() {
  it("doubles the values of odd numbers in an array", function() {
    expect(doubleOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 6, 10]);
  });
});

// Additional tests based on your previous requirements...
// ...

// You can continue adding similar test cases for the remaining functions.
