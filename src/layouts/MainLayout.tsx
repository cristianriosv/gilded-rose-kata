const MainLayout = ({ children }) => {
    return (
        <div>
            <header>
                <div>
                    <h1>Gilded Rose</h1>
                    <hr />
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Made with ❤️ by Cristian
            </footer>
        </div>
    );
}

export default MainLayout;
