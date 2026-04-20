export function SectionHeader({ title, description, accent = 'blue' }) {
  return (
    <header className={`section-header section-header--${accent}`}>
      <div className="section-header__label" />
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
