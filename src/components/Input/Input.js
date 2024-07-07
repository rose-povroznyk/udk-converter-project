import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './Input.module.sass';

const Input = ({ placeholder, name, onChange }) => (
  <>
    <Field name={name}>
      {({ field }) => (
        <input
          {...field}
          placeholder={placeholder}
          onChange={(e) => {
            field.onChange(e);
            onChange(e);
          }}
          className={styles.input}
        />
      )}
    </Field>
    <ErrorMessage name={name} component='div' />
  </>
);

export default Input;
