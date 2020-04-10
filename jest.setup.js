jest.setTimeout(19000);
delete global.window.location;
global.window = Object.create(window);
global.window.location = {
	port: '123',
	protocol: 'http:',
	hostname: 'localhost',
	origin: 'localhost',
	
};

