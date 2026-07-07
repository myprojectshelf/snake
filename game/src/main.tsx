// Pathing of this specific file
// _____________________________
// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameProvider } from "./context/GameProvider";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
    </StrictMode>,
)
