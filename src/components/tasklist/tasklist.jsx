import styles from './tasklist.module.css';
import { Form } from '../index';
import { useRequestAdd } from '../index';
import { Routes, Route, Link } from 'react-router-dom';

export const TaskList = ({
	inputText,
	setInputText,
	flagToSort,
	setFlagToSort,
	flagFilter,
	setflagFilter,
	taskList,
	setTaskList,
	isLoading,
}) => {
	const { requestAdd, isCreating } = useRequestAdd(setTaskList, inputText);

	return (
		<div className={styles.container}>
			<label className={styles.title}>
				{isLoading ? 'Загрузка...' : 'ToDo List'}
			</label>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				disabledAdd={isCreating}
				onClick={requestAdd}
				disabledSort={isLoading}
				flagToSort={flagToSort}
				setFlagToSort={setFlagToSort}
				flagFilter={flagFilter}
				setflagFilter={setflagFilter}
			/>

			<div className={styles.todoTasksList}>
				{taskList.map((data) => (
					<Link
						to={`/tasks/${data.id}`}
						key={data.id}
						className={`${styles.link} ${data.complete ? styles.completed : ''}`}
					>
						{data.title}
					</Link>
				))}
			</div>
		</div>
	);
};
