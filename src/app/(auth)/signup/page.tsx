'use client';
import { Button } from '@/components/common/Button';
import Error from '@/components/common/Error';
import { Input, Label } from '@/components/common/Input';
import { IRole } from '@/interface/IRoles';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    role: 2,
    first_name: '',
    last_name: '',
    profile_picture: '',
    phone_number: ''
  });
  const [roles, setRoles] = useState<IRole[]>([]);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    username?: string;
    role?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    profile_picture?: string;
  }>({});


  const router = useRouter();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}accounts/roles/`);
        if (response && response.data) {
          const filteredRoles = response.data.filter((role: IRole) => role.name !== 'Admin');
          setRoles(filteredRoles);
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, role: Number(value) }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});

    if (formData.password !== formData.confirm_password) {
      setPasswordMatchError(true);
      return;
    }

    // try {
    //   const response = await axios.post(`${process.env.BASE_URL}accounts/register/`, formData);
    //   console.log("response success", response);
    //   if (response.status === 201) {
    router.push('/');
    //   }
    // } catch (error: any) {
    //   setErrors({
    //     email: error.response?.data?.email ? error.response?.data?.email[0] : '',
    //     password: error.response?.data?.password ? error.response?.data?.password[0] : '',
    //     username: error.response?.data?.username ? error.response?.data?.username[0] : '',
    //     role: error.response?.data?.role ? error.response?.data?.role[0] : '',
    //     first_name: error.response?.data?.first_name ? error.response?.data?.first_name[0] : '',
    //     last_name: error.response?.data?.last_name ? error.response?.data?.last_name[0] : '',
    //     phone_number: error.response?.data?.phone_number ? error.response?.data?.phone_number[0] : '',
    //     profile_picture: error.response?.data?.profile_picture ? error.response?.data?.profile_picture[0] : ''
    //   });
    // }
  };



  return (
    <div className='login-ba'>
      <div className='login-ba-sub'>
        <section className="login-ba-sec login-sign-up">
          <div className='text-center mb-3'>
            <h1 className='mb-3 fs-35'>Taskflow</h1>
            <div className='fw-semibold'>Sign up to continue</div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input isRequired type="text" label='Username' name="username" placeholder='Username' onChange={handleChange} autocomplete='new-username' />
                </div>
                <div className="col-12 col-md-6">
                  <Input isRequired type="text" label='Email' name="email" placeholder='Email' onChange={handleChange} autocomplete='new-email' />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  {errors?.username && <Error message={errors?.username || ''} />}
                </div>
                <div className="col-12 col-md-6">
                  {errors?.email && <Error message={errors?.email || ''} />}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input isRequired type="password" label='Password' name="password" placeholder='Password' onChange={handleChange} autocomplete='new-password' />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    isRequired
                    type="password"
                    label='Confirm Password'
                    name="confirm_password"
                    placeholder='Confirm password'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  {errors?.password && <Error message={errors?.password || ''} />}
                </div>
                <div className="col-12 col-md-6">
                  {passwordMatchError && (
                    <Error message='Passwords do not match.' />
                  )}
                </div>
              </div>
            </div>

            <div className=" mb-3">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input isRequired type="text" label='First Name' name="first_name" placeholder='First name' onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6">
                  <Input isRequired type="text" label='Last Name' name="last_name" placeholder='Last name' onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  {errors?.first_name && <Error message={errors?.first_name || ''} />}
                </div>
                <div className="col-12 col-md-6">
                  {errors?.last_name && <Error message={errors?.last_name || ''} />}
                </div>
              </div>
            </div>

            <div className=" mb-3">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input isRequired type="text" label='Phone Number' name="phone_number" placeholder='Phone number' onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6">
                  <Label htmlFor={'role_id'} label='Select Role' isRequired />
                  <select
                    id="role"
                    name="role"
                    className="form-select fs-14"
                    value={formData.role}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled className='fs-14'>Select your role</option>
                    {roles.map(role => (
                      <option key={role.id} value={role.id} className='fs-14'>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  {errors?.phone_number && <Error message={errors?.phone_number || ''} />}
                </div>
                <div className="col-12 col-md-6">
                  {errors?.role && <Error message={errors?.role || ''} />}
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <Input type="text" label='Profile Picture URL' name="profile_picture" placeholder='Enter profile picture URL' onChange={handleChange} />
              </div>
            </div>
            <div className="fs-12 mb-3">
              <p data-testid="legal-message">
                By signing up, I accept the Taskflow
                <a href="#" className="px-1">Cloud Terms of Service</a>
                and acknowledge the
                <a href="#" className="px-1">Privacy Policy</a>.
              </p>
            </div>
            <Button type="submit" text="Sign up" width='full' size="md" className='rounded fw-semibold' />
          </form>
          <div className="my-3">
            <div className="login-already34">
              <Link id="already-have-an-account" href="/">Already have an account? Log in</Link>
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
  );
};

export default SignUp;
