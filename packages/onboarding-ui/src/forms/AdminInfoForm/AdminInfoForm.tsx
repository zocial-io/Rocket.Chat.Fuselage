import {
  EmailInput,
  FieldGroup,
  Field,
  ButtonGroup,
  Button,
  PasswordInput,
  TextInput,
  Box,
  CheckBox,
} from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

export type AdminInfoPayload = {
  fullname: string;
  username: string;
  companyEmail: string;
  password: string;
  keepPosted: boolean;
};

type AdminInfoFormProps = {
  currentStep: number;
  stepCount: number;
  passwordRulesHint: string;
  keepPosted?: boolean;
  initialValues?: Omit<AdminInfoPayload, 'password'>;
  validateUsername: Validate<string>;
  validateEmail: Validate<string>;
  validatePassword: Validate<string>;
  onSubmit: SubmitHandler<AdminInfoPayload>;
};

const AdminInfoForm = ({
  currentStep,
  stepCount,
  passwordRulesHint,
  initialValues,
  validateUsername,
  validateEmail,
  validatePassword,
  keepPosted = false,
  onSubmit,
}: AdminInfoFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitting, errors },
  } = useForm<AdminInfoPayload>({
    defaultValues: {
      ...initialValues,
      password: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps currentStep={currentStep} stepCount={stepCount} />
      <Form.Title>{t('form.adminInfoForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.adminInfoForm.subtitle')}</Form.Subtitle>
      <Form.Container>
        <FieldGroup>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.fullName.placeholder')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('fullname', {
                  required: String(t('component.form.requiredField')),
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.fullName.placeholder'
                )}
              />
            </Field.Row>
            {errors.fullname && (
              <Field.Error>{errors.fullname.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.username.label')}
            </Field.Label>
            <Field.Row>
              <TextInput
                {...register('username', {
                  required: String(t('component.form.requiredField')),
                  validate: validateUsername,
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.username.placeholder'
                )}
              />
            </Field.Row>
            {errors.username && (
              <Field.Error>{errors.username.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.companyEmail.label')}
            </Field.Label>
            <Field.Row>
              <EmailInput
                {...register('companyEmail', {
                  required: String(t('component.form.requiredField')),
                  validate: validateEmail,
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.companyEmail.placeholder'
                )}
              />
            </Field.Row>
            {errors.companyEmail && (
              <Field.Error>{errors.companyEmail.message}</Field.Error>
            )}
          </Field>
          <Field>
            <Field.Label>
              {t('form.adminInfoForm.fields.password.label')}
            </Field.Label>
            <Field.Row>
              <PasswordInput
                {...register('password', {
                  required: String(t('component.form.requiredField')),
                  validate: validatePassword,
                })}
                placeholder={t(
                  'form.adminInfoForm.fields.password.placeholder'
                )}
              />
            </Field.Row>
            <Field.Hint>{passwordRulesHint}</Field.Hint>
            {errors.password && (
              <Field.Error>{errors.password.message}</Field.Error>
            )}
          </Field>
          {keepPosted && (
            <Box mbe='x8' display='block' color='info' fontScale='c1'>
              <CheckBox id='keepPosted' mie='x8' {...register('keepPosted')} />
              <label htmlFor='keepPosted'>
                {t('form.adminInfoForm.fields.keepPosted.label')}
              </label>
            </Box>
          )}
        </FieldGroup>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup flexGrow={1}>
          <Button type='submit' primary disabled={isValidating || isSubmitting}>
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default AdminInfoForm;
