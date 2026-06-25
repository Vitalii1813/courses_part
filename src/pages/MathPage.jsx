import React, { useState } from 'react';

const MathPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Foundations of Mathematics',
      description: 'Learn basic concepts including numbers, operations, and problem-solving techniques.',
      lessons: ['Natural Numbers', 'Integers', 'Fractions', 'Decimals'],
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Algebra Fundamentals',
      description: 'Master equations, variables, and algebraic expressions to solve real-world problems.',
      lessons: ['Variables & Expressions', 'Linear Equations', 'Quadratic Equations', 'Functions'],
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Geometry & Trigonometry',
      description: 'Understand shapes, angles, and trigonometric functions for spatial reasoning.',
      lessons: ['Basic Shapes', 'Angles', 'Trigonometric Ratios', 'Circle Theorems'],
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Calculus Essentials',
      description: 'Explore limits, derivatives, and integrals for advanced mathematical analysis.',
      lessons: ['Limits', 'Derivatives', 'Integration', 'Applications of Calculus'],
      difficulty: 'Advanced'
    },
    {
      id: 5,
      title: 'Statistics & Probability',
      description: 'Analyze data and understand probability concepts for informed decision-making.',
      lessons: ['Data Collection', 'Descriptive Statistics', 'Probability', 'Hypothesis Testing'],
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Advanced Problem Solving',
      description: 'Develop critical thinking and advanced techniques to tackle complex mathematical challenges.',
      lessons: ['Logic & Proofs', 'Set Theory', 'Mathematical Reasoning', 'Competition Problems'],
      difficulty: 'Advanced'
    }
  ];

  return (
    <div className="math-page">
      <style>{`
        .math-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 32px;
          background: linear-gradient(180deg, #f7fbff 0%, #e8f1ff 100%);
          color: #1f2a44;
          min-height: 100vh;
        }

        .math-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .math-header h1 {
          font-size: 2.4rem;
          margin-bottom: 12px;
          letter-spacing: 0.6px;
        }

        .math-header p {
          font-size: 1.05rem;
          color: #556080;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .courses-section,
        .benefits {
          margin-top: 32px;
        }

        .courses-section h2,
        .benefits h2,
        .course-details h2 {
          font-size: 1.75rem;
          margin-bottom: 18px;
          color: #102146;
        }

        .courses-grid,
        .benefits-grid {
          display: grid;
          gap: 20px;
        }

        .courses-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .course-card,
        .benefit-card {
          background: #ffffff;
          border: 1px solid rgba(16, 33, 70, 0.08);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 16px 40px rgba(16, 33, 70, 0.06);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .course-card:hover,
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(16, 33, 70, 0.1);
        }

        .course-card.active {
          border-color: #3f8bf3;
          box-shadow: 0 20px 50px rgba(63, 139, 243, 0.18);
        }

        .course-card h3,
        .benefit-card h4 {
          margin-bottom: 12px;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .course-card p,
        .benefit-card p,
        .course-details p {
          color: #4f607a;
          line-height: 1.65;
        }

        .difficulty {
          margin: 10px 0 14px;
          font-weight: 700;
        }

        .course-details {
          background: #ffffff;
          border: 1px solid rgba(16, 33, 70, 0.09);
          border-radius: 20px;
          padding: 26px;
          margin-top: 28px;
          box-shadow: 0 20px 48px rgba(16, 33, 70, 0.06);
        }

        .course-details h3 {
          margin-top: 24px;
          margin-bottom: 14px;
          font-size: 1.2rem;
          color: #102146;
        }

        .lessons-list {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
        }

        .lessons-list li {
          margin-bottom: 12px;
          padding-left: 18px;
          position: relative;
          color: #35455e;
        }

        .lessons-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #3f8bf3;
        }

        .enroll-btn {
          background: linear-gradient(135deg, #3f8bf3, #5a9efc);
          border: none;
          color: white;
          padding: 14px 24px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(63, 139, 243, 0.22);
        }

        .benefits-grid {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-top: 18px;
        }

        .benefit-card h4 {
          margin-bottom: 10px;
        }

        @media (max-width: 680px) {
          .math-page {
            padding: 20px;
          }

          .math-header h1 {
            font-size: 2rem;
          }

          .courses-grid,
          .benefits-grid {
            gap: 16px;
          }

          .course-card,
          .benefit-card,
          .course-details {
            padding: 18px;
          }
        }
      `}</style>

      <header className="math-header">
        <h1>📊 All About Maths - Intelligent Learning Course</h1>
        <p>Master mathematics and enhance your intelligence through comprehensive learning</p>
      </header>

      <section className="courses-section">
        <h2>Available Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-card ${selectedCourse?.id === course.id ? 'active' : ''}`}
              onClick={() => setSelectedCourse(course)}
            >
              <h3>{course.title}</h3>
              <p className="difficulty" style={{
                color: course.difficulty === 'Beginner' ? '#27ae60' : 
                       course.difficulty === 'Intermediate' ? '#f39c12' : '#e74c3c'
              }}>
                {course.difficulty}
              </p>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedCourse && (
        <section className="course-details">
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <h3>Course Lessons:</h3>
          <ul className="lessons-list">
            {selectedCourse.lessons.map((lesson, index) => (
              <li key={index}>✓ {lesson}</li>
            ))}
          </ul>
          <button className="enroll-btn">Enroll Now</button>
        </section>
      )}

      <section className="benefits">
        <h2>Why Learn Mathematics?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h4>🧠 Enhanced Intelligence</h4>
            <p>Develop logical thinking and problem-solving abilities</p>
          </div>
          <div className="benefit-card">
            <h4>💼 Career Growth</h4>
            <p>Excel in STEM fields and technical professions</p>
          </div>
          <div className="benefit-card">
            <h4>🎯 Real-World Applications</h4>
            <p>Apply mathematics to everyday situations and challenges</p>
          </div>
          <div className="benefit-card">
            <h4>🏆 Academic Excellence</h4>
            <p>Master concepts to achieve top grades and rankings</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MathPage;
