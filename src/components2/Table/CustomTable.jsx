import MaterialTable from "material-table"
import { ThemeProvider, createTheme } from '@mui/material'
import { TableIcons } from "./TableIcons"
import "./styles.css"

const CustomTable = ({
	data = [],
	title = "",
	isLoading = false,
	onChangeRowCount,
	rowPress,
	pagination = {},
	tableIcons,
	headers = [],
	actions,
	tableRef,
	style,
	actionsColumnIndex,
	actionsCellStyle,
	grouping = false,
	columnsButton = true,
	options = {},
	minBodyHeight = "auto",
	maxBodyHeight = "auto",
	components = {},
}) => {
	const defaultMaterialTheme = createTheme()

	return (
		<div className="table-responsive">
			<ThemeProvider theme={defaultMaterialTheme}>
				<MaterialTable
					title={title ? title : ""}
					isLoading={isLoading}
					// onChangePage={onChangePage}
					onChangeRowsPerPage={onChangeRowCount}
					onRowClick={rowPress}
					page={pagination.pageNumber}
					totalCount={pagination.totalCount}
					// icons={tableIcons}
					icons={TableIcons}
					columns={headers}
					data={data}
					actions={actions}
					tableRef={tableRef}
					style={style}
					options={{
						actionsColumnIndex: actionsColumnIndex,
						actionsCellStyle: {
							...actionsCellStyle,
						},
						grouping: grouping,
						paging: false, //pagination === false ? false : true,
						headerStyle: {
							backgroundColor: "#FFFFFF",
							color: "rgba(0,0,0,0.8)",
							// fontWeight: "600",
							height: "20px",
							border: "0.8px solid rgba(0,0,0,0.12)",
							borderSpacing: "2px",
							borderBottom:"1px solid rgba(0,0,0,1)",
							whiteSpace: "nowrap",
							// padding: "6px 12px 6px 6px",
						},
						rowStyle: {
							color: "#000",
							height: "10px",
							fontSize: "14px",
						},
						cellStyle: {
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							overflow: "hidden",
							maxWidth: "100px",
							border: "1px solid rgba(0,0,0,0.12)",
							padding: "6px 12px 6px 6px",
							color: "rgba(0,0,0,0.8)",
						},
						padding: "dense",
						searchFieldVariant: "outlined",
						searchFieldStyle: {
							backgroundColor: "white",
							borderRadius: "6px",
							height: "42px",
						},
						minBodyHeight: minBodyHeight,
						maxBodyHeight: maxBodyHeight,
						searchFieldAlignment: "left",
						// pageSize: 10,
						pageSizeOptions: [10, 20, 30, 50],
						emptyRowsWhenPaging: false,
						toolbar: false,
						columnsButton: columnsButton,
						...options,
					}}
					components={{
						Toolbar: (props) => {
							return (
								<div
									style={{
										backgroundColor: "#F6F8F9",
										border: "1px solid rgba(0,0,0,0.12)",
										borderBottom: "none",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<MTableToolbar {...props} />
								</div>
							)
						},
						// Pagination: PatchedPagination,
						...components,
					}}
				/>
			</ThemeProvider>
		</div>
	)
}

export default CustomTable
