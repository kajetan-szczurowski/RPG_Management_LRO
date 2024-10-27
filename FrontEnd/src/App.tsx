import { SignedIn, SignedOut, SignInButton, UserButton, useUser, useSession } from "@clerk/clerk-react";


function App() {

  const {user} = useUser();
  const {session} = useSession();
  console.log(user)
  return (
    <>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        Dzień Dobry
        {session?.id}
        <button onClick = {handleButton}>Fetch Test</button>
      </SignedIn>

    </>
  )

  async function handleButton(){
    const response = await fetch('http://127.0.0.1:5000');
    const jsoned = await response.json();
    console.log(jsoned);
  }
}

export default App
