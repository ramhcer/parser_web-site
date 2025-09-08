
import { useState } from "react";
import './header.css';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "РУ" }
];

function Header() {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value);
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header className='header' style={{ padding: "1rem", background: "#222", color: "white" }}>
            <div className='title'>
                <div>{t('header.title')}</div>
            </div>
            <div className="lang-select">
                <select id="lang-select" value={lang} onChange={handleChange} style={{ padding: "0.3rem" }}>
                    {languages.map(l => (
                        <option key={l.code} value={l.code}>{l.label}</option>
                    ))}
                </select>
            </div>
        </header>
    );
}

export default Header;