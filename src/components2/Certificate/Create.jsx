import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
	page: { backgroundColor: "white", width: "100%" },
	section: {
		color: "black",
		backgroundColor: "white",
		textAlign: "center",
		margin: 30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
	},
})

const Create = ({ limiter }) => {
	console.log("Passed limiter: ", limiter)

	return (
		<Document style={{border: "1px solid red"}}>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text> {limiter.vendor_name} </Text>
				</View>
			</Page>
		</Document>
	)
}

export default Create
