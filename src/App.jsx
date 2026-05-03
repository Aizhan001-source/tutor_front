import { BookSession } from "../components/BookSessions/BookSes";

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/tutor" element={<Tutor />} />

          <Route path="/book-session/:id" element={<BookSession />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}