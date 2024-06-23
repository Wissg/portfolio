import { logLevelData, logLevels, redact, transport } from '@/config/log-level';
import pino, { Logger } from 'pino';


// Returns the current logging level for a logger.
export function getLogLevel(logger: string): string {
	const deploymentEnv = process.env.NODE_ENV || 'development';
	return (
		logLevels.get(logger) ||
		logLevels.get('*') ||
		(deploymentEnv === 'production' ? 'info' : 'debug')
	);
}

// Creates a new logger for the specified name.
export function getLogger(name: string): Logger {
	return pino({
		name,
		level: getLogLevel(name),
		transport: transport(name),
		redact,
	});
}

let logger: Logger;
// Returns a default logger.
export function getLoggerDefault(): Logger {
	if (!logger) {
		logger = pino({
			level: getLogLevel(''),
			transport: transport(''),
			redact,
		});
	}
	return logger;
}

export const getCorrelationId = (headers: Headers) => {
	let correlationId = headers.get('x-correlation-id');
	if (!correlationId) {
		correlationId = crypto.randomUUID(); // 👈 for dev development only
	}
	return correlationId;
};
