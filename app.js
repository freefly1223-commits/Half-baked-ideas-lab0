// Donation buttons
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove selected from all
    document.querySelectorAll('.donate-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    const amount = btn.dataset.amount;
    const subject = encodeURIComponent(`Donation of \[ {amount} to Half Baked Ideas Lab`);
    const body = encodeURIComponent(`Hi Lab,\n\nI'd like to donate \]{amount}.\n\nThank you!`);

    window.location.href = `mailto:halfbakedideaslab0@gmail.com?subject=\( {subject}&body= \){body}`;
  });
});
