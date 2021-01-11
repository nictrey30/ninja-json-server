// javascript for index.html
const container = document.querySelector('.blogs');
const searchFrom = document.querySelector('.search');

const renderPosts = async (term) => {
  // _sort and _order at the end of the uri is provided by json-server
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  // check if term has a value or not. If it has a value append the uri for search
  if (term) {
    // it is handled by the json-server. If it finds the term then it's gonna add that document to the data that is given back
    uri += `&q=${term}`;
  }
  const res = await fetch(uri);
  const posts = await res.json();

  let template = '';
  posts.forEach((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <a href="/details.html?id=${post.id}">Read more</a>
      </div>
    `;
  });
  container.innerHTML = template;
};

searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPosts(e.target.term.value.trim());
});

// wait to fetch the data until the document has loaded
// renderPosts is wrapped in an arrow function because I don't wanna get the event object
window.addEventListener('DOMContentLoaded', () => renderPosts());
