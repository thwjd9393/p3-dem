import { useIntroController } from '../controllers/useIntroController'
import './IntroView.css'

export default function IntroView() {
  const content = useIntroController()

  return (
    <main className="intro">
      <p className="intro__eyebrow">AI SAFE RETURN ASSISTANT</p>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <p className="intro__notice">{content.notice}</p>
    </main>
  )
}
