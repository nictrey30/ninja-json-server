// javascript for details.html
// The URLSearchParams interface defines utility methods to work with the query string of a URL.
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async (id) => {
  let uri = `http://localhost:3000/posts/${id}`;
  const res = await fetch(uri);
  const post = await res.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  
    `;

  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderDetails(id));
