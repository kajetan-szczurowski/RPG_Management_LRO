import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";


function App() {

  const {user} = useUser();
  console.log(user)
  return (
    <>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        Dzień Dobry
      </SignedIn>

    </>
  )
}

export default App
