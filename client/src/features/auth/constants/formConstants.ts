export const REGISTER_FIELDS = [
  {
    id: 'emailId',
    title: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
    rules: {
      required: 'You should enter your email...',
      pattern: {
        message: 'Email should be real',
        value: /^\S+@\S+$/i,
      },
    },
  },
  {
    id: 'firstNameId',
    title: 'First name',
    type: 'text',
    placeholder: 'Enter your first name...',
    name: 'first_name',
    rules: {
      required: 'You should enter your name',
      minLength: {
        message: "Name can't contain less then 1 letter",
        value: 1,
      },
    },
  },
  {
    id: 'lastNameId',
    title: 'Last name',
    type: 'text',
    placeholder: 'Enter your last name...',
    name: 'last_name',
    rules: {
      required: 'You should enter your last name',
      minLength: {
        message: "Last name can't contain less then 1 letter",
        value: 1,
      },
    },
  },
  {
    id: 'passwordId',
    title: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    name: 'password',
    rules: {
      required: 'You should enter your password',
      minLength: {
        message: 'Password should contain at lest 4 symbols',
        value: 4,
      },
    },
  },
  {
    id: 'passwordRepeatId',
    title: 'Reapeat password',
    type: 'password',
    placeholder: 'Enter your password...',
    name: 'passwordRepeat',
    rules: {
      required: 'You should enter your password',
      minLength: {
        message: 'Password should contain at lest 4 symbols',
        value: 4,
      },
    },
  },
];

export const LOGIN_FIELDS = [
  {
    id: 'emailId',
    title: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
    rules: {
      required: 'You should enter your email...',
      pattern: {
        message: 'Email should be real',
        value: /^\S+@\S+$/i,
      },
    },
  },
  {
    id: 'passwordId',
    title: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    name: 'password',
    rules: {
      required: 'You should enter your password',
      minLength: {
        message: 'Password should contain at lest 4 symbols',
        value: 4,
      },
    },
  },
];
