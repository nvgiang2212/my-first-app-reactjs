import React, { useState, useEffect } from "react";

const lessonList = [
  { id: 1, name: "The first one" },
  { id: 2, name: "The second one" },
  { id: 3, name: "The third one" },
];

const SixthApp = () => {
  const [lessonId, setLessonId] = useState(1);
  const handleComment = ({ ...detail }) => {
    console.log(detail);
  };

  useEffect(() => {
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <h2>Sixth_App</h2>
      <ul>
        {lessonList.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#ccc" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SixthApp;
