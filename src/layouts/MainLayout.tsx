import Header from "./Header/";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
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
