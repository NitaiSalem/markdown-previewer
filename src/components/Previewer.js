import marked from 'marked';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpandArrowsAlt } from '@fortawesome/fontawesome-free-solid';

export const Previewer = ({ togglePreviewer, previewerFullscreen, style, text }) => {
	const markdown = marked(text, { sanitize: true });
	marked.setOptions({
		breaks: true
	});
	return (
		<div id={style}>
			<div className="title-container">
				<h3 className="component-title">Previewer</h3>
				<button onClick={togglePreviewer}>
					{previewerFullscreen ? (
						<FontAwesomeIcon icon={faCompress} />
					) : (
						<FontAwesomeIcon icon={faExpandArrowsAlt} />
					)}
				</button>
			</div>
			<div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
		</div>
	);
};
