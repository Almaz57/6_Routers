import { Routes, Route, Navigate } from 'react-router-dom';
import { TaskList, Task, NotFound } from '../../components/index';

import { useState } from 'react';
import { useRequestGet } from '../index';

export const App = () => {
	const [inputText, setInputText] = useState(''); // Поле для ввода задачи
	const [flagToSort, setFlagToSort] = useState(false); // Режим фильтрации
	const [flagFilter, setflagFilter] = useState(false); // Режим сортировки

	const { taskList, setTaskList, isLoading } = useRequestGet(
		flagToSort,
		flagFilter,
		inputText,
	);
	return (
		<Routes>
			<Route
				path="/"
				element={
					<TaskList
						inputText={inputText}
						setInputText={setInputText}
						flagToSort={flagToSort}
						setFlagToSort={setFlagToSort}
						flagFilter={flagFilter}
						setflagFilter={setflagFilter}
						taskList={taskList}
						setTaskList={setTaskList}
						isLoading={isLoading}
					/>
				}
			/>
			<Route
				path="/tasks/:id"
				element={
					<Task
						taskList={taskList}
						setTaskList={setTaskList}
						isLoading={isLoading}
					/>
				}
			/>
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" replace />} />
		</Routes>
	);
};
