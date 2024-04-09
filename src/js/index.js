const xhttp = new XMLHttpRequest();
xhttp.open(`GET`, `http://localhost:3000/comments`);
const listComment = document.querySelector(".comment-section");

xhttp.onload = () => {
  if (xhttp.status >= 200 && xhttp.status < 300) {
    const data = JSON.parse(xhttp.responseText)
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = `id is ${data[i].id}, comment is ${data[i].text} at post ${data[i].postId}`;
      listComment.appendChild(listItem);
    }
  } else {
    console.error("Something really bad happened");
  }
};

xhttp.send();

const searchProduct = () => {
    const queryValue = document.getElementById('search').value
    console.log(queryValue);
}