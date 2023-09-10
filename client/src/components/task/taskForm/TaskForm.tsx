import { Box, Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { TaskFormValues } from "../../../types";

type TaskFormProps = {
	values?: TaskFormValues;
	isLoading?: boolean;
	submitButtonText?: string;
	onSubmit?: (values: TaskFormValues) => void;
};

export default function TaskForm(props: TaskFormProps) {
	const initialValues = {
		title: props.values?.title || "",
		description: props.values?.description || "",
		dueDate: dayjs(props.values?.dueDate),
	};

	const [formValues, setFormValues] = useState(initialValues);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;

		setFormValues({
			...formValues,
			[id]: value,
		});
	};

	const handleDateChange = (date: Dayjs | null) => {
		if (!date) return;

		setFormValues({
			...formValues,
			dueDate: date,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const values = {
			...formValues,
			dueDate: formValues.dueDate.toDate(),
		};

		props.onSubmit && props.onSubmit(values);
	};

	const descriptionRows = formValues.description.split("\n").length;

	return (
		<Box component="form" marginTop={1} onSubmit={handleSubmit}>
			<Stack spacing={2}>
				<TextField
					id="title"
					label="Title"
					value={formValues.title}
					onChange={handleInputChange}
					required
					autoFocus
				/>
				<TextField
					id="description"
					label="Description"
					multiline
					rows={descriptionRows < 3 ? 3 : descriptionRows}
					value={formValues.description}
					onChange={handleInputChange}
					required
				/>
				<DatePicker
					label="Due Date"
					value={formValues.dueDate}
					onChange={handleDateChange}
					slotProps={{
						textField: {
							required: true,
						},
					}}
				/>

				<Button
					variant="contained"
					type="submit"
					disabled={props.isLoading}
				>
					{props.submitButtonText || "Submit"}
				</Button>
			</Stack>
		</Box>
	);
}
