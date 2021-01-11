// javascript for index.html
const container = document.querySelector('.blogs');

const renderPosts = async () => {
  // _sort and _order at the end of the uri is provided by json-server
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
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

// wait to fetch the data until the document has loaded
// renderPosts is wrapped in an arrow function because I don't wanna get the event object
window.addEventListener('DOMContentLoaded', () => renderPosts());
