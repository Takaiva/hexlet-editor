const ruLocales = {
  translation: {
    signUp: {
      pageHeader: 'Регистрация',
      emailLabel: 'Электронная почта',
      usernameLabel: 'Имя',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердить пароль',
      registerButton: 'Зарегистрироваться',
      footer: {
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        requiredField: 'Обязательное поле',
        correctUsername: 'Введите корректное имя',
        correctEmail: 'Некорректный email',
        usernameLength: 'От 3 до 20 символов',
        passwordLength: 'от 8 до 30 символов',
        confirmPassword: 'Пароли должны совпадать',
      }
    },
    remindPass: {
      pageHeader: 'Забыли пароль?',
      emailLabel: 'Электронная почта',
      resetButton: 'Восстановить пароль',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Создать бесплатный аккаунт',
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        correctEmail: 'Некорректный email',
      }
    },
    signIn: {
      pageHeader: 'Вход',
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      loginButton: 'Войти',
      remindPass: 'Не помню пароль',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Создать бесплатный аккаунт',
      }
    },
    errors: {
      unknown: 'Неизвестная ошибка',
      network: 'Ошибка сети',
    }
  },
};

export default ruLocales;
