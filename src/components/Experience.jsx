import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaBriefcase, FaExpand } from 'react-icons/fa';

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "Brinavv Technologies Pvt Ltd",
        duration: "Sept 2025 \u2013 Present",
        desc: [
            "Collaborating within a professional development team to build and maintain real-world web applications.",
            "Gaining deep insights into industry-standard frontend workflows and project lifecycles."
        ]
    },
    {
        role: "Frontend Developer Intern",
        company: "Unipool (Back And Forth Solutions)",
        duration: "May 2025 \u2013 July 2025",
        certificate: "/certificates/unipool.png",
        desc: [
            "Contributed to the development of the official company website, focusing on responsive design and user experience.",
            "Worked closely with cross-functional teams to align UI components with project requirements."
        ]
    }
];

const Experience = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const handleShow = (cert) => {
        setSelectedCert(cert);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedCert(null);
    };

    return (
        <section id="experience">
            <Container>
                <h2 className="section-title">Experience</h2>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        {experiences.map((exp, index) => (
                            <div className="glass-card mb-4 p-4 p-lg-5" key={index}>
                                <Row className="align-items-start">
                                    <Col md={3} className="text-md-center mb-4 mb-md-0 d-flex flex-column align-items-md-center border-md-end" style={{ borderRight: '1px solid var(--border-color)', minHeight: '100px' }}>
                                        <div className="d-none d-md-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary)', fontSize: '1.2rem' }}>
                                            <FaBriefcase />
                                        </div>
                                        <span className="badge" style={{ background: 'var(--bg-card-hover)', color: 'var(--primary)', border: '1px solid var(--border-color)', fontWeight: '500', padding: '6px 12px' }}>
                                            {exp.duration}
                                        </span>
                                    </Col>
                                    <Col md={9} className="ps-md-5">
                                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                                            <div>
                                                <h3 className="h4 font-weight-bold mb-2 text-white">{exp.role}</h3>
                                                <h5 className="text-gradient mb-4 font-weight-bold h6">{exp.company}</h5>
                                            </div>
                                            {exp.certificate && (
                                                <button
                                                    onClick={() => handleShow(exp.certificate)}
                                                    className="glow-btn-outline d-flex align-items-center mb-3 mb-md-0 px-3 py-2"
                                                    style={{ fontSize: '0.85rem' }}
                                                >
                                                    View Certificate <FaExpand className="ms-2" />
                                                </button>
                                            )}
                                        </div>
                                        <ul className="text-muted-custom mb-0 list-unstyled">
                                            {exp.desc.map((item, idx) => (
                                                <li key={idx} className="mb-3 d-flex align-items-start">
                                                    <span className="me-3 mt-1" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>•</span>
                                                    <span style={{ lineHeight: '1.6' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>

            {/* Certificate Modal */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered contentClassName="bg-transparent border-0">
                <Modal.Body className="p-0 position-relative text-center">
                    <button
                        onClick={handleClose}
                        className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                        style={{ zIndex: 10, background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '50%' }}
                    ></button>
                    {selectedCert && (
                        <div style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <img src={selectedCert} alt="Certificate" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Experience;
