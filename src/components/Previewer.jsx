const Previewer = ({ markedDownText, previewerIconClicked, setPreviewerIconClicked }) => {
  const handleIconClick = () => {
		setPreviewerIconClicked(!previewerIconClicked);
		console.log(previewerIconClicked);
	};

	const expandIcon = `bi bi-arrows-angle-expand`;
	const contractIcon = `bi bi-arrows-angle-contract`;
	const iconStyles = previewerIconClicked ? contractIcon : expandIcon;

  const previewTabStyles = previewerIconClicked ? { height: "75vh" }:{ height: "40vh" }
	return (
		<div className="mt-2 px-2">
			<div className="bg-light opacity-75 rounded-top px-2 py-1 d-flex justify-content-between align-items-center">
				<h4 className="mb-0">Previewer</h4>
				<button
					onClick={handleIconClick}
					className="btn p-1 text-white"
					role="button"
				>
					<i className={iconStyles}></i>
				</button>
			</div>
			<div
				className="bg-white p-2 border border-top-0 border-secondary w-100 rounded-bottom"
				style={previewTabStyles}
			>
				<div id="preview" dangerouslySetInnerHTML={markedDownText} />
			</div>
		</div>
	);
};

export default Previewer;
