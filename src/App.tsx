import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Marketplace from './pages/Marketplace';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Community from './pages/Community';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AllMessages from './pages/dashboard/AllMessages';
import Library from './pages/dashboard/Library';
import AllEvents from './pages/dashboard/AllEvents';
import AdminDashboard from './pages/admin/AdminDashboard';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col pt-20">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/deep-healing" element={<Services />} />
              <Route path="/services/sound-healing" element={<Services />} />
              <Route path="/services/breathwork" element={<Services />} />
              <Route path="/services/meditation" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/messages" element={<ProtectedRoute><AllMessages /></ProtectedRoute>} />
              <Route path="/dashboard/library" element={<ProtectedRoute><Library /></ProtectedRoute>} />
              <Route path="/dashboard/events" element={<ProtectedRoute><AllEvents /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;