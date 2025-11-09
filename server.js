const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set content type to HTML for all responses
    res.setHeader('Content-Type', 'text/html');
    
    // Get the URL from the request
    const url = req.url;
    
    console.log(`Request received: ${req.method} ${url}`);
    
    // Handle different routes
    if (url === '/') {
        // Root path - Hello World
        res.statusCode = 200;
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .container { background: #f5f5f5; padding: 20px; border-radius: 8px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hello, World!</h1>
                    <p>Welcome to my Node.js HTTP Server</p>
                    <p>Try these routes:</p>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact (404)</a></li>
                    </ul>
                    <p>Current time: ${new Date().toLocaleString()}</p>
                </div>
            </body>
            </html>
        `);
    } else if (url === '/about') {
        // About page
        res.statusCode = 200;
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .container { background: #e8f4f8; padding: 20px; border-radius: 8px; }
                    h1 { color: #2c3e50; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>About Page</h1>
                    <p>This is a simple HTTP server built with Node.js</p>
                    <p>It demonstrates basic routing and request handling.</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        <li>Handles GET requests</li>
                        <li>Basic routing system</li>
                        <li>HTML responses</li>
                        <li>404 error handling</li>
                    </ul>
                    <p><a href="/">← Back to Home</a></p>
                </div>
            </body>
            </html>
        `);
    } else {
        // 404 Not Found for all other routes
        res.statusCode = 404;
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 Not Found</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                    .container { background: #ffe6e6; padding: 20px; border-radius: 8px; text-align: center; }
                    h1 { color: #c0392b; }
                    .error-code { font-size: 4em; font-weight: bold; color: #e74c3c; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="error-code">404</div>
                    <h1>Page Not Found</h1>
                    <p>The requested URL <strong>${url}</strong> was not found on this server.</p>
                    <p><a href="/">← Back to Home</a></p>
                </div>
            </body>
            </html>
        `);
    }
    
    // End the response
    res.end();
});

// Configure server port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Available routes:`);
    console.log(`   http://localhost:${PORT}/ - Home page`);
    console.log(`   http://localhost:${PORT}/about - About page`);
    console.log(`   Any other route - 404 Not Found`);
    console.log(`Press Ctrl+C to stop the server`);
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});