export const DEFAULT_SCHEMA = {
  label: '',
  digit: false,
  symbol: false,
  lowercase: false,
  uppercase: false
};

export const TYPES = {
  STRING: 'String',
  NUMBER: 'Number',
  OBJECT: 'Object',
  BOOLEAN: 'Boolean'
};

export const ERROR_MESSAGES = {
  EMPTY_LABEL: 'Label cannot be empty',
  INVALID_FORM: 'Invalid form',
  INVALID_TYPE: 'Value must be of type TYPE',
  INVALID_INPUT: 'Invalid validation input',
  INVALID_SCHEMA: 'Invalid schema',
  INVALID_NUMBER: 'Length cannot be negative',
  FORM_SCHEMA_MISMATCH: 'Schema and form do not match',
  INVALID_MIN_OVER_MAX: 'Minimum length cannot be greater than the maximum',
  INVALID_MIN_MAX: 'Minimum or maximum length cannot be less than the number of required characters'
};

export const VALIDATION_ERROR_MESSAGES = {
  EMAIL: 'must be a valid email address',
  DIGIT: 'must include at least one digit',
  SYMBOL: 'must include at least one special character',
  LOWERCASE: 'must include at least one lowercase character',
  UPPERCASE: 'must include at least one uppercase character',
  MIN_LENGTH: 'must be at least VALUE character(s) long',
  MAX_LENGTH: 'cannot be longer than VALUE character(s)',
  EMPTY_VALUE: 'Must provide a value'
};

export const NO_ERRORS = 0;
export const FORM_TYPE = TYPES.OBJECT;
export const INPUT_TYPE = TYPES.STRING;
export const LABEL_TYPE = TYPES.STRING;
export const EMPTY_INPUT = '';
export const SCHEMA_TYPE = TYPES.OBJECT;
export const MIN_MAX_TYPE = TYPES.NUMBER;