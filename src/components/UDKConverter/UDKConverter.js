import React from 'react';
import { Formik, Form } from 'formik';
import { validationSchema } from '../../utitlits/validationSchema';
import { data } from '../../data/data';
import Input from '../Input/Input';
import styles from './UDKConverter.module.sass';

const UDKConverter = () => {
  const initialValues = {
    udk: '',
    bbk: '',
    name: '',
  };

  const handleInputChange = (e, setFieldValue) => {
    const { name, value } = e.target;

    setFieldValue(name, value);

    if (value === '') {
      setFieldValue('udk', '');
      setFieldValue('bbk', '');
      setFieldValue('name', '');
      return;
    }

    let filteredCode;

    if (name === 'bbk') {
      filteredCode = data.find((data) => data.bbk === value);
    } else if (name === 'udk') {
      filteredCode = data.find((data) => data.udk === value);
    } else if (name === 'name') {
      filteredCode = data.find(
        (data) => data.name.toLowerCase() === value.toLowerCase()
      );
    }

    if (filteredCode) {
      setFieldValue('udk', name === 'udk' ? value : filteredCode.udk);
      setFieldValue('bbk', name === 'bbk' ? value : filteredCode.bbk);
      setFieldValue('name', name === 'name' ? value : filteredCode.name);
    } else {
      if (name !== 'udk') setFieldValue('udk', '');
      if (name !== 'bbk') setFieldValue('bbk', '');
      if (name !== 'name') setFieldValue('name', '');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Submitted values:', values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.form}>
          <Input
            placeholder='Код ББК'
            name='bbk'
            onChange={(e) => handleInputChange(e, setFieldValue, values)}
          />
          <Input
            placeholder='Код УДК'
            name='udk'
            onChange={(e) => handleInputChange(e, setFieldValue, values)}
          />
          <Input
            placeholder='Назва'
            name='name'
            onChange={(e) => handleInputChange(e, setFieldValue, values)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UDKConverter;
