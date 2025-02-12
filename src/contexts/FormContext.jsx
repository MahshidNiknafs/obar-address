import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
	const [formData, setFormData] = useState({}); // Add formData state
	const [submitAction, setSubmitAction] = useState(null);

	return (
		<FormContext.Provider
			value={{ formData, setFormData, submitAction, setSubmitAction }}
		>
			{children}
		</FormContext.Provider>
	);
}

export function useFormContext() {
	return useContext(FormContext);
}

///////////////////////////////
// import { createContext, useContext, useState } from "react";

// const FormContext = createContext();

// export function FormProvider({ children }) {
// 	const [forms, setForms] = useState({});
// 	const [currentFormId, setCurrentFormId] = useState(null);

// 	const registerForm = (formId, submitAction) => {
// 		setForms((prevForms) => ({ ...prevForms, [formId]: submitAction }));
// 	};

// 	const unregisterForm = (formId) => {
// 		setForms((prevForms) => {
// 			const updatedForms = { ...prevForms };
// 			delete updatedForms[formId];
// 			return updatedForms;
// 		});
// 	};

// 	const submitForm = (formId) => {
// 		if (forms[formId]) {
// 			forms[formId]();
// 		} else {
// 			console.warn(`Form with ID "${formId}" not found.`);
// 		}
// 	};

// 	// تابعی برای تنظیم فرم جاری
// 	const setCurrentForm = (formId) => {
// 		if (forms[formId]) {
// 			setCurrentFormId(formId);
// 		} else {
// 			console.warn(`Form with ID "${formId}" not found.`);
// 		}
// 	};

// 	return (
// 		<FormContext.Provider
// 			value={{
// 				registerForm,
// 				unregisterForm,
// 				submitForm,
// 				currentFormId,
// 				setCurrentForm,
// 			}}
// 		>
// 			{children}
// 		</FormContext.Provider>
// 	);
// }

// export function useFormContext() {
// 	return useContext(FormContext);
// }
///////////////////////////////////////////////
// // the original

// import { createContext, useContext, useState } from "react";

// const FormContext = createContext();

// export function FormProvider({ children }) {
// 	const [submitAction, setSubmitAction] = useState(null);

// 	return (
// 		<FormContext.Provider value={{ submitAction, setSubmitAction }}>
// 			{children}
// 		</FormContext.Provider>
// 	);
// }

// export function useFormContext() {
// 	return useContext(FormContext);
// }
