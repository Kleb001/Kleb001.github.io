function showDetails(cardName) {
  const modal = document.getElementById('detailsModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  modal.style.display = 'flex';
  modalTitle.innerText = cardName;
  modalContent.innerText = `Details for ${cardName}`;
}

function closeDetailsModal() {
  const modal = document.getElementById('detailsModal');
  modal.style.display = 'none';
}

// Close modal if the user clicks outside the content
window.onclick = function (event) {
  const modal = document.getElementById('detailsModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
