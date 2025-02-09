import { createContext, useContext } from "react";

const FormContext = createContext();

export const useFormContext = () => {
	return useContext(FormContext);
};

export const FormContextProvider = ({ children, handleSubmit }) => {
	return (
		<FormContext.Provider value={{ handleSubmit }}>
			{children}
		</FormContext.Provider>
	);
};
