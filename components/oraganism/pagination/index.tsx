export default function Pagination({ totalPost, postPerPage, paginate } : any) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="page-navigation" aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
