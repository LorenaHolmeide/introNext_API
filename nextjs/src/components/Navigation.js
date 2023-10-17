import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="navigation">
            <h3 className="h3">Webapplikasjoner</h3>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/albums">
                            Albums
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;