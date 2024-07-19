

export default function Header(){
    return(
        <header className={styles.header}>
            <h1>Meu Livro de Receitas</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/receitas">Receitas</a>
            </nav>      
        </header>
    );
}