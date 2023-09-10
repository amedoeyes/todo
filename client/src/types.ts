export type Task = {
	id: string;
	title: string;
	description: string;
	dueDate: Date;
	creationDate: Date;
	status: "pending" | "done";
	isLate: boolean;
};

export type TaskFormValues = {
	title: string;
	description: string;
	dueDate: Date;
	creationDate?: Date;
};
