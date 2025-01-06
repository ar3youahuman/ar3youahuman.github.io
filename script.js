document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (title && content) {
    const postList = document.getElementById('posts');

    const newPost = document.createElement('li');
    newPost.innerHTML = `<strong>${title}</strong><p>${content}</p>`;

    postList.appendChild(newPost);

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  }
});
