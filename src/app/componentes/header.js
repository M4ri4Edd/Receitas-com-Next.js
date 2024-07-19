

export default function Header(){
    return(
        <header className={styles.header}>
            <h1>Meu Livro de Receitas</h1>
            <nav>
                <link href="/home">Home</link>
                <link href="/receitas">Receitas</link>
            </nav>      
        </header>
    );
}