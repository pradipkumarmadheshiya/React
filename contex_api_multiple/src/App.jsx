import Home from "./Home"
import ThemeProvider from "./ThemeProvider"
import UserProvider from "./UserProvider"

function App() {

  return (
    <UserProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
