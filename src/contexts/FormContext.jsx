import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
	const [formData, setFormData] = useState({});
	const [submitAction, setSubmitAction] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<FormContext.Provider
			value={{
				formData,
				setFormData,
				submitAction,
				setSubmitAction,
				isSubmitting,
				setIsSubmitting,
			}}
		>
			{children}
		</FormContext.Provider>
	);
}

export function useFormContext() {
	return useContext(FormContext);
}
