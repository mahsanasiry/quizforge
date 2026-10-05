import { Header } from './Header'

export function PageShell({ children }) {
  return (
    <div className="app-shell">
      <div className="background-orb orb-one" aria-hidden="true" />
      <div className="background-orb orb-two" aria-hidden="true" />
      <Header />
      {children}
      <footer className="site-footer">QuizForge · A React single-page quiz practice project</footer>
    </div>
  )
}
