// Callback hell example

class UserStorage {
    loginUser(id, pwd, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'tom' && pwd === '1234') || (id === 'Mark' && pwd === '2314')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'tom') {
                onSuccess({
                    name: 'tom',
                    role: 'admin'
                })
            } else {
                onError(new Error('no access'))
            }
        })
    }

    }


    const userStorage = new UserStorage();
    const id = prompt('enter your id')
    const pwd = prompt('enter your pwd')
    UserStorage.loginUser(
        id,
        pwd,
        user => {
            userStorage.getRoles(
                user,
                userWithRole => {
                    alert(
                        `Hello ${userWithRole.name}, you have ${userWithRole.role} `
                    );
                },
                error => {
                    console.error(error)
                });
        }, error => {
            console.error(error)
        }
    )
