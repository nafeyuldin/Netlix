import Image from 'next/image'
import TextField from '@mui/material/TextField'
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

function Signup() {
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Image
        src="https://rb.gy/c7im9y"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-2 top-1 h-20 w-44 md:left-8 md:top-4">
        <Image
          src="https://rb.gy/cnm6ax"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <form className="relative mt-24 space-y-8 bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className="!w-full !bg-white"
          />
          <FormControl variant="filled" className="!w-full !bg-white">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <button className="w-full bg-[#E50914] py-3 font-semibold">
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <a className="cursor-pointer text-white hover:underline">
            Sign up now
          </a>
        </div>
      </form>
    </div>
  )
}

export default Signup
