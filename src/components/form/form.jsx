import styles from './form.module.css';

export const Form = ({
	inputText,
	setInputText,
	disabledAdd,
	onClick,
	disabledSort,
	flagToSort,
	setFlagToSort,
	flagFilter,
	setflagFilter,
}) => {
	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	return (
		<>
			<div className={styles.form}>
				<input
					className={styles.input}
					type="text"
					value={inputText}
					onChange={handleChange}
				></input>
				<button
					className={styles.chgBtn}
					disabled={disabledAdd}
					onClick={() => setflagFilter(!flagFilter)}
				>
					{flagFilter ? 'To Add' : 'To search'}
				</button>
				<button
					className={flagToSort ? styles.sortBtnTrue : styles.sortBtn}
					disabled={disabledSort}
					onClick={() => setFlagToSort(!flagToSort)}
				>
					<svg className={styles.svgSortBtn} viewBox="0 0 24 24">
						<path d="M3 6h18M6 12h12M9 18h6" />
					</svg>
					Sort
				</button>
			</div>
			{!flagFilter && (
				<div className={styles.form}>
					<button
						className={styles.addBtn}
						disabled={disabledAdd}
						onClick={onClick}
					>
						+ Add
					</button>
				</div>
			)}
		</>
	);
};
