'use client'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
// import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
// import apple from '../../../../public/images/apple.svg'
// import google from '../../../../public/images/google.svg'
// import microsoft from '../../../../public/images/microsoft.svg'
// import linkedin from '../../../../public/images/linkedin.svg'
import Error from '@/components/common/Error'
import { useAppDispatch } from '@/redux/store/hooks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // try {
        //     const response: any = await dispatch(login({ data: formData }))
        //     if (response?.payload?.code === 200) {
        router.push(`/taskflow/your-work`)
        //     } else {
        //         const errorData = response?.payload?.error
        //         setErrors({
        //             email: errorData?.email || '',
        //             password: errorData?.password || '',
        //         })
        //     }
        // } catch (error) {

        // } finally {

        // }
    }

    return (
        <div className='login-ba'>
            <div className='login-ba-sub'>
                <section className="login-ba-sec">
                    <div className='text-center mb-3'>
                        <h1 className='mb-3 fs-35'>Taskflow</h1>
                        <div className='fw-semibold'>Log in to continue</div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <Input
                                type="text"
                                label='Email'
                                id='email'
                                name="email"
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <Error message={errors.email} />}
                        </div>
                        <div className='mb-3'>
                            <Input
                                type="password"
                                label='Password'
                                id='password'
                                name="password"
                                placeholder='Enter your password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <Error message={errors.password} />}
                        </div>
                        <Button type="submit" text="Continue" width='full' size="md" className='rounded fw-semibold pointer' />
                    </form>
                    <div className="my-3">
                        {/* <div className='mb-3 text-center'>Or continue with:</div>
                        <div className="login-auth34-bt-cont d-flex align-items-center justify-content-center gap-4">
                            <div className="login-auth34-bt">
                                <div id="google-auth-button" className="pointer">
                                    <span className="login-auth-img-con">
                                        <Image src={google} alt="" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            <div className="login-auth34-bt">
                                <div id="microsoft-auth-button" className="pointer">
                                    <span className="login-auth-img-con">
                                        <Image src={microsoft} alt="" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            <div className="login-auth34-bt">
                                <div id="apple-auth-button" className="pointer">
                                    <span className="login-auth-img-con">
                                        <Image src={apple} alt="" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            <div className="login-auth34-bt">
                                <div id="linkedin-auth-button" className="pointer">
                                    <span className="login-auth-img-con">
                                        <Image src={linkedin} alt="" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        </div> */}
                        <div className="login-already34 d-flex gap-2 align-items-center justify-content-center">
                            <Link id="already-have-an-account" href="/login/resetpassword">Cant log in?</Link>
                            <span className='middle-dot'>.</span>
                            <Link id="already-have-an-account" href="/signup">Create an account</Link>
                        </div>
                        <hr className='my-3' />
                        <div>
                            <div className='text-center mb-1'>
                                <div className='m-0 p-0'>Taskflow</div>
                                <div className="text-center">
                                    <p className='fs-10 m-0 p-0'>Your privacy and data security are important to us.</p>
                                </div>
                            </div>
                            <div className="login-privacy-cont">This page is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener" className="login-privacy-po-23">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer noopener" className="login-privacy-po-23">Terms of Service</a> apply.</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login
