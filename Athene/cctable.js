document.addEventListener('DOMContentLoaded', () => {
  // Sort table by column index
  function sortTable(table, colIndex, asc = true) {
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumeric = !isNaN(rows[0].cells[colIndex].innerText.trim());

    rows.sort((a, b) => {
      let cellA = a.cells[colIndex].innerText.trim();
      let cellB = b.cells[colIndex].innerText.trim();
      if (isNumeric) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }
      if (cellA < cellB) return asc ? -1 : 1;
      if (cellA > cellB) return asc ? 1 : -1;
      return 0;
    });

    // Remove old rows
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    // Append sorted rows
    rows.forEach(row => tbody.appendChild(row));
  }

  const table = document.getElementById('myTable');
  let sortAsc = true;
  let lastSortedCol = -1;
  const headers = table.querySelectorAll('th');

  headers.forEach((th, index) => {
    th.addEventListener('click', () => {
      if (lastSortedCol === index) {
        sortAsc = !sortAsc; // toggle ascending/descending
      } else {
        sortAsc = true;
      }
      headers.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(sortAsc ? 'sorted-asc' : 'sorted-desc');
      sortTable(table, index, sortAsc);
      lastSortedCol = index;
    });
  });

  const resizers = document.querySelectorAll('th .resizer');
  resizers.forEach(function(resizer) {
    let startX, startWidth, column;

    resizer.addEventListener('mousedown', function(e) {
      e.preventDefault();
      startX = e.pageX;
      column = e.target.parentElement;
      startWidth = column.offsetWidth;

      document.addEventListener('mousemove', resizeColumn);
      document.addEventListener('mouseup', stopResize);
    });

    function resizeColumn(e) {
      const newWidth = startWidth + (e.pageX - startX);
      if (newWidth > 30) {
        column.style.width = newWidth + 'px';
      }
    }

    function stopResize() {
      document.removeEventListener('mousemove', resizeColumn);
      document.removeEventListener('mouseup', stopResize);
    }
  });
});
