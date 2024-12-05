import { useCallback, useState } from 'react';

export const useBoolean = (defaultValue: boolean) => {
	const [value, setValue] = useState(defaultValue);

	const setTrue = useCallback(() => setValue(true), []);
	const setFalse = useCallback(() => setValue(false), []);
	const toggleValue = useCallback(() => setValue((prev) => !prev), []);

	return { setTrue, setFalse, value, toggleValue };
};
