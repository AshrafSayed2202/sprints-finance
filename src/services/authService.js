export const login = (username, password) => {
    // Simulate an API call for user login
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                resolve({ username });
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
};

export const logout = () => {
    // Simulate an API call for user logout
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
};
