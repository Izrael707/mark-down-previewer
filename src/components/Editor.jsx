import { useState } from "react";

const Editor = ({
	inputValue,
	handleInputChange,
	editorIconClicked,
	setEditorIconClicked,
}) => {
	const handleIconClick = () => {
		setEditorIconClicked(!editorIconClicked);
		console.log(editorIconClicked);
	};

	const expandIcon = `bi bi-arrows-angle-expand`;
	const contractIcon = `bi bi-arrows-angle-contract`;
	const iconStyles = editorIconClicked ? contractIcon : expandIcon;

	const textAreaStyles = editorIconClicked
		? { height: "75vh" }
		: { height: "35vh" };

	return (
		<div className="mt-1 px-5">
			<div className="bg-light opacity-75 rounded-top px-2 py-1 d-flex justify-content-between align-items-center">
				<h4 className="mb-0">Editor</h4>
				<button
					onClick={handleIconClick}
					className="btn p-1 text-black"
					role="button"
				>
					<i className={iconStyles}></i>
				</button>
			</div>
			<div className="form-floating">
				<textarea
					className="form-control rounded-top-0"
					placeholder="type in here"
					id="editor"
					value={inputValue}
					onChange={handleInputChange}
					style={textAreaStyles}
				></textarea>
				<label htmlFor="editor">type something...</label>
			</div>
		</div>
	);
};

export default Editor;
