const fs = require('fs');
const Post = require('./post.model');
const axios = require('axios');


require('./mongoose.config');

const express = require('express');

const app = express();

const port = 8000;

app.listen(port, () => {console.log(`Listening on port: ${port}`)});


// HTTP Functions
const savePost = (request, response) => {
    Post.create(request.body)
    .then((savedPost) => {
        console.log("Saved to database successfully", savedPost);
    })
    .catch((err) => {
        console.log("Couldnt save to database", err);
    })
}

const getAllPosts = (request, response) => {
    Post.find()
    .then(posts => {
        response.json({posts: posts})
    })
    .catch((err) => console.log("Trouble getting posts", err))
}


const saveHandler = (data) => {
    console.log(data);
    axios.post('http://localhost:8000/save/post', {
        title: data.title, 
        publishDate: data.publishDate,
        content: data.content,
        originalPostId: data.originalPostId,
        postDate: data.postDate,
        category: data.category,
        comments: data.comments
    })
    .then(() => console.log("saveHandler function success"))
    .catch((err) => console.log("saveHandler failed", err))
}

const getAllPostHandler = (request, response) => {
    axios.get('http://localhost:8000/all/post')
    .then((response) => {
        console.log(response.body)
    })
    .catch((err) => {
        console.log("Couldnt fetch the posts data", err)
    })
}

// ROUTES
app.get('/all/post', getAllPosts);
app.post('/save/post', savePost);



fs.readFile("json.txt", (err, data) => {
    if (err) throw err;

    fileData = data.toString();
    
    let obj = JSON.parse(fileData);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value=obj[key]
        }
    }
    const itemArray = obj.rss.channel.item

    let num = 0;
    for (let i = 0; i < itemArray.length; i++) {
        let onePost;
        if (itemArray[i].category === undefined) {
            continue;
        }
        else if (itemArray[i].category.__cdata === "Uncategorized") {
            onePost = {
                title: itemArray[i].title,
                publishDate: itemArray[i].pubDate,
                content: itemArray[i].encoded[0].__cdata,
                originalPostId: itemArray[i].post_id,
                postDate: itemArray[i].post_date,
                category: itemArray[i].category,
                comments: [itemArray[i].comment]
            }
            saveHandler(onePost);
            // console.log(fileData);
            num++;
        }
    }
    console.log("Num: " + num);
})

getAllPostHandler();