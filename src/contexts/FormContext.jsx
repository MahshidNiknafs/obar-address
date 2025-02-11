import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
	const [submitAction, setSubmitAction] = useState(null);

	return (
		<FormContext.Provider value={{ submitAction, setSubmitAction }}>
			{children}
		</FormContext.Provider>
	);
}

export function useFormContext() {
	return useContext(FormContext);
}

/////////////////////////////////////////
// import { createContext, useContext } from "react";

// const FormContext = createContext();

// export const useFormContext = () => {
// 	return useContext(FormContext);
// };

// export const FormContextProvider = ({ children, handleSubmit }) => {
// 	return (
// 		<FormContext.Provider value={{ handleSubmit }}>
// 			{children}
// 		</FormContext.Provider>
// 	);
// };
