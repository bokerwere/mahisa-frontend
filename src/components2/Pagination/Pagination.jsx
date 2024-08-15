import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import "./styles.css"
import { Select } from "../Input"

const options = [
	{ label: "10", value: 10 },
	{ label: "20", value: 20 },
	{ label: "30", value: 30 },
	{ label: "50", value: 50 },
	{ label: "100", value: 100 },
]

class Pagination extends React.Component {
	render() {
		const {
			firstPage,
			lastPage,
			paginate,
			nextPage,
			prevPage,
			totalPageCount,
			currentPage,
			tab,
			styles,
			isRange,
			isMap,
			pagination,
			rowCount,
			onChangeRowCount,
		} = this.props
		let pageNumbers = []
		for (let i = 1; i <= totalPageCount; i++) {
			while (i <= 4) {
				pageNumbers.push(i)
				break
			}
			if (i > 4) {
				pageNumbers.push("....")
				pageNumbers.push(totalPageCount)
				break
			}
			if (currentPage > 4) {
				pageNumbers[1] = "...."
				pageNumbers[2] = currentPage - 1
				pageNumbers[3] = currentPage
				if (currentPage < totalPageCount) {
					pageNumbers.push("....")
					pageNumbers.push(totalPageCount)
					break
				}
				break
			}
		}

		return (
			<nav>
				<ul
					className={`pagination ${!isMap && "justify-content-end"} g-3 d-flex`}
					style={styles}
				>
					<li className={`page-item  d-flex align-items-center jus me-3`}>
						<p>
							Showing{" "}
							{pagination.totalCount < pagination.pageLimit
								? pagination.totalCount
								: pagination.pageLimit}{" "}
							of {pagination && pagination.totalCount} records
						</p>
					</li>
					<li
						style={{ marginRight: "20px", position: "relative" }}
						className={`page-item `}
						onClick={prevPage}
					>
						<Select
							value={
								rowCount
									? options.find((option) => option.value == rowCount)
									: options[0]
							}
							onChange={onChangeRowCount}
							defaultValue={
								rowCount
									? options.find((option) => option.value == rowCount)
									: options[0]
							}
							menuPlacement={"top"}
							options={options}
						/>
					</li>

					<li
						className={`page-item ${currentPage === firstPage && "disabled"}`}
						onClick={prevPage}
					>
						<a className="page-link" href="#">
							<i className="bx bx-chevron-left"></i>
						</a>
					</li>
					{this.props.currentPage > 0 &&
					this.props.totalPageCount > 0 &&
					isRange ? (
						<div className="count-number">
							{parseInt(this.props.currentPage) *
								parseInt(this.props.pageLimit) -
								parseInt(this.props.pageLimit) +
								"-" +
								parseInt(this.props.currentPage) *
									parseInt(this.props.pageLimit)}
						</div>
					) : (
						<div className="count-number">
							{totalPageCount === "N"
								? this.props.currentPage
								: `${this.props.currentPage} of ${this.props.totalPageCount}`}
						</div>
					)}
					{/* {pageNumbers.map((num) => {
            return (
              <li
                className={`page-item ${currentPage === num && "active"}`}
                onClick={() => paginate(num, tab)}
                key={num}
              >
                <a className="page-link" href="#">
                  {num}
                </a>
              </li>
            );
          })} */}
					<li
						className={`page-item ${currentPage === lastPage && "disabled"}`}
						onClick={nextPage}
					>
						<a className="page-link" href="#">
							<i className="bx bx-chevron-right"></i>
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Pagination
