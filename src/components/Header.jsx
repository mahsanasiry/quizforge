export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="QuizForge home">
        <span className="brand-mark" aria-hidden="true">Q</span>
        <span>QuizForge</span>
      </a>
      <div className="header-meta">
        <span className="status-dot" aria-hidden="true" />
        <span>React quiz</span>
      </div>
    </header>
  )
}
