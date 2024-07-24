"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-4xl w-full flex flex-col items-center p-6 bg-pink-100 rounded-lg shadow-lg relative -translate-x-28 -translate-y-14" data-testid="register-page">
      <h1 className="text-3xl font-bold text-gray-800 uppercase mb-4">
        Become a <span className="font-bold">The Trendzz</span> Member
      </h1>
      <p className="text-center text-lg text-gray-700 mb-4">
        Create your The Trendzz Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-10 px-4 text-lg"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-10 px-4 text-lg"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-10 px-4 text-lg"
          />
          <Input 
            label="Phone" 
            name="phone" 
            type="tel" 
            autoComplete="tel" 
            data-testid="phone-input" 
            className="border-pink-300 focus:ring-pink-300 w-full h-10 px-4 text-lg"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
            className="border-pink-300 focus:ring-pink-300 w-full h-10 px-4 text-lg"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-gray-700 text-sm mt-4">
          By creating an account, you agree to The Trendzz&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline text-pink-500"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline text-pink-500"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded text-lg" data-testid="register-button">
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-gray-700 text-sm mt-4">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline text-pink-500"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
