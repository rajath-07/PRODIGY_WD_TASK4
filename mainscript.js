<script>
  function sharePortfolio() {
    if (navigator.share) {
      navigator.share({
        title: 'My Portfolio',
        text: 'Check out my portfolio!',
        url: window.location.href,
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  }
</script>
