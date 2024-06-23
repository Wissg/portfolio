import { getLogLevel } from '@/utils/logUtils';
import {
	levels,
	redactOptions,
	TransportMultiOptions,
	TransportPipelineOptions,
	TransportSingleOptions,
} from 'pino';

// Todo : imporve to make it full customizable except name and level (create a new interface)

// Specifies the logging level configuration, where each key represents a context name.
// If a specific context name is not found, the default logging level '*' is used,
export const logLevelData: { [key: string]: string } = {
	'*': 'debug', // Default value
	undefined: 'debug',
	home: 'debug',
	request: 'debug',
	getRequestConfig: 'debug',
	addLocale: 'debug',
};

export const logLevels = new Map(Object.entries(logLevelData));

// help in french
// https://www.codeheroes.fr/2022/08/29/logging-nodejs-avec-pino/
export function transport(
	logger: string
): TransportSingleOptions | TransportMultiOptions | TransportPipelineOptions {
	const transport: TransportMultiOptions = {
		targets: [
			{
				level: getLogLevel(logger),
				target: 'pino/file',
				options: { destination: `${__dirname}/app.log`, mkdir: true },
			},
		],
	};

	return transport;
}

// informations hidding
export const redact: string[] | redactOptions = {
	paths: ['password'],
	censor: '** HIDDEN **',
};
