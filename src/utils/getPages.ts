export const getPages = (totalPages: number, currentPage: number) => {
  const pages = [];

  const startPage = currentPage > 3
    ? currentPage - 2
    : 1;

  const endPage = currentPage + 2 < totalPages
    ? currentPage + 2
    : totalPages;

  for (let i = startPage; i <= endPage; i += 1) {
    pages.push({ key: i.toString(), value: i.toString() });
  }

  if (startPage > 2) {
    pages.unshift(
      { key: '1', value: '1' },
      { key: 'firstDots', value: '..' },
    );
  } else if (startPage === 2) {
    pages.unshift({ key: '1', value: '1' });
  }

  if (endPage < totalPages - 1) {
    pages.push(
      { key: 'secondDots', value: '..' },
      { key: totalPages.toString(), value: totalPages.toString() },
    );
  } else if (endPage === 7) {
    pages.push(
      { key: totalPages.toString(), value: totalPages.toString() },
    );
  }

  return pages;
};
