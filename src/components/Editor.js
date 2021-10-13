import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpandArrowsAlt } from '@fortawesome/fontawesome-free-solid';

export const Editor = ({ style, text, toggleEditor, editorFullscreen, onChange }) => {
	return (
		<div id={style}>
			<div className="title-container">
				<h3 className="component-title">Editor</h3>
				<button onClick={toggleEditor}>
                {editorFullscreen ? (
						<FontAwesomeIcon icon={faCompress} />
					) : (
						<FontAwesomeIcon icon={faExpandArrowsAlt} />
					)}
				</button>
			</div>
			<textarea id="editor" value={text} onChange={onChange} />
		</div>
	);
};
