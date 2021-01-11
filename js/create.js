// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();
  // create an object that will represent a new blog that we will save in the json file
  const blog = {
    title: e.target.title.value,
    body: e.target.body.value,
    likes: 0
    // json-server will automatically add an id
  };

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(blog),
    headers: { 'Content-Type': 'application/json' }
  });

  // The replace() method of the Location interface replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
  window.location.replace('/index.html');
};

// we don't put createPost in an anonym arrow function because i wante to take in the event obj automatically
form.addEventListener('submit', createPost);
