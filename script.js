// Comentarios del blog
document.getElementById('submitComment').addEventListener('click', function() {
  const comment = document.getElementById('comment').value;
  if(comment) {
    const commentSection = document.getElementById('commentSection');
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    commentSection.appendChild(newComment);
    document.getElementById('comment').value = ''; // Limpiar el textarea
  } else {
    alert('Por favor escribe un comentario antes de enviarlo.');
  }
});
