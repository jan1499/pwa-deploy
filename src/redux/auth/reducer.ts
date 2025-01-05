import { createAction, createReducer } from '@reduxjs/toolkit'
import { ResponseStatus } from '../../helpers/response_status'
import { forgotPassword, login, logout, register, resetPassword } from '.'
import { IApiResponse } from '../../interface/manage/IApiResponse'
import { IAuth } from '../../interface/IAuth'
import {
  printToaster,
  removeBasicLoginDetails,
  setBasicLoginDetails,
  setBasicLoginRole,
  setBasicLoginUser,
} from '../../helpers/helpers'

export const clearError = createAction('auth/clearError');

interface IReducerInitialState {
  data: IAuth
  error: any
  msg: string
  status: ResponseStatus
}

const initialState: IReducerInitialState = {
  data: {} as any,
  error: {} as any,
  msg: '',
  status: ResponseStatus.INITIAL,
}

export const authReducer = createReducer(initialState, (builder) => {
  // LOGIN =============================================================
  builder
    .addCase(login.pending, (state) => {
      state.status = ResponseStatus.LOADING
      state.error = {} as unknown as any
      state.msg = ''
      removeBasicLoginDetails()
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      let data = payload as unknown as IApiResponse
      state.status = ResponseStatus.LOADED
      state.data = data.data
      setBasicLoginDetails(data?.data?.access)
      setBasicLoginRole(data?.data?.role)
      setBasicLoginUser(data?.data?.user)
    })
    .addCase(login.rejected, (state, error) => {
      let errors = error.payload as IApiResponse
      state.status = ResponseStatus.ERROR
      state.error = errors.error
      state.msg = errors.msg
    })

    // REGISTER =============================================================
  builder
  .addCase(register.pending, (state) => {
    state.status = ResponseStatus.LOADING
    state.error = {} as any
    state.msg = ''
  })
  .addCase(register.fulfilled, (state, { payload }) => {
    let data = payload as unknown as IApiResponse
    state.status = ResponseStatus.LOADED
    state.data = data.data
    printToaster(data.msg, 'SUCCESS')
  })
  .addCase(register.rejected, (state, error) => {
    let errors = error.payload as IApiResponse
    state.status = ResponseStatus.ERROR
    state.error = errors.error
    state.msg = errors.msg
    printToaster(errors.msg, 'ERROR')
  })

  // LOGOUT ===================================================================
  builder
    .addCase(logout.pending, (state) => {
      state.status = ResponseStatus.LOADING
      state.data = initialState.data
    })
    .addCase(logout.fulfilled, (state, { payload }) => {
      state.status = ResponseStatus.LOADED
      state.data = initialState.data
      removeBasicLoginDetails()
      window.location.href = '/'
    })

  // FORGOT PASSWORD =============================================================
  builder
    .addCase(forgotPassword.pending, (state) => {
      state.status = ResponseStatus.LOADING
      state.error = {} as unknown as any
      state.msg = ''
    })
    .addCase(forgotPassword.fulfilled, (state, { payload }) => {
      let data = payload as unknown as IApiResponse
      state.status = ResponseStatus.LOADED
      state.data = data.data
      printToaster(data.msg, 'SUCCESS')
      window.location.href = '/reset-confirmation'
    })
    .addCase(forgotPassword.rejected, (state, error) => {
      let errors = error.payload as IApiResponse
      state.status = ResponseStatus.ERROR
      state.error = errors.error
      state.msg = errors.msg
      printToaster(errors.msg, 'ERROR')
    })

  // RESET PASSWORD =============================================================
  builder
    .addCase(resetPassword.pending, (state) => {
      state.status = ResponseStatus.LOADING
      state.error = {} as unknown as any
      state.msg = ''
    })
    .addCase(resetPassword.fulfilled, (state, { payload }) => {
      let data = payload as unknown as IApiResponse
      state.status = ResponseStatus.LOADED
      state.data = data.data
      printToaster(data.msg, 'SUCCESS')
      window.location.href = '/reset-password-confirmation'
    })
    .addCase(resetPassword.rejected, (state, error) => {
      let errors = error.payload as IApiResponse
      state.status = ResponseStatus.ERROR
      state.error = errors.error
      state.msg = errors.msg
      printToaster(errors.msg, 'ERROR')
    })

  builder.addCase(clearError, (state) => {
    state.error = {} as any
    state.msg = ''
  })
})

export default authReducer
