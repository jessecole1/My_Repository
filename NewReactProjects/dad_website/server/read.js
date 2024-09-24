const fs = require('fs');
const axios = require('axios');

console.log("entering read.js file..");

const saveHandler = (data) => {
    // console.log("DATA: " + JSON.stringify(data.comments));
    
  
        axios.post("http://localhost:8000/post/create", {
            title: data.title, 
            publishDate: data.publishDate,
            content: data.content,
            category: data.category,
            comments: data.comments,
            author: {
                firstName: "Jude",
                lastName: "Cole",
                displayName: "Bandini55"
            }
            // originalPostId: data.originalPostId,
            // postDate: data.postDate,
        })
        .then(() => console.log("saveHandler successfully executed"))
        .catch((err) => console.log("saveHandler unsuccessful", err))

}

const parseItemHandler = (items) => {
    // let onePost = {};
    let num = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].category === undefined) {console.log("undefined category item found")}
        else if (items[i].category.__cdata === "Uncategorized") {
            console.log("uncategorized item found..");
            let oneDate = new Date(items[i].pubDate);
            let onePost = {
                title: items[i].title,
                publishDate: oneDate,
                content: items[i].encoded[0].__cdata,
                category: items[i].category.__cdata,
                comments: items[i].comment
            }
            // console.log("comments: " + JSON.stringify(items[i].comment));

            saveHandler(onePost);
        }
    }
}



module.exports.readTheFile = () => {
    console.log("entering readTheFile function..");

    let itemArray = [];

    try {

        fs.readFile("json.txt", (err, data) => {
            if (err) throw err;
        
            let fileData = data.toString();
            
            let obj = JSON.parse(fileData);
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let value=obj[key]
                }
            }
            
            parseItemHandler(obj.rss.channel.item);
        })
    } catch {
        console.log("Error reading the file: ");
    }
    console.log("Exited all the post methods, moving towards the get..");

    // axios.get("http://localhost:8000/posts")
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log("Couldn't get posts", err))
}