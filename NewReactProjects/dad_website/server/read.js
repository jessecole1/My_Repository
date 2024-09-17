const fs = require('fs');
const axios = require('axios');

console.log("entering read.js file..");

const saveHandler = (data) => {
    console.log("DATA: " + JSON.stringify(data.category));
  
        axios.post("http://localhost:8000/post/create", {
            title: data.title, 
            publishDate: data.publishDate,
            content: data.content,
            category: data.category,
            comments: data.comments
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
        console.log(items[i].title);
        if (items[i].category === undefined) {console.log("undefined category item found")}
        else if (items[i].category.__cdata === "Uncategorized") {
            console.log("uncategorized item found..");
            let onePost = {
                title: items[i].title,
                publishDate: items[i].pubDate,
                content: items[i].encoded[0].__cdata,
                category: items[i].category.__cdata,
                comments: items[i].comment
                // originalPostId: items[i].post_id,
                // postDate: items[i].post_date,
            }
            // console.log("hopefully? " + onePost);
            saveHandler(onePost);
        }
        // console.log("onePost: " + JSON.stringify(onePost));
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