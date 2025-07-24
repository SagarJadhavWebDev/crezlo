// components/form/Form.tsx
'use client';

import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';

interface FormProps<T extends FieldValues> {
  children: (methods: UseFormReturn<T>) => ReactNode;
  onSubmit: SubmitHandler<T>;
  options?: UseFormProps<T>;
  onWatchChange?: (values: Partial<T>, changedField: keyof T) => void;
}

function InnerForm<T extends FieldValues>(
  { children, onSubmit, options, onWatchChange }: FormProps<T>,
  ref: React.Ref<UseFormReturn<T> | null>
) {
  const methods = useForm<T>({
    mode: 'onChange',
    ...options,
  });

  useImperativeHandle(ref, () => methods, [methods]);

  useEffect(() => {
    if (!onWatchChange) return;

    const subscription = methods.watch((values, { name }) => {
      if (name) {
        onWatchChange(values, name as keyof T);
      }
    });

    return () => subscription.unsubscribe();
  }, [methods, onWatchChange]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {children(methods)}
      </form>
    </FormProvider>
  );
}

export const Form = forwardRef(InnerForm) as <T extends FieldValues>(
  props: FormProps<T> & { ref?: React.Ref<UseFormReturn<T>> }
) => ReturnType<typeof InnerForm>;

// Example for Normal Usage: ###########################################################

// import { FormFieldInput } from "@/components/form/fields/FormFieldInput";
// import { Form } from "@/components/form/Form";
// import { Button } from "@/components/moasic/components/Button";
// import { Input } from "@/components/moasic/components/Input";
// import { Radio } from "@/components/moasic/components/Radio";
// import { H4, H5, H6, Label, Link, P } from "@/components/moasic/components/Typography";
// import { IWebsite } from "@/types";
// import React, { useRef, useState } from "react";
// import { UseFormReturn } from "react-hook-form";

// enum FormType {
//   DOMAIN = "domain",
//   SUBDOMAIN = "subdomain",
// }
// interface CustomDomainSettingsProps {
//   website: IWebsite;
// }

// interface FormValues {
//   domain: string;
//   check: any;
// }
// const CustomDomainSettings: React.FC<CustomDomainSettingsProps> = ({ website }) => {
//   const [formType, setFormType] = useState<FormType>();
//   const [domain, setDomain] = useState<string>();
//   const [subDomain, setSubDomain] = useState<string>();
//   const defaultValues: FormValues = {
//     domain: "domain",
//     check: {
//       let: "abc",
//     },
//   };
//   const formRef = useRef<UseFormReturn<FormValues>>(null);

//   const renderForm = (type?: FormType) => {
//     switch (type) {
//       case FormType.DOMAIN:
//         return (
//           <div className="space-y-4">
//             <hr className="my-2" />
//             <H4>Let's connect your domain</H4>
//             {/* <Input label="Domain Name" supportingText="Ex: domain.com" value={domain} onChange={(e) => setDomain(e.target.value)} />
//             <div className="flex justify-end">
//               <Button>Next</Button>
//             </div> */}
//             <Form onSubmit={(data) => console.log("Data:", data)} options={{ defaultValues }}>
//               {(methods) => (
//                 <>
//                   <FormFieldInput
//                     label="Domain Name"
//                     supportingText="Ex: domain.com"
//                     name="domain"
//                     validation={{ required: "REQUIED", maxLength: { value: 5, message: "SHOUDL NOT" } }}
//                   />
//                   <FormFieldInput
//                     label="Domain Name"
//                     supportingText="Ex: domain.com"
//                     name="check.let"
//                     validation={{ required: "REQUIED", maxLength: { value: 5, message: "SHOUDL NOT" } }}
//                   />
//                   <Button type="submit">Next</Button>
//                 </>
//               )}
//             </Form>
//           </div>
//         );

// const defaultValues: FormValues = {
//   domain: "domain",
// };






// EXAMPLE FOR NESTED ARRAY FIELD VALUES ########################################################################
// import { useFieldArray } from "react-hook-form";

// <Form<FormValues>
//   onSubmit={(data) => console.log(data)}
//   formRef={formRef}
//   options={{ defaultValues: { contacts: [{ name: '', email: '' }] } }}
// >
//   {(methods) => {
//     const { fields, append, remove } = useFieldArray({
//       control: methods.control,
//       name: 'contacts',
//     });

//     return (
//       <>
//         {fields.map((field, index) => (
//           <div key={field.id} className="space-y-2 border p-2 rounded">
//             <InputField<FormValues> name={`contacts[${index}].name`} label="Name" />
//             <InputField<FormValues> name={`contacts[${index}].email`} label="Email" />
//             <button type="button" onClick={() => remove(index)} className="text-red-500">Remove</button>
//           </div>
//         ))}
//         <button type="button" onClick={() => append({ name: '', email: '' })}>
//           Add Contact
//         </button>
//         <button type="submit">Submit</button>
//       </>
//     );
//   }}
// </Form>
