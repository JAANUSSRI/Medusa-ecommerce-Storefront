import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <Heading level="h2" className="text-2xl font-semibold text-gray-800">
          Already have an account?
        </Heading>
        <Text className="text-lg text-gray-600 mt-2">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-12 px-6 text-lg font-medium bg-pink-400 hover:bg-violet-500" data-testid="sign-in-button">
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
