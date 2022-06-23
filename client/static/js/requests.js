async function getAllPosts(){
    try {
        const response = await fetch(`http://localhost:3000/posts`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getPostById(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postBook(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

// In Progress
// creates a html elements and populates innertext with post data
function postInstance(post){
    const postContainer = document.createElement('div');
    postContainer.className = "m-auto mt-5 col-lg-7 col-md-8 col-sm-10 post"
    
    const title = document.createElement('h4');
    title.innerText = "title";
    postContainer.append(title);

    const author = document.createElement('h2');
    author.innerText = post["author"];
    postContainer.append(author);

    const story = document.createElement('p');
    story.className = "story";
    story.innerText = post["story"];
    postContainer.append(story);
}


function fetchLoading () {
    fetch(`http://localhost:3000/posts`)
        .then(r => r.json())
        .then(r => {
            r.data.forEach(element => postInstance(element));
        })
        .catch(console.warn);
    };

fetchLoading();