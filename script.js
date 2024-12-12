let currentpage = 1;
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById(`pg${currentpage}`).classList.add('highlighted');
});

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    changeHighlight(pageNumber);
  }
  
  function prevPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    changeHighlight(pageNumber);
  }
  
  function changeHighlight(pageNumber) {
    document.getElementById(`pg${currentpage}`).classList.remove('highlighted');
    document.getElementById(`pg${pageNumber}`).classList.add('highlighted');
    currentpage = pageNumber;
  }
   