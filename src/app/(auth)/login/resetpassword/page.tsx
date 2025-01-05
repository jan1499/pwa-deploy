import { Button } from '@/components/common/Button'
import { Input, Label } from '@/components/common/Input'
import Link from 'next/link'
import React from 'react'

const Resetpassword = () => {
  return (
    <div className='login-ba'>
    <div className='login-ba-sub'>
        <section className="login-ba-sec">
            <div className='text-center mb-3'>
                <h1 className='mb-3 fs-35'>Taskflow</h1>
                <div className='fw-semibold'>Cant log in?</div>
            </div>
            <form id={``}>
                <Label label='Well send a recovery link to' htmlFor='email' className='fs-13'/>
                <Input type="text" id='email' name="email" placeholder='Enter your email' className={`mb-3`} />
                <Button type="submit" text="Send recovery link" width='full' size="md" className='rounded fw-semibold' />
            </form>
            <div>
                <div className="login-already34">
                    <Link id="" href="/login">Return to log in</Link>
                </div>
                <hr className='my-3'/>
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

export default Resetpassword