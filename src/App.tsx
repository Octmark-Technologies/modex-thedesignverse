import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MembershipModal from './components/MembershipModal'
import FloatingActions from './components/FloatingActions'

import HomePage from './pages/HomePage'
import InteriorDesignersPage from './pages/InteriorDesignersPage'
import ArchitectsPage from './pages/ArchitectsPage'
import BuildersPage from './pages/BuildersPage'
import VendorsPage from './pages/VendorsPage'
import ExperienceCentrePage from './pages/ExperienceCentrePage'
import MembershipPage from './pages/MembershipPage'
import CommunityEventsPage from './pages/CommunityEventsPage'

import ServicePage from './pages/ServicePage'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <Router>
      <Navbar onOpenModal={handleOpenModal} />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
          <Route path="/for-interior-designers" element={<InteriorDesignersPage onOpenModal={handleOpenModal} />} />
          <Route path="/for-architects" element={<ArchitectsPage onOpenModal={handleOpenModal} />} />
          <Route path="/for-builders-contractors" element={<BuildersPage onOpenModal={handleOpenModal} />} />
          <Route path="/for-vendors" element={<VendorsPage onOpenModal={handleOpenModal} />} />
          <Route path="/experience-centre" element={<ExperienceCentrePage onOpenModal={handleOpenModal} />} />
          <Route path="/membership" element={<MembershipPage onOpenModal={handleOpenModal} />} />
          <Route path="/community" element={<CommunityEventsPage onOpenModal={handleOpenModal} />} />
          <Route path="/services/*" element={<ServicePage onOpenModal={handleOpenModal} />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions onOpenModal={handleOpenModal} />
      <MembershipModal isOpen={modalOpen} onClose={handleCloseModal} />
    </Router>
  )
}
