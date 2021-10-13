import React, { useState } from 'react';
import { DEFAULTMARKDOWN } from '../utils';
import { Editor } from './Editor';
import { Previewer } from './Previewer';

const MarkdownPreviewer = () => {
	const [input, setInput] = useState(DEFAULTMARKDOWN);
	const [editorFullscreen, setEditorFullscreen] = useState(false);
	const [previewerFullscreen, setPreviewerFullscreen] = useState(false);

	const handleChange = ({ target }) => setInput(target.value);

	const toggleEditor = () => setEditorFullscreen(!editorFullscreen);

	const togglePreviewer = () => setPreviewerFullscreen(!previewerFullscreen);

	return (
		<div id="container">
			{!previewerFullscreen && (
				<Editor
					style={editorFullscreen ? 'fullwidth' : 'editor-container'}
					text={input}
					onChange={handleChange}
					toggleEditor={toggleEditor}
					editorFullscreen={editorFullscreen}
				/>
			)}
			{!editorFullscreen && (
				<Previewer
					previewerFullscreen={previewerFullscreen}
					style={previewerFullscreen ? 'fullwidth' : 'preview-container'}
					text={input}
					togglePreviewer={togglePreviewer}
				/>
			)}
		</div>
	);
};

export default MarkdownPreviewer;
