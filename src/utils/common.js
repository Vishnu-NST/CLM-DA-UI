import { DevLogger } from '@/logger/DevLogger';
import { ProdLogger } from '@/logger/ProdLogger';

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

export function decodeToken(token) {
	try {
		const [header, payload, signature] = token.split('.');
		const decodedPayload = JSON.parse(atob(payload));
		return decodedPayload;
	} catch (e) {
		return null;
	}
}

export function formatDate(dateString) {
	const dateObject = new Date(dateString);

	const options = { day: 'numeric', month: 'long', year: 'numeric' };
	const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
		dateObject,
	);

	return formattedDate;
}

export function convertIntegersToStrings(obj) {
	const convertedObj = {};

	for (const key in obj) {
		if (typeof obj[key] === 'number') {
			// Convert only if the value is a number
			convertedObj[key] = obj[key].toString();
		} else {
			// Keep the original value for non-numeric properties
			convertedObj[key] = obj[key];
		}
	}

	return convertedObj;
}

export const getCreditRatingColor = (creditRating) => {
	switch (creditRating) {
		case 'A':
		case 'A+':
		case 'AA':
		case 'AA+':
		case 'AAA':
		case 'AAA+':
			return '#00B85E';

		case 'B':
		case 'B+':
		case 'BB':
		case 'BB+':
		case 'BBB':
		case 'BBB+':
			return '#F78736';
		case 'C':
		case 'C+':
		case 'CC':
		case 'CC+':
		case 'CCC':
		case 'CCC+':
			return '#C4161C';
		default:
			return '#00B85E';
	}
};

export const changeDateFormatForDd = (inputDate) => {
	const options = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};
	const dateFormatter = new Intl.DateTimeFormat('en-US', options);
	const formattedDate = dateFormatter.format(inputDate);
	return formattedDate;
};
