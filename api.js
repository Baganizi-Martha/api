const pickData = require("/index.js")
const sources = [1,2,3,4];
console.log("1. al-jazeera\n2. cnn\n3. ntv\n4. newyork-times\n5");

const news_sources = {
    1: "al-jazeera",
    2: "cnn",
    3: "ntv",
    4: "newyork-times"
}; 

test("Enter number to receive al-jazeera", () => {
    expect(news_sources[1]).toBe("al-jazeera");
    expect(news_sources[2]).toBe("cnn");
    expect(news_sources[3]).toBe("ntv");
    expect(news_sources[4]).toBe("newyork-times");
});

test("no news_source should be null", () => {
    expect(news_sources[2]).not.toBeNull();
});

test("When you enter a number above the ones in sources", () => {
    expect(news_sources[5]).toBeFalsy();
});