import { MonteCarlo } from 'next/font/google';

interface Project {
	title: string;
	date?: string;
	description: string;
	status?:
		| 'current'
		| 'done'
		| 'default'
		| 'error'
		| 'custom'
		| null
		| undefined;
	tags: ReadonlyArray<string>;
	imageUrl?: string;
}

type ProjectsData = ReadonlyArray<Project>;

export const projectsData: ProjectsData = [
	{
		title: 'Extreme Value Theory',
		description:
			'Study of the distribution of generalized extreme values (GEV) and generalized Pareto distribution (GPD) in the context of extreme value theory.',
		tags: ['R', 'Python'],
	},
	{
		title: 'Asian Options Pricing',
		description:
			'Development of an Asian options pricing model using Monte Carlo simulations. Study of Asian options Greeks and their impact on pricing. Conducting sensitivity analysis and comparison with existing pricing models.',
		tags: ['Python', 'Pandas', 'PyTorch', 'Keras'],
	},
	{
		title: 'Naval Battle Game',
		description:
			'Implementation of the naval battle game with a graphical interface.',
		tags: ['C'],
	},
	{
		title: 'E-commerce Website',
		description: 'E-commerce website dedicated to buying and selling clothes.',
		tags: ['Php', 'JavaScript', 'CSS'],
	},
	{
		title: 'Elevator Game',
		description: 'Coding of an elevator game with a graphical interface.',
		tags: ['Pascal'],
	},
	{
		title: 'Point of Sale Software',
		description:
			'Development of a point of sale software with a user-friendly interface.',
		tags: ['Java', 'JavaFX'],
	},
	{
		title: 'Task Automation',
		description:
			'Automation of complex tasks to interactively post videos retrieved from a folder via a cron task.',
		tags: ['Python', 'Selenium', 'pyautogui'],
	},
	{
		title: 'Stock Portfolio Simulation with Visualization',
		description:
			'Simulation of buying and selling stocks like TSL and tracking the portfolio over time with data visualization.',
		tags: ['Python', 'yfinance'],
	},
	{
		title: 'Machine Learning',
		description:
			'Algorithm for predicting solar energy production using regression models and neural networks. Comparison with popular models (SVM, XGBM, Lasso, Ridge, RNN, Random Forest, etc.).',
		tags: ['Python', 'yfinance', 'Pandas', 'PyTorch', 'Keras'],
	},
	{
		title: 'Monte Carlo Simulation',
		description:
			'Calculation of martingale expectation, quadratic variation of Brownian motion, stochastic integral calculation via Monte Carlo, and binomial tree modeling.',
		tags: ['MathLab'],
	},
	{
		title: 'Financial Modelling',
		description:
			'Calculating option prices using the Black-Scholes model, estimating volatility smile using Dupire volatility surface method, implementing strategies to hedge gamma changes of options, managing risk exposure in financial markets, optimizing hedging strategies considering transaction costs, backtesting historical hedging strategies, developing hedging strategies incorporating stochastic processes, modeling asset price evolution with the Heston model, computing profit and loss for trading strategy analysis, computing implied volatility for call and put options, determining yields on financial instruments, analyzing volatility of CAC 40 index, evaluating volatility using a list of strike prices for options, assessing volatility of Google stock prices.',
		tags: ['Python'],
	},
	{
		title: 'Real-time Voice Translator',
		description:
			'Translate sound input in real-time (microphone or computer speaker).',
		tags: ['Python'],
	},
	{
		title: 'Image/Video Visualizer',
		description:
			'Integration of an image and video visualizer via API with features like pagination, favorites, and tags.',
		tags: ['Python', 'Flask'],
	},
];
