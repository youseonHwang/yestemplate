{/* 로그인 폼 구현 */}
import * as React from "react"; 
import * as ReactDOM from "react-dom";
import { Grid, Form, Button } from "antd";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Response } from 'express';
import { response } from "express";

{/* 로그인 폼 타입 설정 */}
interface LoginForm {
    email: string
    password: string
}

{/* 로그인 과정 타입 설정 */}
interface LoginStatus {
    message: string
    type: string
}

{/* 로그인 과정 받아서 처리하는 부분 타입 설정 */}
interface LoginStatusProps {
    [key: string]: LoginStatus
}

{/* 로그인 성공, 실패 메시지 및 타입 설정 */}
const loginStatusProps: LoginStatusProps = {
    success: {
        message: 'login success',
        type: 'success'
    },
    error: {
        message: 'login failed',
        type: 'error'
    },
}

{/* 로그인 상태 - usestate */}
const login: React.FC = () => {
    const [displayFormStatus, setDisplayFormStatus] = React.useState(false)
    const [formStatus, setFormStatus] = React.useState<LoginStatus>({
        message: '',
        type: ''
    })

    const loginUser = async (data: LoginForm, resetForm: Function) => {
        try{
            if(data) {
                setFormStatus(loginStatusProps.success)
                resetForm({})
            }
        }catch (error) {
            const response = error.response
            if(
                response.status === 400
            ) {
                setFormStatus(loginStatusProps.error)
            }
        }finally {
            setDisplayFormStatus(true)
        }
    }
    return (
        <div>
            <Formik
                initialValues = {{
                    email: '',
                    password: ''
                }}
                onSubmit = {( values: LoginForm, actions ) => {
                    loginUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                {/* yup 유효성 검사 */}
                validationSchema
            
            ></Formik>
        </div>
    )
}

export default Login