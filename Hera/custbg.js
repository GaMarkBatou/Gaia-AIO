window.onload = () => {
  const savedBg = localStorage.getItem('customBackground');
  if (savedBg) {
    document.querySelector('.background-layer').style.backgroundImage = `url('${savedBg}')`;
  }
};