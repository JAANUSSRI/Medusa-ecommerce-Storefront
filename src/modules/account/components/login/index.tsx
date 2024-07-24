import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-md w-full flex flex-col items-center p-8 bg-pink-100 rounded-lg shadow-lg" data-testid="login-page">
      <h1 className="text-3xl font-bold text-gray-800 uppercase mb-6">Welcome back</h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-12 px-4 text-lg"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-12 px-4 text-lg"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded text-lg">
          Sign in
        </SubmitButton>
      </form>
      <span className="text-center text-gray-700 text-sm mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline text-pink-500"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
