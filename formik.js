import {Formik, Form} from "formik";
import * as yup from 'yup';
import {Alert, InputLabel, Button, TextField} from "@mui/material";

export const TestForm = () => {
    const validationSchema = yup.object({
        name: yup.string().required('partadir e').min(2,'amenaqichy 2').max(8, 'ammenashaty 8'),
        secondName: yup.string().required('azganuny partadir e'),
        password: yup.string().required('paroly havaqi'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), 'paroly nuyny chi'])
    });

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    secondName: '',
                    confirmEmail: '',
                    confirmPassword: '',
                }}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {
                    ({   dirty,
                         values,
                         errors,
                         touched,
                         isValid,
                         handleBlur,
                         handleChange,
                         handleSubmit
                            }) => {
                        console.log('errors', errors)
                        console.log('touched', touched)
                        console.log('isValid', isValid)
                        console.log('dirty', dirty)
                        return (
                            <Form>
                                <InputLabel htmlFor="name" sx={{marginBottom: 1}}>Name</InputLabel>
                                {touched.name && errors.name && <Alert severity="error" children={errors.name} />}
                                <TextField
                                    id="name"
                                    type="text"
                                    onBlur={handleBlur}
                                    value={values.name}
                                    sx={{marginBottom: 1}}
                                    onChange={handleChange}
                                    helperText={touched.name && errors.name}
                                />
                                <br/>
                                <InputLabel htmlFor="secondName" sx={{marginBottom: 1}}>Second Name</InputLabel>
                                {touched.secondName && errors.secondName && <Alert severity="error" children={errors.secondName} />}
                                <TextField
                                    type="text"
                                    id="secondName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.secondName}
                                    sx={{marginBottom: 1}}
                                />
                                <br/>
                                <InputLabel htmlFor="password" sx={{marginBottom: 1}}>Second Name</InputLabel>
                                {touched.password && errors.password && <Alert severity="error" children={errors.password} />}
                                <TextField
                                    type="text"
                                    id="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    sx={{marginBottom: 1}}
                                />
                                <br/>
                                <Button
                                    type="submit"
                                    children="Send"
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={!isValid && !dirty}
                                />
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};