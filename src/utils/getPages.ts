export const getPages = (totalPages: number, currentPage: number) => {
  const maxPagesToShow = 5;
  const pages = [];

  let startPage = currentPage;
  let endPage = currentPage + (maxPagesToShow - 1);

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(totalPages - (maxPagesToShow - 1), 1);
  }

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }

  return pages;
};
