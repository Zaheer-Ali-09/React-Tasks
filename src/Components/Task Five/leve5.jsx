
function Header() {
  return (
    <header style={{ background: "#222", color: "white", padding: "10px" }}>
      <h2>Header</h2>
    </header>
  );
}

function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
      Sidebar
    </aside>
  );
}

function Main() {
  return (
    <main style={{ flex: 1, padding: "10px" }}>
      <h3>Main Content</h3>
      <p>Ye main content hai</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#222", color: "white", padding: "10px" }}>
      Footer
    </footer>
  );
}
// (children use ho raha hai ok sir)
function Layout({ children }) {
  return (
    <div>
      <Header />

      <div style={{ display: "flex", minHeight: "70vh" }}>
        <Sidebar />
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
