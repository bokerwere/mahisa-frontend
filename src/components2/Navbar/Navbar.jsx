import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { LoadingSpinner } from "../LoadingSpinner"

const Navbar = ({
	user,
	onToggle,
	sidebarSize,
	onSignMeOut,
	title,
	notifications,
	isLoadingViolationNotification,
}) => {
	const [data, setNotifications] = React.useState([])
	const [notificationCount, setNotificationCount] = React.useState(0)

	React.useEffect(() => {
		setNotifications(data)

		setNotificationCount(
			notifications.filter((item) => item.status === "unresolved").length
		)
	}, [])

	//handle notification on click
	const handleClick = (id) => {
		const newNotifications = notifications.map((notification) => {
			if (notification.id === id) {
				notification.readStatus = "read"
			}
			return notification
		})
		setNotifications(newNotifications)
		setNotificationCount(
			newNotifications.filter((item) => item.readStatus === "unread").length
		)
		// window.location.href = `/home/vendor_violation/${id}`
	}

	const handleMarkAll = (e) => {
		e.preventDefault()
		const newNotifications = notifications.map((notification) => {
			notification.readStatus = "read"
			return notification
		})
		setNotifications(newNotifications)
		setNotificationCount(0)
	}
	const handleViewAllViolations = (e) => {
		e.preventDefault()
		// window.location.href = "/home/reports/alerts"
	}

	let titles = (title && title.split(" ")) || []
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<div className="navbar-brand" to="#">
						<div className={`toggleBtn ${sidebarSize}`} onClick={onToggle}>
							<i className={"bx bx-menu"}></i>
						</div>

						<h1>
							{/* {titles.at(-1)} {titles.at(1)} */}
							{titles.at(-1) && titles.at(-1).replaceAll("%20", " ")}
						</h1>
					</div>
					<div className="navbar-content">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<div className="nv-i dropdown-toggle" data-bs-toggle="dropdown">
									<div style={{ position: "relative" }}>
										<i className="bx bxs-bell"></i>
										{notificationCount !== 0 && (
											<div className="nv-notification">
												<span>{notificationCount}</span>
											</div>
										)}
									</div>
								</div>
								<div className="dropdown-menu custom-dropdown dropdown-menu-end">
									<div className="title-wrap d-flex align-items-center justify-content-between">
										<h3 className="title mb-0">Notifications</h3>
										{/* <a
                      href="#"
                      className="small ml-auto"
                      onClick={handleMarkAll}
                    >
                      Mark all as read
                    </a> */}
									</div>
									{isLoadingViolationNotification ? (
										<div style={{ width: 300 }}>
											<LoadingSpinner />
										</div>
									) : (
										<>
											<ul
												className={`notification-list ${
													notifications.length === 0 && "empty"
												}`}
											>
												{notifications.length === 0 ? (
													<>
														<center>
															<div className="empty_not_icon">
																<i className="bx bxs-inbox"></i>
															</div>
															<p className="empty_notification">
																No notification
															</p>
														</center>
													</>
												) : (
													notifications.map(
														(item, index) =>
															item.status === "unresolved" && (
																<li key={index}>
																	<a
																		className="dropdown-item position-relative"
																		href="#"
																		onClick={() => handleClick(item.id)}
																	>
																		<div className="notification">
																			<div className="notification-body">
																				<div className="row d-flex justify-content-between position-relative">
																					<span className="col-xs-3">
																						{item.vehicle}
																					</span>

																					<span className="col-xs-3">
																						{item.violation.speed}
																					</span>
																				</div>
																				<p className="mb-0">
																					{item.violation.name}
																				</p>
																			</div>
																		</div>
																		<span className="position-absolute top-1 mr-2 start-90 translate-middle p-1 bg-danger border border-light rounded-circle">
																			<span className="visually-hidden">
																				New alerts
																			</span>
																		</span>
																	</a>
																</li>
															)
													)
												)}
											</ul>
											<p className="text-center m-0 p-2">
												<a
													href="#"
													className="small"
													onClick={handleViewAllViolations}
												>
													View All
												</a>
											</p>
										</>
									)}
								</div>
							</li>
							<li className="nav-item">
								<Link className="nv-i" to="/home/options/profile">
									<i className="bx bxs-cog"></i>
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{user.firstName ? user.firstName + " " + user.lastName : user.username? user.username: "-"}
								</Link>
								<ul
									className="dropdown-menu dropdown-menu-end"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<Link
											to="#"
											className="dropdown-item"
											onClick={onSignMeOut}
										>
											Logout
										</Link>
									</li>
								</ul>
							</li>
						</ul>
						<div className="d-flex"></div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
