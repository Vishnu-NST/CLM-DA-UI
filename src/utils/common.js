import { DevLogger } from '@/services/logger/DevLogger';
import { ProdLogger } from '@/services/logger/ProdLogger';

export function getLogger() {
	let logger;
	switch (import.meta.env.MODE) {
		case 'development':
			logger = DevLogger.getInstance();
			break;
		case 'production':
			logger = ProdLogger.getInstance();
			break;
		default:
			logger = DevLogger.getInstance();
	}

	return logger;
}

export function getStorage() {
	let storage;
	switch (import.meta.env.VITE_STORAGE) {
		case 'localStorage':
			storage = window.localStorage;
			break;
		case 'sessionStorage':
			storage = window.sessionStorage;
			break;
		default:
			storage = window.localStorage;
	}

	return storage;
}

export function checkPasswordStrength(password) {
	// must have min 8 chars
	// must have smallcase and uppercase
	// must have one or more special symbols
	// must have one or more digits

	// the following is the regex to match the password using the aforementioned criteria.
	// "$aaA1aaaa".match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=.*\d).{8,}/)

	let specialCharsRegex = /[!@#$%^&*()]/;
	let bothCaseRegex = /(?=.*[a-z])(?=.*[A-Z])/;

	let strength = 0;

	if (password.length > 8) {
		strength += 25;
	}

	if (password.match(specialCharsRegex)) {
		strength += 25;
	}

	if (password.match(/\d+/)) {
		strength += 25;
	}

	if (password.match(bothCaseRegex)) {
		strength += 25;
	}

	return strength;
}

/**
 *
 * A function to determine whether all
 * fields are touched or not
 *
 * @param formik object
 * @returns boolean
 */

export function isAllFormFieldsTouched(form) {
	return (
		Object.keys(form.touched).length > 0 &&
		Object.keys(form.touched).every((field) => form.touched[field])
	);
}

export const capitalizeString = (str) => {
	return str?.charAt(0)?.toUpperCase() + str?.slice(1) || '';
};
