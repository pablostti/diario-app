import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

const DiarioApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}

export default DiarioApp