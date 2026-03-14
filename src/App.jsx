import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import CallingScreen from './components/CallingScreen'
import ConfirmScreen from './components/ConfirmScreen'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [emergencyType, setEmergencyType] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})

  const handleSelectEmergency = (type) => {
    setEmergencyType(type)
    setScreen('quiz')
  }

  const handleQuizComplete = (answers) => {
    setQuizAnswers(answers)
    setScreen('calling')
  }

  const handleCallConfirm = () => {
    setScreen('confirm')
  }

  const handleGoHome = () => {
    setScreen('home')
    setEmergencyType(null)
    setQuizAnswers({})
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-black">
      <div className="relative w-[390px] min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Screen transitions */}
        <div
          key={screen}
          className="animate-fade-in"
          style={{ animationDuration: '0.3s' }}
        >
          {screen === 'home' && (
            <HomeScreen onSelect={handleSelectEmergency} />
          )}
          {screen === 'quiz' && (
            <QuizScreen
              type={emergencyType}
              onComplete={handleQuizComplete}
              onBack={handleGoHome}
            />
          )}
          {screen === 'calling' && (
            <CallingScreen
              type={emergencyType}
              answers={quizAnswers}
              onConfirm={handleCallConfirm}
              onBack={() => setScreen('quiz')}
            />
          )}
          {screen === 'confirm' && (
            <ConfirmScreen type={emergencyType} onHome={handleGoHome} />
          )}
        </div>
      </div>
    </div>
  )
}
