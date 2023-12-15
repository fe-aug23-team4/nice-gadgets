export const getPages = (start: number, end: number, currentPage: number) => {
  const pages = [];
  const maxPagesToShow = 5;

  let startPage = start;
  let endPage = end;

  if (currentPage > maxPagesToShow - 1) {
    startPage = currentPage - 1;
    endPage = currentPage + (maxPagesToShow - 2);
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  return pages;
};
