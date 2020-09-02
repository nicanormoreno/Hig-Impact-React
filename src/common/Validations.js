import _ from 'lodash';

export const required = (value) => (value === null || value === '' || value === undefined
  ? 'Campo requerido.'
  : undefined);

export const codeLength = (value) => (value !== undefined
  ? (value.length > 4
    ? 'El codigo solo puede tener hasta 4 caracteres.'
    : undefined)
      || (value.length < 2
        ? 'El codigo solo puede tener al menos 2 caracteres.'
        : undefined)
  : undefined);

export const textLength = (value) => (value !== undefined
  ? (value.length > 45
    ? 'El nombre solo puede tener hasta 45 caracteres.'
    : undefined)
      || (value.length < 3
        ? 'El nombre debe tener al menos 3 caracteres.'
        : undefined)
  : undefined);

export const typeDisplayName = (value) => {
  const regexDisplayName = /^[a-zA-Z0-9_.-]*$/;
  if (value) {
    return regexDisplayName.test(value)
      ? null
      : 'Sin espacios ni caracteres especiales';
  }
  return value;
};

export const phoneWOCountryCode = (value) => {
  const cd1 = /[0-9]+/;
  console.log(
    ' >>>>>>>>>> value',
    cd1.test(value),
    _.startsWith(value, '54'),
    _.startsWith(value, '+54'),
    _.startsWith(value, '0054'),
  );
  if (value) {
    return _.startsWith(value, '54')
      || _.startsWith(value, '+54')
      || _.startsWith(value, '0054')
      || _.startsWith(value, '00')
      || _.startsWith(value, '0')
      || _.startsWith(value, '+')
      || _.startsWith(value, '5')
      ? 'Sin código de País, ej: 1131231233'
      : null;
  }
  return value;
};

export const username = (value) => (value !== undefined
  ? (value.length > 45
    ? 'El Usuario solo puede tener hasta 45 caracteres.'
    : undefined)
      || (value.length < 3
        ? 'El Usuario debe tener al menos 3 caracteres.'
        : undefined)
  : undefined);

export const password = (value) => (value
  ? (value.length > 50
    ? 'La contraseña solo puede tener hasta 50 caracteres.'
    : undefined) || (value.length < 6 ? 'Mínimo 6 caracteres.' : undefined)
  : undefined);
export const typeInteger = (value) => {
  const regexInteger = /^[1-9]\d*?$/;
  if (value) {
    return regexInteger.test(value)
      ? null
      : 'Este campo solo admite números enteros.';
  }
  return value;
};
export const typeIntegerOrDecimal = (value) => {
  const regexIntegerOrDecial = /^[1-9]\d*(\.\d+)?$/;
  if (value) {
    return regexIntegerOrDecial.test(value)
      ? null
      : 'Este campo solo admite números enteros o decimales.';
  }
  return value;
};
export const phone = (value) => {
  const regexIntegerOrDecial = /^\d*$/;
  if (value) {
    return regexIntegerOrDecial.test(value) ? null : 'Teléfono inválido.';
  }
  return value;
};

export const phoneLength = (value) => (value !== undefined
  ? (value.length > 20 ? 'Maximo 20 caracteres.' : undefined)
      || (value.length < 11 ? 'Al menos 11 caracteres.' : undefined)
  : undefined);

export const onlyWords = (value) => {
  const regexWordsAndSpacesBetween = /^[a-zA-ZÀ-ÿ]+( [a-zA-ZÀ-ÿ]+)*$/; // ^[a-zA-Z ]+$/;
  if (value) {
    return regexWordsAndSpacesBetween.test(value)
      ? null
      : 'Este campo solo admite letras.';
  }
  return value;
};
export const validateEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value) {
    return emailRegex.test(value) ? null : 'Correo electrónico inválido.';
  }
  return null;
};
export const confirmPassword = (value, allValues) => {
  const password = allValues && allValues.password;
  if (value) {
    if (password) {
      return password === value ? null : 'Las contraseñas no coinciden.';
    }
    return null;
  }
  return 'Debe escribir una contraseña.';
};

export const confirmEmail = (value, allValues) => {
  const email = allValues.user && allValues.user.email;
  if (value) {
    if (email) {
      return email === value ? null : 'Los emails no coinciden.';
    }
    return null;
  }
  return 'Debe escribir un email.';
};

export const typeIntegerOrDecimalFull = (value) => {
  const regexIntegerOrDecimalFull = /^-?\d+(?:.\d+)?$/;
  if (value) {
    return regexIntegerOrDecimalFull.test(value)
      ? null
      : 'Este campo solo admite números enteros o decimales, positivos y negativos.';
  }
  return value;
};
export const typePercentaje = (value) => {
  const regexPercentaje = /^([0-9]{1,2}([\.][0-9]{1,})?$|100([\.][0]{1,})?)$/;
  if (value) {
    return regexPercentaje.test(value)
      ? null
      : 'Formato no válido para porcentaje.';
  }
  return value;
};

export const requiredNoUnderscore = (value) => (value === null
    || value === ''
    || value === undefined
    || value.indexOf('_') !== -1
  ? 'Campo requerido'
  : null);

export const noUnderscore = (value) => {
  if (value) return value.indexOf('_') !== -1 ? 'Campo incompleto' : null;
  return null;
};

export const typeCBU = (value) => {
  const regexInteger = /^\d{22}$/;
  if (value) {
    return regexInteger.test(value) ? null : 'CBU inválido.';
  }
  return value;
};
