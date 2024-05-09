import {
	redactOptions,
	TransportMultiOptions,
	TransportPipelineOptions,
	TransportSingleOptions,
} from 'pino';

// Todo : imporve to make it full customizable except name and level (create a new interface)

// Specifies the logging level configuration, where each key represents a context name.
// If a specific context name is not found, the default logging level '*' is used,
export const logLevelData: { [key: string]: string } = {
	'*': 'info', // Default value
	undefined: 'debug',
	home: 'info',
};

// help in french
// https://www.codeheroes.fr/2022/08/29/logging-nodejs-avec-pino/
export const transport:
	| TransportSingleOptions
	| TransportMultiOptions
	| TransportPipelineOptions = {
	targets: [
		{
			target: 'pino/file',
			options: { destination: `${__dirname}/app.log`, mkdir: true },
		},
		{
			target: 'pino-pretty',
		},
	],
};

// informations hidding
export const redact: string[] | redactOptions = {
	paths: ['password'],
	censor: '** HIDDEN **',
};
