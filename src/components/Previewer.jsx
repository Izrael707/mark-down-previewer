const Previewer = ({ markedDownText }) => {
	return (
		<>
			<h4 className="bg-primary opacity-75 text-white rounded-top px-3 py-1 mb-0">
				Previewer
			</h4>
			<div
				className="bg-white p-2 border border-top-0 border-secondary w-100 rounded-bottom"
				style={{ height: "40vh" }}
			>
				<div id="preview" dangerouslySetInnerHTML={markedDownText} />
			</div>
		</>
	);
};

export default Previewer;
