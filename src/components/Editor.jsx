const Editor = ({ inputValue, handleInputChange }) => {
	return (
		<>
			<h4 className="bg-primary opacity-75 text-white rounded-top px-3 py-1 mb-0">
				Editor
			</h4>
			<div className="form-floating">
				<textarea
					className="form-control rounded-top-0"
					placeholder="type in here"
					id="editor"
					value={inputValue}
					onChange={handleInputChange}
					style={{ height: "35vh" }}
				></textarea>
				<label htmlFor="editor">type something...</label>
			</div>
		</>
	);
};

export default Editor;
