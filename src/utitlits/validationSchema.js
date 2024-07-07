import * as Yup from 'yup';

export const validationSchema = Yup.object({
  udk: Yup.string(),
  bbk: Yup.string(),
  name: Yup.string(),
});
