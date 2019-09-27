const https = require("https");

console.log("Please enter a number of one of the news source:\n");
console.log("1. al-jazeera\n2. cnn\n3. ntv\n4. newyork-times\n5");

const pickData = () => {
    const news_sources = {
        1: "al-jazeera",
        2: "cnn",
        3: "ntv",
        4: "newyork-times"
    };

    const standard_input = process.stdin;
    standard_input.setEncoding("utf-8");

    let user_input = "";
    standard_input.on("data",data => {
        const sources = [1,2,3,4];
        const num_data =  number(data);

        if (data === "exit\n") {
            process.exit();
        } else if (!sources.includes(num_data)) {
            console.log("Please input a valid news source");
        } else {
            const url = 'https://newsapi.org/v2/top-headlines?sources=${news_sources[num_data]}&pageSize=10&apiKey=f636332cd1824a0e871cdf2dc13bb329';
            https
            .get(url, response => {
                let data = "";
                response.on("data", chunk => {
                    data += chunk;
                });
            })
            .on("error", err => {
                error = err;
                console.log("Error", err);
            });
        }
    });
};
pickData();